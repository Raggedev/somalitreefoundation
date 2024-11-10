import React, { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TreeCard } from './TreeCard';
import { Tree } from '../types/tree';
import { TreePine, Loader } from 'lucide-react';
import { isEqual } from 'lodash';

interface TreeListProps {
  trees: Tree[];
  itemsPerLoad?: number;
}

export const TreeList: React.FC<TreeListProps> = ({ trees, itemsPerLoad = 10 }) => {
  const [items, setItems] = useState<Tree[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const previousTrees = useRef<Tree[]>([]);

  useEffect(() => {
    if (!isEqual(previousTrees.current, trees)) {
      previousTrees.current = trees;
      initializeItems();
    }
  }, [trees]);

  const initializeItems = () => {
    setItems(trees.slice(0, itemsPerLoad));
    setHasMore(trees.length > itemsPerLoad);
  };

  const fetchMoreData = () => {
    if (items.length >= trees.length) {
      setHasMore(false);
      return;
    }

    const nextItems = trees.slice(items.length, items.length + itemsPerLoad);
    setItems((prevItems) => [...prevItems, ...nextItems]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <TreePine className="w-6 h-6 text-green-600" />
          <h2 className="text-lg font-semibold text-gray-800">Tree Species Guide</h2>
        </div>
        
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="flex justify-center items-center py-4">
              <Loader className="w-6 h-6 text-green-600 animate-spin" />
            </div>
          }
          endMessage={
            <div className="text-center py-4 text-gray-500">
              You've seen all trees! 🌳
            </div>
          }
          height={500}
          className="overflow-y-auto pr-2"
        >
          <div className="grid grid-cols-1 gap-6">
            {items.map((tree, index) => (
              <TreeCard key={`${tree.name}-${index}`} tree={tree} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};