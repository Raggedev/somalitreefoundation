import React from 'react';
import { TreePine, Tag, MoreHorizontal } from 'lucide-react';
import { trees } from '../data/trees';

export const ProgressSection: React.FC = () => {
  // Use a fixed seed based on the current month to keep the same tree for the entire month
  const currentMonth = new Date().getMonth();
  const selectedTree = trees[currentMonth % trees.length];

  return (
    <div className="space-y-6">
      {/* Tree of the Month Section */}
      <div className="bg-white rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <TreePine className="w-6 h-6 text-green-600" />
            <h2 className="text-lg font-semibold text-gray-800">Tree of the Month</h2>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{selectedTree.name}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {selectedTree.useAndApplication.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedTree.useAndApplication.tags.map((tag) => (
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

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Updated monthly</span>
              <span>{new Date().toLocaleString('default', { month: 'long' })} Featured Tree</span>
            </div>
          </div>
        </div>
      </div>

      {/* Planning Section */}
      <div className="bg-white rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Activities</h2>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Conservation Workshop</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Community Training</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Field Assessment</span>
          </div>
        </div>
      </div>
    </div>
  );
};