import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Initiatives from "./components/Initiatives";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "ProsureTech | Sustainability for a Better Future";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Initiatives />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
