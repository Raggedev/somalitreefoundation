import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ title, count, icon, color, onClick }) => {
  return (
    <div 
      className={`${color} rounded-xl p-4 text-white hover:shadow-lg transition-shadow cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="p-2 bg-white/20 rounded-lg">
          {icon}
        </div>
        <span className="text-2xl font-bold">{count}</span>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{title}</h3>
        <button className="flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
          Read <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};