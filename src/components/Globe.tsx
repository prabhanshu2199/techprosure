import React, { useEffect, useRef } from "react";

const Globe: React.FC = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (globeRef.current) {
        const scrollPosition = window.scrollY;
        const rotationSpeed = 1 + scrollPosition * 0.0001;
        globeRef.current.style.animationDuration = `${60 / rotationSpeed}s`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div
        ref={globeRef}
        className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] rounded-full bg-earth-blue animate-spin-slow relative overflow-hidden shadow-xl"
        style={{
          background:
            "radial-gradient(circle at center, #1e40af 60%, #15803d 60%)",
          boxShadow:
            "0 0 30px rgba(74, 222, 128, 0.3), inset 0 0 100px rgba(21, 128, 61, 0.8)",
        }}
      >
        {/* Continents */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&w=800')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "soft-light",
            opacity: 0.6,
          }}
        />

        {/* Atmosphere glow effect */}
        <div
          className="absolute inset-0 w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, rgba(74, 222, 128, 0) 70%)",
          }}
        />
      </div>

      {/* Orbit rings with slower rotation */}
      <div
        className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] md:w-[540px] md:h-[540px] lg:w-[640px] lg:h-[640px] rounded-full border border-green-200 opacity-30 animate-spin-slow"
        style={{ animationDuration: "90s" }}
      ></div>
      <div
        className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] lg:w-[660px] lg:h-[660px] rounded-full border border-green-200 opacity-20 animate-spin-slow"
        style={{ animationDuration: "75s", animationDirection: "reverse" }}
      ></div>
    </div>
  );
};

export default Globe;
