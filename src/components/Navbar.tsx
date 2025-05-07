import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-green-900/95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="border rounded-full w-8 h-8 sm:w-10 sm:h-10"
                src="/static/companyLogo.jpeg"
                alt="logo"
              />
              <span className="ml-2 text-xl font-bold text-white">
                ProsureTech
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">Services</NavLink>
              <NavLink href="#initiatives">About us</NavLink>
              <NavLink href="#resources">Blog</NavLink>
              <button className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out">
                Book A call
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
              Services
            </MobileNavLink>

            <MobileNavLink href="#resources" onClick={() => setIsOpen(false)}>
              About us
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
              Blog
            </MobileNavLink>
            <div className="pt-2">
              <button className="w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium text-green-100 hover:text-white hover:bg-green-700 transition duration-150 ease-in-out"
    >
      {children}
    </a>
  );
};

const MobileNavLink: React.FC<{
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ href, onClick, children }) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-green-100 hover:text-white hover:bg-green-700 transition duration-150 ease-in-out"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
