import React from 'react';
import { User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white border-b">
      <a 
        href="/" 
        className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors"
      >
        Somali Tree Foundation
      </a>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600 hidden sm:inline">Monthly Progress</span>
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </div>
  );
};