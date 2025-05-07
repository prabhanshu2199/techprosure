import React from 'react';
import { Recycle, Droplets, Trees, Wind } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: <Recycle className="h-8 w-8 text-green-400" />,
    value: '87%',
    label: 'Waste Reduction',
    description: 'Through innovative recycling programs'
  },
  {
    id: 2,
    icon: <Droplets className="h-8 w-8 text-green-400" />,
    value: '250M',
    label: 'Gallons Saved',
    description: 'Through water conservation efforts'
  },
  {
    id: 3,
    icon: <Trees className="h-8 w-8 text-green-400" />,
    value: '1.2M',
    label: 'Trees Planted',
    description: 'In reforestation initiatives worldwide'
  },
  {
    id: 4,
    icon: <Wind className="h-8 w-8 text-green-400" />,
    value: '40%',
    label: 'Carbon Reduction',
    description: 'Through renewable energy adoption'
  }
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">Our Impact</h2>
          <p className="mt-4 text-lg text-green-800 max-w-2xl mx-auto">
            Measurable results from our sustainability initiatives
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-green-500 transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-green-800 text-center">{stat.value}</h3>
              <p className="text-lg font-medium text-green-700 text-center mb-2">{stat.label}</p>
              <p className="text-green-600 text-center text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;