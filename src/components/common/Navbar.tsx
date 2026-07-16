import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import fullLogo from '../../assets/logo/full-logo.png';

// Manual cn replacement to avoid any issues with the utility
const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

interface NavItem {
  name: string;
  path: string;
}

interface MegaMenuSection {
  title: string;
  items: (string | NavItem)[];
  path?: string;
}

interface NavLink {
  name: string;
  path: string;
  megaMenu?: MegaMenuSection[];
  dropdownRight?: boolean;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
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
    { 
      name: 'Specialties', 
      path: '/doctors',
      megaMenu: [
        { title: 'Surgical Specialists', items: ['Orthopedics', 'General Surgery', 'Urology', 'Neuro Surgeons'] },
        { title: 'Physicians', items: ['General Medicine', 'Cardiology', 'Chest Physician', 'Gastroentrology'] },
        { title: 'Maternal & Child', items: ['Gynaecology', 'Peadiatrics', 'Peadiatric Surgeons'] },
        { title: 'Specialized Care', items: ['Nephrology', 'ENT', 'Plastic Surgeon', 'Psychiatrists'] }
      ]
    },
    { name: 'Dr. Priyanka Bhargava', path: '/doctor/dr-priyanka-bhargava' },
    { name: 'Dr. Gaurav Bhargava', path: '/doctor/dr-gaurav-bhargava' },
    { name: 'About', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { 
      name: 'Services', 
      path: '/services',
      megaMenu: [
        { title: 'OPD Services', items: ['Consultations', 'Doctor Schedule'], path: '/opd' },
        { title: 'IPD Services', items: ['Indoor Facilities', 'Critical Care'], path: '/services#ipd' }
      ]
    },
    { 
      name: 'Gallery', 
      path: '#',
      dropdownRight: true,
      megaMenu: [
        { title: 'Photos', items: ['Hospital Infrastructure'], path: '/gallery' },
        { title: 'Videos', items: ['Patient Testimonials'], path: '/testimonials' }
      ]
    },
    { name: 'Blogs', path: '/blogs' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700",
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-medical-border/60 shadow-lg" 
          : "bg-white border-b border-medical-border/40"
      )}>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-6 flex items-center h-14 lg:h-[72px] xl:h-[76px]">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <div className="bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <img src={fullLogo} alt="Bhargava Medical & Trauma Center" className="h-8 sm:h-9 lg:h-10 w-auto object-contain" />
            </div>
          </Link>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center justify-center flex-1 min-w-0">
            <div className="flex items-center gap-0 xl:gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative shrink-0"
                  onMouseEnter={() => link.megaMenu && setActiveMegaMenu(link.name)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "px-2 xl:px-2.5 py-1.5 xl:py-2 rounded-lg font-bold text-[11px] lg:text-[12px] xl:text-[13px] tracking-wide transition-all duration-300 flex items-center gap-1 whitespace-nowrap",
                      location.pathname === link.path
                        ? "text-medical-royal bg-medical-royal/10"
                        : "text-medical-navy/70 hover:text-medical-navy hover:bg-medical-navy/[0.06]"
                    )}
                  >
                    {link.name}
                    {link.megaMenu && <ChevronDown size={13} className="opacity-40" />}
                  </Link>

                  {location.pathname === link.path && !link.megaMenu && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-2 right-2 h-0.5 bg-medical-royal/40 rounded-full"
                    />
                  )}

                  <AnimatePresence>
                    {link.megaMenu && activeMegaMenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className={cn(
                          "absolute top-full mt-6 w-[420px] lg:w-[480px] xl:w-[520px] bg-white backdrop-blur-2xl border border-medical-border/60 shadow-luxury rounded-[2rem] p-6 lg:p-8 xl:p-10 grid grid-cols-2 gap-6 lg:gap-8 xl:gap-12",
                          link.dropdownRight ? 'right-0' : 'left-0'
                        )}
                      >
                        {link.megaMenu.map((section) => (section && (
                          <div key={section.title}>
                            <h4 className="font-serif font-semibold text-medical-royal mb-5 text-sm tracking-tight">{section.title}</h4>
                            <ul className="space-y-4">
                              {section.items.map((item) => {
                                const itemName = typeof item === 'string' ? item : item.name;
                                const itemPath = typeof item === 'string'
                                  ? (section.path || `${link.path}#${item.toLowerCase().replace(/\s+/g, '-')}`)
                                  : item.path;
                                return (
                                  <li key={itemName}>
                                    <Link
                                      to={itemPath}
                                      className="text-[14px] text-medical-navy/60 hover:text-medical-royal transition-all font-medium flex items-center gap-3 group"
                                    >
                                      <div className="w-2 h-2 rounded-full bg-medical-royal/30 group-hover:bg-medical-royal group-hover:scale-125 transition-all" />
                                      {itemName}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link to="/appointment" className="btn-primary whitespace-nowrap !px-3.5 !py-2 !text-[12px] lg:!text-[13px] xl:!text-[14px] !rounded-lg">
              <Calendar size={14} />
              Book Consult
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden ml-auto p-2 text-medical-navy transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <Link to="/" className="flex items-center gap-3">
                <div className="bg-medical-bg px-2 py-1 rounded-lg flex items-center justify-center">
                  <img src={fullLogo} alt="Bhargava Medical & Trauma Center" className="h-10 sm:h-12 w-auto object-contain" />
                </div>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-medical-navy">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={link.path} 
                      className={cn(
                        "text-xl font-semibold transition-colors",
                        location.pathname === link.path ? "text-medical-royal" : "text-medical-navy hover:text-medical-royal"
                      )}
                      onClick={() => !link.megaMenu && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.megaMenu && (
                      <button 
                        onClick={() => setExpandedMobileMenu(expandedMobileMenu === link.name ? null : link.name)}
                        className="p-1 text-medical-navy/50 hover:text-medical-navy"
                      >
                        <ChevronDown 
                          size={22} 
                          className={cn("transition-transform duration-300", expandedMobileMenu === link.name ? "rotate-180 text-medical-royal" : "")} 
                        />
                      </button>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {link.megaMenu && expandedMobileMenu === link.name && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col gap-4 pl-4 border-l-2 border-medical-border overflow-hidden"
                      >
                        {link.megaMenu.map((section) => (
                          <div key={section.title} className="flex flex-col gap-2 py-1">
                            <span className="text-medical-royal font-serif font-semibold text-sm tracking-tight">{section.title}</span>
                            <div className="flex flex-col gap-2">
                              {section.items.map((item) => {
                                const itemName = typeof item === 'string' ? item : item.name;
                                const itemPath = typeof item === 'string'
                                  ? (section.path || `${link.path}#${item.toLowerCase().replace(/\s+/g, '-')}`)
                                  : item.path;
                                return (
                                  <Link 
                                    key={itemName}
                                    to={itemPath}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base text-medical-navy/70 hover:text-medical-royal transition-colors flex items-center gap-2"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-medical-royal/30" />
                                    {itemName}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="mt-6 space-y-3 pb-8">
                <Link 
                  to="/appointment" 
                  className="btn-primary w-full py-4 text-base"
                >
                  Book Appointment
                </Link>
                <Link 
                  to="tel:+917309038872" 
                  className="btn-outline w-full py-4 text-base flex items-center justify-center gap-3"
                >
                  <Phone size={18} /> Emergency Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
