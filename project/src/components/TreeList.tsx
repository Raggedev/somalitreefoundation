import React, { useEffect, useState } from 'react';
import { TreeCard } from './TreeCard';
import { TreePine, Loader, WifiOff } from 'lucide-react';
import { useTreeData } from '../hooks/useTreeData';

export const TreeList: React.FC = () => {
  const { trees, loading, error, hasMore, loadMore, refresh, totalCount } = useTreeData();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      setInitialLoading(true);
      await refresh();
      setInitialLoading(false);
    };
    fetchInitialData();
  }, [refresh]);

  if (error) {
    return (
      <div className="bg-white rounded-xl p-6">
        <div className="flex flex-col items-center justify-center gap-4 py-8">
          <WifiOff className="w-12 h-12 text-gray-400" />
          <p className="text-gray-600 text-center">
            {error}
            <br />
            <button 
              onClick={refresh}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Try Again
            </button>
          </p>
        </div>
      </div>
    );
  }

  if (initialLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="w-8 h-8 text-green-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <TreePine className="w-6 h-6 text-green-600" />
          <h2 className="text-lg font-semibold text-gray-800">Tree Species Guide</h2>
          <span className="text-sm text-gray-500">
            {trees.length} of {totalCount} trees
          </span>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {trees.map((tree) => (
              <TreeCard key={tree.id} tree={tree} />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center pt-4">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Load More Trees'
                )}
              </button>
            </div>
          )}

          {!hasMore && trees.length > 0 && (
            <div className="text-center py-4 text-gray-500">
              You've seen all {totalCount} trees! 🌳
            </div>
          )}
        </div>
      </div>
    </div>
  );
};