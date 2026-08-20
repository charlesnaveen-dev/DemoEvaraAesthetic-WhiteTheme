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
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F8F7F3]/95 backdrop-blur-md border-b border-[#E5E3DC] py-3 shadow-sm"
            : "bg-transparent py-5 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LEFT: Evara logo */}
            <Link to="/" className="flex items-center group space-x-3">
              <img
                src="/images/evara-logo-black-transparent.png"
                alt="Evara Aesthetics Logo"
                className={`transition-all duration-500 object-contain ${
                  isScrolled ? "h-10 w-10 sm:h-12 sm:w-12" : "h-12 w-12 sm:h-14 sm:w-14"
                }`}
              />
              <div className="flex flex-col">
                <span className="font-serif-luxury tracking-[0.2em] text-lg sm:text-xl font-medium text-[#111111] group-hover:text-[#B89B5E] transition-colors">
                  EVARA
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#555555] uppercase font-light">
                  AESTHETICS
                </span>
              </div>
            </Link>

            {/* CENTER: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-1 ${
                      isActive
                        ? "text-[#111111] font-semibold"
                        : "text-[#555555] hover:text-[#111111]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B89B5E]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: Book Consultation CTA & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <Link
                to="/book-consultation"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#111111] hover:bg-[#222222] transition-all rounded-none border border-[#111111]"
              >
                <span>BOOK CONSULTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#111111] hover:text-[#B89B5E] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Editorial Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F8F7F3] pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-8 mt-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#555555] border-b border-[#E5E3DC] pb-3">
                EVARA AESTHETICS · MENU
              </p>

              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-serif-luxury text-3xl sm:text-4xl tracking-wide transition-colors flex items-center justify-between group ${
                          isActive ? "text-[#B89B5E] font-medium" : "text-[#111111] hover:text-[#B89B5E]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className={`w-6 h-6 transition-colors ${
                          isActive ? "text-[#B89B5E]" : "text-[#D5D3CC] group-hover:text-[#B89B5E]"
                        }`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="space-y-6 pt-10 border-t border-[#E5E3DC]">
              <Link
                to="/book-consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-[#111111] text-white text-center text-xs tracking-[0.2em] font-semibold uppercase block hover:bg-[#222222] transition-colors"
              >
                BOOK CONSULTATION
              </Link>
              
              <div className="flex justify-between items-center text-[11px] tracking-widest text-[#555555]">
                <span>COIMBATORE</span>
                <a href="tel:+919943999177" className="hover:text-[#111111]">099439 99177</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
