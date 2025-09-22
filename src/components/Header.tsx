import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  currentSection?: string;
}

const Header = ({ currentSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-poppins font-bold text-2xl text-primary">
            Luxe Beauty
          </div>
          
          <nav className="flex items-center space-x-8">
            {['Home', 'Shop', 'Checkout', 'Contact Us'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="font-poppins font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="px-4 py-4 flex items-center justify-center">
          <div className="font-poppins font-bold text-xl text-primary">
            Luxe Beauty
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50">
        <div className="flex items-center justify-around py-3">
          {[
            { name: 'Home', id: 'home' },
            { name: 'Shop', id: 'shop' },
            { name: 'Checkout', id: 'checkout' },
            { name: 'Contact', id: 'contact-us' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center space-y-1 font-poppins text-xs font-medium text-foreground hover:text-primary transition-colors duration-300"
            >
              <div className="w-6 h-6 bg-brand-gradient rounded-full"></div>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;