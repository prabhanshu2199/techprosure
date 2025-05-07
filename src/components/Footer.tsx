import React from 'react';
import { Leaf, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-7 w-7 text-green-400" />
              <span className="ml-2 text-xl font-bold text-white">EcoGlobe</span>
            </div>
            <p className="text-green-300 mb-4">
              Creating a sustainable future through innovation, education, and community action.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
              <SocialIcon icon={<Github className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#initiatives">Initiatives</FooterLink>
              <FooterLink href="#resources">Resources</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Sustainability Tips</FooterLink>
              <FooterLink href="#">Research Papers</FooterLink>
              <FooterLink href="#">Carbon Calculator</FooterLink>
              <FooterLink href="#">Educational Materials</FooterLink>
              <FooterLink href="#">Partner Programs</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Volunteer</FooterLink>
              <FooterLink href="#">Donate</FooterLink>
              <FooterLink href="#">Become a Partner</FooterLink>
              <FooterLink href="#">Join Our Team</FooterLink>
              <FooterLink href="#">Spread the Word</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-400 text-sm">© 2025 EcoGlobe. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-green-400 hover:text-green-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-green-400 hover:text-green-300 text-sm">Terms of Service</a>
            <a href="#" className="text-green-400 hover:text-green-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <a href="#" className="text-green-400 hover:text-white transition-colors duration-200 p-2 bg-green-800 rounded-full hover:bg-green-700">
      {icon}
    </a>
  );
};

const FooterLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="text-green-300 hover:text-white transition-colors duration-200">
        {children}
      </a>
    </li>
  );
};

export default Footer;