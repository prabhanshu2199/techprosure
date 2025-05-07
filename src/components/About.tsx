import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3952064/pexels-photo-3952064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sustainable practices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-100 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-green-200 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              We're dedicated to creating a sustainable future through innovative environmental solutions, education, and community engagement. Our team works tirelessly to address the most pressing ecological challenges facing our planet.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Promote renewable energy adoption",
                "Conserve natural resources and biodiversity",
                "Support circular economy initiatives",
                "Empower communities through education"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-green-100 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg">
              About Our Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;