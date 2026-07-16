import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, Baby, Bone, Siren, Heart, Scissors, Activity, Crosshair, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Joint Replacement",
    desc: "Advanced knee, hip, and shoulder replacement surgeries using modern techniques to restore mobility, reduce pain, and improve quality of life.",
    icon: Bone,
    link: "/services#joint-replacement"
  },
  {
    title: "Arthroscopy & Sports Injury",
    desc: "Minimally invasive arthroscopic procedures for ligament tears, meniscus injuries, sports trauma, and faster recovery with expert orthopedic care.",
    icon: Activity,
    link: "/services#arthroscopy-sports-injury"
  },
  {
    title: "Trauma & Emergency Care",
    desc: "24×7 emergency management for fractures, accident injuries, complex trauma, and orthopedic emergencies with rapid diagnosis and treatment.",
    icon: Siren,
    link: "/services#trauma-emergency-care"
  },
  {
    title: "High-Risk Pregnancy Care",
    desc: "Specialized care for high-risk pregnancies with advanced maternal monitoring, fetal assessment, and personalized treatment for safer outcomes.",
    icon: Baby,
    link: "/services#high-risk-pregnancy-care"
  },
  {
    title: "Advanced Infertility Treatment",
    desc: "Comprehensive fertility evaluation and personalized infertility treatments designed to help couples achieve successful parenthood.",
    icon: Heart,
    link: "/services#advanced-infertility-treatment"
  },
  {
    title: "Laparoscopic Surgery",
    desc: "Advanced minimally invasive surgical procedures offering smaller incisions, reduced pain, faster recovery, and shorter hospital stays.",
    icon: Crosshair,
    link: "/services#laparoscopic-surgery"
  },
  {
    title: "General Surgery",
    desc: "Expert surgical management for hernia, gallbladder, appendix, breast, thyroid, and other general surgical conditions.",
    icon: Scissors,
    link: "/services#general-surgery"
  },
  {
    title: "Advanced Physician Management",
    desc: "Comprehensive diagnosis and long-term management of diabetes, hypertension, thyroid disorders, infections, and other chronic medical conditions.",
    icon: ClipboardCheck,
    link: "/services#advanced-physician-management"
  },
  {
    title: "Neonatal & Pediatric Care",
    desc: "Dedicated healthcare for newborns, infants, and children, including newborn care, vaccinations, growth monitoring, and pediatric consultations.",
    icon: HeartPulse,
    link: "/services#neonatal-pediatric-care"
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
                <div className="w-16 h-16 rounded-2xl bg-medical-bg flex items-center justify-center text-medical-royal mb-10 group-hover:bg-medical-royal group-hover:text-white group-hover:shadow-sm transition-all duration-500 border border-medical-border">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-medical-navy mb-6 group-hover:text-white transition-colors">
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