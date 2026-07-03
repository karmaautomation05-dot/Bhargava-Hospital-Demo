import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheck, Award, Microscope, Zap, Star, Shield, 
  HandHeart, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import bmtc2 from '../assets/images/hospital/bmtc2.png';
import bmtc4 from '../assets/images/hospital/bmtc4.png';
import drPriyanka from '../assets/images/doctors/dr priyanka.jpg';
import drGaurav from '../assets/images/doctors/Gaurav Bhargava.png';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-medical-bg"
    >
      <Helmet>
        <title>About Us - Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Learn about our founders, Dr. Gaurav Bhargava and Dr. Priyanka Bhargava, and our legacy of delivering clinical excellence in Kanpur since 2012." />
      </Helmet>

      {/* Background Decorative Shadows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-medical-navy/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-medical-royal/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Cinematic Story Hero */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-r from-[#071B34] via-cyan-600 to-cyan-400">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
          <div className="section-container relative z-10">
            <div className="max-w-none">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-[2px] bg-medical-gold" />
                <span className="text-medical-gold uppercase tracking-[0.3em] font-bold text-sm">Established June 14, 2012</span>
              </motion.div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight"
              >
                Welcome to <br /> <span className="text-medical-gold drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">Bhargava Medical & Trauma Centre</span>
              </motion.h1>
              <p className="text-white/70 text-xl max-w-2xl font-medium leading-relaxed mb-12">
                A legacy built on trust, managed by Dr. Gaurav Bhargava, Dr. Priyanka Bhargava, and Dr. R.R. Bhargava, dedicated to delivering Delhi-standard healthcare to Kanpur.
              </p>
              <div className="flex gap-6">
                <Link to="/appointment" className="btn-primary !px-10">Book Consult</Link>
                <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold backdrop-blur-md transition-all">Visit Us</Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Heritage Section */}
        <section className="py-32 relative bg-medical-bg overflow-hidden">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-[3.5rem] overflow-hidden shadow-luxury border border-medical-border aspect-[4/5] relative z-10">
                  <img 
                    src={bmtc2} 
                    alt="Hospital Facility" 
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-navy/40 via-transparent to-transparent opacity-60" />
                </div>
                {/* Founders Floating Card */}
                <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-luxury border border-medical-border z-20 hidden md:block max-w-xs">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 rounded-full bg-medical-gold" />
                    <span className="text-xs font-bold uppercase tracking-widest text-medical-navy">Our Visionary Founders</span>
                  </div>
                  <p className="text-medical-muted text-sm font-medium leading-relaxed italic">
                    "We settled in Kanpur to deliver the same quality services we practiced in Delhi, catering to the needs of the people effectively."
                  </p>
                </div>
              </motion.div>

              <div>
                <span className="section-subtitle">The Founders' Journey</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy mb-8 leading-tight tracking-tight">
                  Bringing Delhi's <br /> <span className="text-medical-royal">Clinical Excellence</span> to Kanpur
                </h2>
                <div className="space-y-8">
                  <p className="text-medical-muted text-lg leading-relaxed font-medium">
                    In 2009-10, our founders moved from Delhi to Kanpur. They noticed a significant gap in the quality of healthcare compared to the capital. This realization sparked a mission: to build a qualitative hospital that would cater to Kanpur's needs effectively and compassionately.
                  </p>
                  <p className="text-medical-muted text-lg leading-relaxed font-medium">
                    On June 14, 2012, Bhargava Medical & Trauma Centre was inaugurated, marking a new chapter in the city's medical landscape.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-medical-border">
                    <div className="text-center">
                      <h4 className="text-4xl font-bold text-medical-navy mb-1 tracking-tight">12+</h4>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-medical-gold font-bold">Years of Service</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-4xl font-bold text-medical-navy mb-1 tracking-tight">1st</h4>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-medical-gold font-bold">In South Kanpur</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-4xl font-bold text-medical-navy mb-1 tracking-tight">24/7</h4>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-medical-gold font-bold">Patient Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Landmark Firsts Section */}
        <section className="py-24 bg-medical-warmWhite">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="section-subtitle">Innovation at the Core</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy mb-6">Pioneering Healthcare</h2>
              <p className="text-medical-muted font-medium">We take pride in introducing advanced medical facilities to the people of South Kanpur.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: 'First Dialysis Unit', icon: Zap, desc: 'Introducing the first-ever dialysis facility in South Kanpur.' },
                { title: 'Modular OT', icon: Microscope, desc: 'The region\'s first high-standard modular operation theatre.' },
                { title: 'Joint Replacement', icon: Award, desc: 'Advanced joint replacement surgery with unmatched success rates.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[3rem] shadow-luxury border border-medical-border text-center group hover:border-medical-gold transition-all duration-500">
                  <div className="w-20 h-20 rounded-[2rem] bg-medical-bg mx-auto mb-10 flex items-center justify-center text-medical-gold group-hover:bg-medical-gold group-hover:text-white transition-all duration-500">
                    <item.icon size={36} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-medical-navy mb-4">{item.title}</h3>
                  <p className="text-medical-muted text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Policy Grid */}
        <section className="py-32 bg-medical-bg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-royal/5 blur-[120px] rounded-full -mr-32" />
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Vision */}
            <div className="bg-medical-navy rounded-[4rem] p-16 text-white shadow-luxury relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
              <h3 className="text-4xl font-serif font-bold mb-12 text-medical-gold">Our Vision</h3>
              <ul className="space-y-6">
                {[
                  'Lead through honesty and integrity',
                  'Earn respect and gain patient trust',
                  'Own quality excellence',
                  'Commit to compassion, care & understanding',
                  'Uphold Innovation & continuous improvement',
                  'Develop & share success'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-medical-gold/20 flex items-center justify-center text-medical-gold shrink-0 mt-1">
                      <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-white/80 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality Policy */}
            <div className="p-8">
              <span className="section-subtitle">Excellence Guaranteed</span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-medical-navy mb-8">Our Quality Policy</h3>
              <div className="space-y-8">
                {[
                  'Regular employee training to achieve quality improvement in service.',
                  'Upholding standards of professionalism to improve patient satisfaction.',
                  'Responsive, efficient, courteous and helpful service at all times.',
                  'Highest order patient care at affordable rates without compromise.'
                ].map((policy, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-medical-gold/10 flex items-center justify-center text-medical-gold shrink-0 group-hover:bg-medical-gold group-hover:text-white transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="text-medical-muted font-medium leading-relaxed">{policy}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-medical-warmWhite rounded-3xl border border-medical-border italic text-medical-navy font-bold">
                "Our focus is always on ethical and service-oriented growth."
              </div>
            </div>
          </div>
        </section>

        {/* Distinguished Leaders */}
        <section className="py-32 bg-medical-warmWhite">
          <div className="section-container">
            <div className="text-center mb-24">
              <span className="section-subtitle">Medical Leadership</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy">Distinguished Specialists</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="premium-card bg-white p-12 text-center group">
                <div className="w-32 h-32 rounded-full bg-medical-bg mx-auto mb-8 border-2 border-medical-gold p-1">
                  <img src={drGaurav} alt="Dr. Gaurav" loading="lazy" className="w-full h-full object-cover rounded-full" />
                </div>
                <h4 className="text-2xl font-bold text-medical-navy mb-2">Dr. Gaurav Bhargava</h4>
                <p className="text-medical-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Best Known Joint Replacement Surgeon</p>
                <p className="text-medical-muted text-sm font-medium leading-relaxed">Most successful joint replacement surgeries in the city.</p>
              </div>

              <div className="premium-card bg-white p-12 text-center group">
                <div className="w-32 h-32 rounded-full bg-medical-bg mx-auto mb-8 border-2 border-medical-gold p-1">
                  <img src={drPriyanka} alt="Dr. Priyanka" loading="lazy" className="w-full h-full object-cover rounded-full" />
                </div>
                <h4 className="text-2xl font-bold text-medical-navy mb-2">Dr. Priyanka Bhargava</h4>
                <p className="text-medical-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Maternity & Gynecology Expert</p>
                <p className="text-medical-muted text-sm font-medium leading-relaxed">Best known for her emphasis on normal delivery for her patients.</p>
              </div>

              <div className="premium-card bg-white p-12 text-center group">
                <div className="w-32 h-32 rounded-full bg-medical-bg mx-auto mb-8 border-2 border-medical-gold p-1">
                  <div className="w-full h-full bg-medical-navy rounded-full flex items-center justify-center text-white text-3xl font-serif">RB</div>
                </div>
                <h4 className="text-2xl font-bold text-medical-navy mb-2">Dr. R.R. Bhargava</h4>
                <p className="text-medical-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Renowned Chest Specialist</p>
                <p className="text-medical-muted text-sm font-medium leading-relaxed">Practicing since 1965, treating many patients successfully.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 bg-medical-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,169,95,0.05),transparent_70%)]" />
          <div className="section-container text-center mb-24 relative z-10">
            <span className="text-medical-gold uppercase tracking-[0.3em] font-bold text-sm">Our Core Pillars</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4">Why Choose Us</h2>
          </div>
          <div className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { title: 'Integrity', label: 'We do the right thing', icon: Shield, desc: 'We act ethically and responsibly, holding ourselves accountable for our behavior.' },
              { title: 'Caring', label: 'We do the kind thing', icon: HandHeart, desc: 'Treating those we serve with kindness, compassion and striving to touch lives.' },
              { title: 'Safety', label: 'We do the safe thing', icon: ShieldCheck, desc: 'Our first priority and the rule of medicine – is to protect you from harm.' },
              { title: 'Excellence', label: 'We do the best thing', icon: Award, desc: 'Teamwork bringing advanced technology and best practices to bear in care.' },
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-medical-gold/20 mx-auto mb-8 flex items-center justify-center text-medical-gold">
                  <pillar.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-medical-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{pillar.label}</p>
                <p className="text-white/60 text-sm leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-32 bg-medical-warmWhite">
          <div className="section-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="max-w-xl">
                <span className="section-subtitle">Our Achievements</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy mb-8">Accredited Excellence</h2>
                <p className="text-medical-muted text-lg font-medium leading-relaxed">
                  Bhargava Medical & Trauma Center is committed to providing affordable, quality health care by incorporating improvement in its day-to-day schedule.
                </p>
              </div>
              <div className="flex gap-8 items-center grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
                {/* Visual Placeholders for NABH, JAS-NAZ, QCI */}
                <div className="text-center">
                   <div className="w-24 h-24 bg-white rounded-xl shadow-sm border border-medical-border flex items-center justify-center p-4 mb-4">
                      <span className="font-bold text-xs text-medical-navy">NABH</span>
                   </div>
                   <p className="text-[10px] font-bold text-medical-gold uppercase tracking-widest">Quality Accredited</p>
                </div>
                <div className="text-center">
                   <div className="w-24 h-24 bg-white rounded-xl shadow-sm border border-medical-border flex items-center justify-center p-4 mb-4">
                      <span className="font-bold text-xs text-medical-navy">JAS-NAZ</span>
                   </div>
                   <p className="text-[10px] font-bold text-medical-gold uppercase tracking-widest">International</p>
                </div>
                <div className="text-center">
                   <div className="w-24 h-24 bg-white rounded-xl shadow-sm border border-medical-border flex items-center justify-center p-4 mb-4">
                      <span className="font-bold text-xs text-medical-navy">QCI</span>
                   </div>
                   <p className="text-[10px] font-bold text-medical-gold uppercase tracking-widest">Quality Council</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Standards Banner */}
        <section className="py-32 bg-medical-bg">
          <div className="section-container">
            <div className="bg-medical-navy rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(212,169,95,0.1),transparent_70%)] opacity-60" />
               <div className="relative z-10 max-w-4xl mx-auto">
                 <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-12 leading-tight tracking-tight">
                   Committed to <br /><span className="text-medical-gold">Clinical Safety</span>
                 </h2>
                 <p className="text-white/80 text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                   Providing the best quality services to the people of Kanpur, with honesty, integrity, and compassion.
                 </p>
                 <Link to="/appointment" className="btn-primary !px-16 !py-6 text-xl shadow-sm">
                   Book Appointment Now
                 </Link>
               </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
