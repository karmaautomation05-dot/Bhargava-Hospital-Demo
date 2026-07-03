import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Microscope, Activity, Wind, Zap, Heart } from 'lucide-react';
import ambulanceImg from '../assets/images/hospital/ambulance.png';
import modularOtImg from '../assets/images/hospital/modular_ot.png';
import diagnosticImg from '../assets/images/hospital/diagnostic_services.png';
import icuNicuImg from '../assets/images/hospital/icu_nicu.png';
import traumaImg from '../assets/images/hospital/trauma_response.png';
import pharmacyImg from '../assets/images/hospital/pharmacy.png';

const facilities = [
  {
    title: "Modular OT",
    desc: "Advanced modular operation theaters in Kanpur with laminar airflow and precision surgical lighting for superior outcomes.",
    icon: Shield,
    image: modularOtImg
  },
  {
    title: "Diagnostic Services",
    desc: "Fully automated in-house laboratory and imaging services available 24/7 for rapid and accurate diagnosis.",
    icon: Microscope,
    image: diagnosticImg
  },
  {
    title: "ICU & NICU",
    desc: "NABH compliant intensive care units for adults and advanced neonatal care equipped with modern ventilators.",
    icon: Activity,
    image: icuNicuImg
  },
  {
    title: "Trauma Response",
    desc: "Kidwai Nagar's premier 24x7 trauma and emergency unit, designed for immediate life-saving interventions.",
    icon: Zap,
    image: traumaImg
  },
  {
    title: "24/7 Pharmacy",
    desc: "Fully stocked in-house medical store providing round-the-clock access to essential medicines and supplies.",
    icon: Wind,
    image: pharmacyImg
  },
  {
    title: "Ambulance Service",
    desc: "24/7 emergency ambulance support equipped with life-support systems for rapid patient transport.",
    icon: Heart,
    image: ambulanceImg
  }
];

const Facilities = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-medical-bg"
    >
      <Helmet>
        <title>World-Class Infrastructure - Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Discover our state-of-the-art medical facilities including Modular OT, 24/7 ICU & NICU, diagnostic services, and advanced trauma response units." />
      </Helmet>

      {/* Background Decorative Shadows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-medical-navy/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-medical-royal/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Luxury Hero */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-r from-[#071B34] via-cyan-600 to-cyan-400">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
          <div className="section-container relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-medical-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block"
              >
                World-Class Infrastructure
              </motion.span>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight"
              >
                Advanced Facilities for <br /> <span className="text-medical-gold">Better Outcomes</span>
              </motion.h1>
              <p className="text-white/80 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                At BMTC, we believe that high-quality care starts with superior infrastructure. Our facility is equipped with the latest medical technology and designed for absolute patient comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-24 bg-medical-bg">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card group overflow-hidden flex flex-col bg-white"
                >
                  <div className="h-72 overflow-hidden relative">
                    <img 
                      src={facility.image} 
                      alt={facility.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-medical-navy via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-12 relative z-10 -mt-10 flex-grow">
                    <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-xl flex items-center justify-center text-medical-gold mb-8 shadow-sm group-hover:bg-medical-royal group-hover:text-white transition-colors duration-500 border border-medical-border">
                      <facility.icon size={28} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-medical-navy mb-4 group-hover:text-medical-gold transition-colors">{facility.title}</h3>
                    <p className="text-medical-muted leading-relaxed text-[15px] font-medium">
                      {facility.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Infrastructure CTA */}
        <section className="py-32 relative overflow-hidden bg-medical-warmWhite">
          <div className="absolute top-1/2 right-0 w-1/2 h-full bg-medical-royal/5 blur-[120px] rounded-full -translate-y-1/2" />
          <div className="section-container relative z-10">
            <div className="premium-card p-16 md:p-24 bg-medical-navy border-medical-border">
              <div className="flex flex-col lg:flex-row items-center gap-24">
                <div className="lg:w-1/2">
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">
                    Committed to Safety <br /> & <span className="text-medical-gold">Clinical Quality</span>
                  </h2>
                  <div className="space-y-10">
                    {[
                      "NABH Accreditation Standards",
                      "24/7 Power & Oxygen Backup",
                      "Central Sterile Supply Department (CSSD)",
                      "Advanced Infection Control Protocols"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-6 text-white/70 font-bold uppercase tracking-[0.2em] text-xs group">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-medical-gold shrink-0 group-hover:bg-medical-royal group-hover:text-white transition-colors shadow-sm border border-white/5">
                          <Shield size={20} />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 relative w-full">
                   <div className="w-full aspect-video rounded-[3.5rem] overflow-hidden shadow-sm border border-white/10 relative group">
                     <img 
                       src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
                       alt="Modern ICU" 
                       loading="lazy"
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-medical-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                   </div>
                   <div className="absolute -bottom-10 -left-10 bg-medical-bg p-10 rounded-3xl shadow-sm border border-medical-border">
                      <p className="text-medical-navy text-4xl font-bold font-serif mb-2 tracking-tight">99.9%</p>
                      <p className="text-[10px] text-medical-gold uppercase tracking-[0.4em] font-bold">System Up-time</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Facilities;