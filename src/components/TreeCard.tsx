import React from 'react';
import { Tree } from '../types/tree';
import { Tag } from 'lucide-react';

interface TreeCardProps {
  tree: Tree;
}

export const TreeCard: React.FC<TreeCardProps> = ({ tree }) => {
  return (
    <div className="bg-green-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{tree.name}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{tree.useAndApplication.description}</p>
      <div className="flex flex-wrap gap-2">
        {tree.useAndApplication.tags.map((tag) => (
          <span 
            key={tag}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
          >
            <Tag size={14} className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};