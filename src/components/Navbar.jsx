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
      if (window.scrollY > 30) {
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
            ? "bg-[#FAF9FC]/92 backdrop-blur-md border-b border-[#E6E2ED] py-3.5 shadow-sm"
            : "bg-transparent py-5 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LEFT: Evara logo */}
            <Link to="/" className="flex items-center group space-x-3.5">
              <div className="relative">
                <img
                  src="/images/evara-logo-black-transparent.png"
                  alt="Evara Aesthetics Logo"
                  className={`transition-all duration-500 object-contain ${
                    isScrolled ? "h-9 w-9 sm:h-11 sm:w-11" : "h-11 w-11 sm:h-13 sm:w-13"
                  }`}
                />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#0284C7] ring-2 ring-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury tracking-[0.24em] text-lg sm:text-xl font-medium text-[#14101A] group-hover:text-[#4A1571] transition-colors">
                  EVARA
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.32em] text-[#797285] uppercase font-light">
                  AESTHETICS
                </span>
              </div>
            </Link>

            {/* CENTER: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[11px] uppercase tracking-[0.22em] transition-colors relative py-1.5 font-medium ${
                      isActive
                        ? "text-[#4A1571]"
                        : "text-[#5B5566] hover:text-[#14101A]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A1571]"
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
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium text-white bg-[#2A0845] hover:bg-[#4A1571] transition-all duration-300 rounded-full border border-[#2A0845] group shadow-xs"
              >
                <span>BOOK CONSULTATION</span>
                <div className="w-5 h-5 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center ml-2 transition-colors">
                  <ArrowUpRight className="w-3 h-3 text-[#38BDF8]" />
                </div>
              </Link>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#14101A] hover:text-[#4A1571] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="fixed inset-0 z-40 bg-[#FAF9FC] pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-8 mt-6">
              <div className="flex items-center justify-between border-b border-[#E6E2ED] pb-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#797285]">
                  EVARA AESTHETICS · MENU
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#0284C7] font-medium">COIMBATORE</span>
              </div>

              <nav className="flex flex-col space-y-5">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-serif-luxury text-3xl sm:text-4xl tracking-wide transition-colors flex items-center justify-between group ${
                          isActive ? "text-[#4A1571] font-medium" : "text-[#14101A] hover:text-[#4A1571]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className={`w-5 h-5 transition-colors ${
                          isActive ? "text-[#4A1571]" : "text-[#B8B2C4] group-hover:text-[#4A1571]"
                        }`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="space-y-5 pt-8 border-t border-[#E6E2ED]">
              <Link
                to="/book-consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-[#2A0845] text-white text-center text-xs tracking-[0.2em] font-semibold uppercase block hover:bg-[#4A1571] transition-colors rounded-full shadow-xs"
              >
                BOOK CONSULTATION
              </Link>
              
              <div className="flex justify-between items-center text-[11px] tracking-widest text-[#5B5566]">
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mr-2" />
                  TATABAD, COIMBATORE
                </span>
                <a href="tel:+919943999177" className="hover:text-[#4A1571] font-medium">099439 99177</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
