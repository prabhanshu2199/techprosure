import React from 'react';
import { Leaf } from 'lucide-react';

const FloatingLeaves: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: '0',
            opacity: 0.2,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 5}s`,
            animationIterationCount: 'infinite'
          }}
        >
          <Leaf
            size={Math.random() * 20 + 15}
            className="text-green-500"
            style={{
              filter: 'blur(0.5px)',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingLeaves;