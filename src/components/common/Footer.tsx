import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Hospital Logo.png';

const Footer = () => {
  return (
    <footer className="bg-medical-navy border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-royal/5 blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-luxury group-hover:scale-110 transition-transform duration-500 overflow-hidden p-1 border border-white/10">
                <img src={logo} alt="BMTC Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif font-bold text-3xl tracking-tight text-white">BMTC</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Leading the way in medical excellence and compassionate patient care. BMTC is dedicated to providing world-class health services to our community.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaFacebook, href: "https://www.facebook.com/bmtc.knp/" },
                { Icon: FaInstagram, href: "https://www.instagram.com/bmtc.knp/" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/company/bhargava-medical-&-trauma-centre---india/about/" },
                { Icon: FaWhatsapp, href: "https://wa.me/message/YG64XTMSRKNQH1?src=qr" }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-medical-gold hover:bg-medical-royal hover:text-white transition-colors shadow-glass border border-white/10"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-10 text-white">Useful Links</h4>
            <ul className="flex flex-col gap-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Doctors', path: '/doctors' },
                { name: 'Services', path: '/services' },
                { name: 'OPD Services', path: '/opd' },
                { name: 'Facilities', path: '/facilities' },
                { name: 'News & Events', path: '/news-events' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/60 text-[15px] hover:text-medical-gold transition-colors flex items-center gap-3 group font-medium"
                  >
                    <div className="w-2 h-2 rounded-full bg-medical-royal/30 group-hover:bg-medical-gold group-hover:scale-125 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-10 text-white">Specialties</h4>
            <ul className="flex flex-col gap-6">
              {['Gynaecology', 'Orthopedics', 'General Medicine'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-white/60 text-[15px] hover:text-medical-gold transition-colors flex items-center gap-3 group font-medium">
                    <div className="w-2 h-2 rounded-full bg-medical-royal/30 group-hover:bg-medical-gold group-hover:scale-125 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-10 text-white">Contact Us</h4>
            <ul className="flex flex-col gap-8">
              <li className="flex items-start gap-5 group">
                <a
                  href="https://maps.google.com/?q=Bhargava+Medical+and+Trauma+Center+Kanpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-medical-gold shrink-0 group-hover:bg-medical-royal group-hover:text-white transition-colors shadow-glass border border-white/10">
                    <MapPin size={22} />
                  </div>
                  <span className="text-white/70 text-sm leading-relaxed font-medium group-hover:text-medical-gold transition-colors">30E, O Block, Kidwai Nagar, Kanpur, Uttar Pradesh 208023</span>
                </a>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-medical-gold shrink-0 group-hover:bg-medical-royal group-hover:text-white transition-colors shadow-glass border border-white/10">
                  <Phone size={22} />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+917309038872" className="text-white/70 text-sm font-medium hover:text-medical-gold transition-colors">+91-7309038872 (Main)</a>
                  <a href="tel:+917309038868" className="text-white/70 text-sm font-medium hover:text-medical-gold transition-colors">+91-7309038868 (Alt)</a>
                </div>
              </li>
              <li className="flex items-center gap-5 group">
                <a href="mailto:bmtckanpur@gmail.com" className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-medical-gold shrink-0 group-hover:bg-medical-royal group-hover:text-white transition-colors shadow-glass border border-white/10">
                    <Mail size={22} />
                  </div>
                  <span className="text-white/70 text-sm font-medium group-hover:text-medical-gold transition-colors">bmtckanpur@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} BHARGAVA MEDICAL & TRAUMA CENTRE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-white/30">
            <Link to="/privacy-policy" className="hover:text-medical-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-medical-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;