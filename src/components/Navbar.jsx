import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "DENTAL", path: "/dental" },
    { name: "SKIN", path: "/skin" },
    { name: "HAIR", path: "/hair" },
    { name: "ABOUT", path: "/about" },
    { name: "OUR APPROACH", path: "/our-approach" },
    { name: "REVIEWS", path: "/reviews" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E8E6EB] py-3.5"
            : "bg-transparent py-5 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center group space-x-3">
              <img
                src="/images/evara-logo-black-transparent.png"
                alt="Evara Aesthetics Logo"
                className={`transition-all duration-300 object-contain ${
                  isScrolled ? "h-9 w-9 sm:h-10 sm:w-10" : "h-11 w-11 sm:h-12 sm:w-12"
                }`}
              />
              <div className="flex flex-col">
                <span className="font-serif-luxury tracking-[0.2em] text-lg sm:text-xl font-medium text-[#121016] group-hover:text-[#3B1457] transition-colors">
                  EVARA
                </span>
                <span className="text-[9px] tracking-[0.3em] text-[#84808C] uppercase font-light">
                  AESTHETICS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[11px] uppercase tracking-[0.2em] transition-colors relative py-1 font-medium ${
                      isActive
                        ? "text-[#3B1457] font-semibold"
                        : "text-[#55525B] hover:text-[#121016]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#3B1457]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action */}
            <div className="flex items-center space-x-4">
              <Link
                to="/book-consultation"
                className="hidden sm:inline-flex items-center px-6 py-2.5 text-[11px] tracking-[0.18em] uppercase font-medium text-white bg-[#3B1457] hover:bg-[#4F1D75] transition-colors rounded-full"
              >
                <span>BOOK CONSULTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#121016] hover:text-[#3B1457] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Editorial Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-8 mt-4">
              <div className="flex items-center justify-between border-b border-[#E8E6EB] pb-3 text-[10px] uppercase tracking-[0.25em] text-[#84808C]">
                <span>EVARA AESTHETICS</span>
                <span>COIMBATORE</span>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-serif-luxury text-3xl tracking-wide transition-colors flex items-center justify-between py-1 ${
                        isActive ? "text-[#3B1457] font-medium" : "text-[#121016]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#84808C]" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="space-y-4 pt-8 border-t border-[#E8E6EB]">
              <Link
                to="/book-consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-[#3B1457] text-white text-center text-xs tracking-[0.18em] font-medium uppercase block rounded-full"
              >
                BOOK CONSULTATION
              </Link>
              <div className="flex justify-between items-center text-xs tracking-wider text-[#55525B]">
                <span>TATABAD, COIMBATORE</span>
                <a href="tel:+919943999177" className="font-medium text-[#121016]">099439 99177</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
