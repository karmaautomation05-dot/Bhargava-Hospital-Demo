import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, Baby, UserCheck, Activity, Bone, Siren } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Joint Replacement",
    desc: "Advanced robotic-assisted knee and hip replacement surgeries by globally trained specialists.",
    icon: Bone,
    link: "/services#orthopedics"
  },
  {
    title: "High Risk Pregnancy",
    desc: "Comprehensive maternal care for complex pregnancies ensuring mother and baby safety.",
    icon: Baby,
    link: "/services#maternity"
  },
  {
    title: "Trauma & Emergency",
    desc: "24/7 dedicated trauma center equipped to handle all critical medical emergencies rapidly.",
    icon: Siren,
    link: "/services#emergency"
  },
  {
    title: "Cardiac Care",
    desc: "State-of-the-art cardiology department for accurate diagnosis and interventional treatments.",
    icon: HeartPulse,
    link: "/services#cardiology"
  },
  {
    title: "General Surgery",
    desc: "Minimally invasive laparoscopic procedures for quicker recovery and less postoperative pain.",
    icon: Activity,
    link: "/services#surgery"
  },
  {
    title: "Expert Consultation",
    desc: "Direct access to top-tier medical consultants across 15+ specialties under one roof.",
    icon: UserCheck,
    link: "/doctors"
  }
];

const ServicesGrid = () => {
  return (
    <section className="relative z-20">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="section-subtitle">Specialized Care</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy mb-8 leading-tight tracking-tight">
              Enterprise <br /> 
              <span className="text-medical-royal">Medical Excellence</span>
            </h2>
            <p className="text-medical-muted text-lg leading-relaxed max-w-xl">
              Delivering high-performance healthcare with state-of-the-art facilities and world-renowned specialists.
            </p>
          </div>
          <Link to="/services" className="btn-secondary !bg-white !shadow-sm !border-medical-border hover:!bg-medical-bg">
            Explore All Services <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card group relative overflow-hidden bg-white"
            >
              <div className="p-12 relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-medical-bg flex items-center justify-center text-medical-gold mb-10 group-hover:bg-medical-royal group-hover:text-white group-hover:shadow-sm transition-all duration-500 border border-medical-border">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-medical-navy mb-6 group-hover:text-medical-royal transition-colors">
                  {service.title}
                </h3>
                <p className="text-medical-muted leading-relaxed mb-10 text-[15px] flex-grow font-medium">
                  {service.desc}
                </p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-medical-royal group-hover:gap-5 transition-all"
                >
                  View Details <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;