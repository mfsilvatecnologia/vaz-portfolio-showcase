
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/about' },
  { name: 'Experiência', path: '/experience' },
  { name: 'Projetos', path: '/projects' },
  { name: 'Contato', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 dark:bg-portfolio-dark/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-heading font-bold text-xl md:text-2xl"
          onClick={closeMenu}
        >
          <span className="gradient-text">Johnny Vaz</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors relative px-1 py-2',
                    'hover:text-portfolio-primary after:content-[""] after:absolute after:left-0 after:bottom-0',
                    'after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300',
                    location.pathname === link.path 
                      ? 'text-portfolio-primary after:bg-portfolio-primary after:w-full' 
                      : 'text-foreground after:bg-portfolio-primary'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={cn(
          'md:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out pt-20',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <ul className="flex flex-col items-center space-y-6 p-6">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full">
              <Link 
                to={link.path}
                className={cn(
                  'text-lg font-medium block py-4 px-6 text-center w-full rounded-md',
                  location.pathname === link.path 
                    ? 'bg-portfolio-primary/10 text-portfolio-primary'
                    : 'hover:bg-muted'
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
