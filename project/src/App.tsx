import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CourseCard } from './components/CourseCard';
import { ProgressSection } from './components/ProgressSection';
import { TreeList } from './components/TreeList';
import { CommunityGrowth } from './components/CommunityGrowth';
import { ConservationMethods } from './components/ConservationMethods';
import { TreePine, Users, School, Leaf } from 'lucide-react';
import { initializeFirebaseData } from './scripts/initFirebase';
import { TreeService } from './services/treeService';

function App() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [treeCount, setTreeCount] = useState(0);

  useEffect(() => {
    const initData = async () => {
      await initializeFirebaseData();
      const count = await TreeService.getTotalCount();
      setTreeCount(count);
      setIsInitialized(true);
    };
    initData();
  }, []);

  const courses = [
    {
      id: 'trees',
      title: 'Tree Species Guide',
      count: treeCount,
      icon: <TreePine className="w-6 h-6" />,
      color: 'bg-green-500',
      textColor: 'text-green-500'
    },
    {
      id: 'community',
      title: 'Community Growth',
      count: 7,
      icon: <Users className="w-6 h-6" />,
      color: 'bg-blue-500',
      textColor: 'text-blue-500'
    },
    {
      id: 'conservation',
      title: 'Conservation Methods',
      count: 17,
      icon: <Leaf className="w-6 h-6" />,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-500'
    },
    {
      id: 'education',
      title: 'Educational Resources',
      count: 21,
      icon: <School className="w-6 h-6" />,
      color: 'bg-slate-500',
      textColor: 'text-slate-500'
    }
  ];

  const renderContent = () => {
    if (!isInitialized) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="text-green-600">Initializing data...</div>
        </div>
      );
    }

    switch (selectedSection) {
      case 'trees':
        return <TreeList />;
      case 'community':
        return <CommunityGrowth />;
      case 'conservation':
        return <ConservationMethods />;
      default:
        return <ProgressSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Mobile View */}
      <div className="md:hidden">
        <main className="container mx-auto p-4 pb-20">
          {renderContent()}
        </main>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex justify-around items-center">
            {courses.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedSection(item.id)}
                className={`p-3 rounded-full transition-colors ${
                  selectedSection === item.id
                    ? `${item.textColor} bg-gray-100`
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {React.cloneElement(item.icon, {
                  className: `w-6 h-6 ${
                    selectedSection === item.id ? item.textColor : 'text-gray-400'
                  }`
                })}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <main className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-5 gap-6">
            {/* Left Column - Courses (40%) */}
            <div className="col-span-2 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Welcome</h2>
                <button className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-xl font-semibold hover:bg-green-600 transition-colors">
                  +
                </button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    count={course.count}
                    icon={React.cloneElement(course.icon, { className: 'w-6 h-6 text-white' })}
                    color={course.color}
                    onClick={() => setSelectedSection(course.id)}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Content (60%) */}
            <div className="col-span-3 space-y-6">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;