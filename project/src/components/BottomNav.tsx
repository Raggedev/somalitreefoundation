import React from 'react';

interface NavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}

interface BottomNavProps {
  items: NavItem[];
  selectedSection: string | null;
  onSelect: (id: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ items, selectedSection, onSelect }) => {
  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:block fixed top-20 left-4 space-y-4 p-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              selectedSection === item.id
                ? `${item.color} bg-gray-100`
                : 'text-gray-400 hover:text-gray-600'
            }`}
            title={item.title}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`p-3 rounded-full transition-all ${
                selectedSection === item.id
                  ? `${item.color} bg-gray-100`
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};