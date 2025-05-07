import React from 'react';
import { Leaf, Droplets, Sun, Recycle } from 'lucide-react';

const initiatives = [
  {
    id: 1,
    icon: <Leaf className="h-12 w-12 text-green-500" />,
    title: 'Reforestation Projects',
    description: 'We partner with local communities to restore native forests and promote biodiversity conservation.',
    action: 'Join a planting event'
  },
  {
    id: 2,
    icon: <Droplets className="h-12 w-12 text-green-500" />,
    title: 'Water Conservation',
    description: 'Implementing water-saving technologies and education programs to protect this precious resource.',
    action: 'Learn water-saving tips'
  },
  {
    id: 3,
    icon: <Sun className="h-12 w-12 text-green-500" />,
    title: 'Renewable Energy',
    description: 'Supporting the transition to clean energy through community solar projects and energy efficiency.',
    action: 'Switch to renewable power'
  },
  {
    id: 4,
    icon: <Recycle className="h-12 w-12 text-green-500" />,
    title: 'Zero Waste Program',
    description: 'Building circular economies through waste reduction, recycling, and sustainable product design.',
    action: 'Start recycling today'
  }
];

const Initiatives: React.FC = () => {
  return (
    <section id="initiatives" className="py-20 bg-gradient-to-br from-green-900 to-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Initiatives</h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Innovative programs that drive real environmental change
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-400/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-green-800/50 inline-block rounded-full">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-green-100 mb-5">{item.description}</p>
              <button className="text-green-300 font-medium flex items-center hover:text-white transition-colors duration-200">
                {item.action}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;