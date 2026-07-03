import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo/Hospital Logo.png';
import fullLogo from '../../assets/logo/full-logo.png';

// Manual cn replacement to avoid any issues with the utility
const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

interface MegaMenuSection {
  title: string;
  items: string[];
  path?: string;
}

interface NavLink {
  name: string;
  path: string;
  megaMenu?: MegaMenuSection[];
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      megaMenu: [
        { title: 'OPD Services', items: ['Consultations', 'Doctor Schedule'], path: '/opd' },
        { title: 'IPD Services', items: ['Indoor Facilities', 'Critical Care'], path: '/services#ipd' }
      ]
    },
    { 
      name: 'Doctors', 
      path: '/doctors',
      megaMenu: [
        { title: 'Surgical Specialists', items: ['Orthopedics', 'General Surgery', 'Urology', 'Neuro Surgeons'] },
        { title: 'Physicians', items: ['General Medicine', 'Cardiology', 'Chest Physician', 'Gastroentrology'] },
        { title: 'Maternal & Child', items: ['Gynaecology', 'Peadiatrics', 'Peadiatric Surgeons'] },
        { title: 'Specialized Care', items: ['Nephrology', 'ENT', 'Plastic Surgeon', 'Psychiatrists'] }
      ]
    },
    { name: 'Facilities', path: '/facilities' },
    { 
      name: 'Gallery', 
      path: '#',
      megaMenu: [
        { title: 'Photos', items: ['Hospital Infrastructure'], path: '/gallery' },
        { title: 'Videos', items: ['Patient Testimonials'], path: '/testimonials' }
      ]
    },
    { name: 'Blogs', path: '/blogs' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-700",
      isScrolled 
        ? "bg-medical-navy backdrop-blur-xl border-b border-white/5 py-1.5 shadow-2xl" 
        : "bg-medical-navy py-2.5 border-b border-white/5"
    )}>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-8 xl:gap-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="bg-white px-2 py-1 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shrink-0">
            <img src={fullLogo} alt="Bhargava Medical & Trauma Center" className="h-8 sm:h-10 w-auto object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <span className={cn(
              "font-serif font-medium text-[15px] sm:text-base leading-snug transition-colors duration-500 text-white whitespace-nowrap"
            )}>
              Bhargava Medical & <br /> Trauma Center
            </span>
            <span className="text-[8px] sm:text-[9px] text-medical-gold uppercase font-bold tracking-[0.3em] mt-0.5 whitespace-nowrap">Excellence in Care</span>
          </div>
        </Link>

        {/* Right Side Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 ml-auto">
          {/* Desktop Links */}
          <div className="flex items-center gap-3 xl:gap-6">
            {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative"
              onMouseEnter={() => link.megaMenu && setActiveMegaMenu(link.name)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link 
                to={link.path}
                className={cn(
                  "font-semibold text-[13px] tracking-wide transition-all duration-500 flex items-center gap-1.5 whitespace-nowrap",
                  location.pathname === link.path ? "text-medical-gold" : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
                {link.megaMenu && <ChevronDown size={14} className="opacity-40" />}
              </Link>
              
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="navIndicator"
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-medical-gold shadow-[0_0_10px_rgba(14,165,233,0.5)]" 
                />
              )}

              <AnimatePresence>
                {link.megaMenu && activeMegaMenu === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[520px] bg-medical-navy/95 backdrop-blur-2xl border border-white/10 shadow-luxury rounded-[2rem] p-10 grid grid-cols-2 gap-12"
                  >
                    {link.megaMenu.map((section) => (section && (
                      <div key={section.title}>
                        <h4 className="font-bold text-medical-gold mb-6 text-xs uppercase tracking-[0.2em]">{section.title}</h4>
                        <ul className="space-y-4">
                          {section.items.map((item) => (
                            <li key={item}>
                              <Link 
                                to={section.path || `${link.path}#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                                className="text-[14px] text-white/60 hover:text-white transition-all font-medium flex items-center gap-3 group"
                              >
                                <div className="w-2 h-2 rounded-full bg-medical-royal/30 group-hover:bg-medical-gold group-hover:scale-125 transition-all" />
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center shrink-0">
            <Link to="/appointment" className="btn-primary whitespace-nowrap !px-5 !py-2.5 !text-[13px]">
              <Calendar size={16} />
              Book Consult
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-medical-navy z-[60] lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <Link to="/" className="flex items-center gap-3">
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center">
                  <img src={fullLogo} alt="Bhargava Medical & Trauma Center" className="h-10 sm:h-12 w-auto object-contain" />
                </div>
                <span className="font-serif font-bold text-2xl text-white">BMTC</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={cn(
                    "text-3xl font-serif font-bold transition-colors",
                    location.pathname === link.path ? "text-medical-gold" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 space-y-4">
                <Link 
                  to="/appointment" 
                  className="btn-primary w-full py-5 text-lg"
                >
                  Book Appointment
                </Link>
                <Link 
                  to="tel:+917309038872" 
                  className="btn-outline w-full py-5 text-lg flex items-center justify-center gap-3"
                >
                  <Phone size={20} /> Emergency Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
