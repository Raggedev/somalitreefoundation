import { useState, useCallback, useEffect } from 'react';
import { TreeService } from '../services/treeService';
import { Tree } from '../types/tree';

const BATCH_SIZE = 10;

export const useTreeData = () => {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  const loadInitialTrees = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      TreeService.resetPagination();
      
      const count = await TreeService.getTotalCount();
      setTotalCount(count);
      
      const initialTrees = await TreeService.getTrees(BATCH_SIZE);
      setTrees(initialTrees);
      setHasMore(initialTrees.length < count);
    } catch (err) {
      console.error('Error loading initial trees:', err);
      setError('Unable to load trees. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const moreTrees = await TreeService.getMoreTrees(BATCH_SIZE);
      
      if (moreTrees.length === 0) {
        setHasMore(false);
        return;
      }

      setTrees(prevTrees => {
        const updatedTrees = [...prevTrees, ...moreTrees];
        setHasMore(updatedTrees.length < totalCount);
        return updatedTrees;
      });
    } catch (err) {
      console.error('Error loading more trees:', err);
      setError('Unable to load more trees. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, totalCount]);

  const refresh = useCallback(async () => {
    await loadInitialTrees();
  }, [loadInitialTrees]);

  useEffect(() => {
    loadInitialTrees();
  }, [loadInitialTrees]);

  return {
    trees,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
    totalCount
  };
};