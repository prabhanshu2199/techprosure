import React from "react";
import Globe from "./Globe";
import FloatingLeaves from "./FloatingLeaves";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-green-900 via-green-800 to-green-700"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <FloatingLeaves />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-20">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
            <span className="text-green-400">ProsureTech</span>: Creating a{" "}
            <span className="text-green-400">Sustainable</span> Future Together
          </h1>
          <p
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-green-100 max-w-2xl mx-auto lg:mx-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Join ProsureTech's mission to protect the planet through innovation and
            community action. Every small step makes a difference.
          </p>
          <div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="px-6 sm:px-8 py-3 rounded-lg text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-6 sm:px-8 py-3 rounded-lg text-base font-medium text-green-100 bg-green-800 hover:bg-green-900 border border-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
        <div
          className="lg:w-1/2 flex justify-center animate-fade-in mt-12 lg:mt-0"
          style={{ animationDelay: "0.6s" }}
        >
          <Globe />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 sm:w-8 h-10 sm:h-12 rounded-full border-2 border-green-400 flex items-start justify-center">
          <div className="w-1 sm:w-1.5 h-2 sm:h-3 bg-green-400 rounded-full mt-2 animate-slide-up"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
