import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Microscope, Activity, Clock, Heart, Crosshair, Siren, CheckCircle2 } from 'lucide-react';
import ambulanceImg from '../assets/images/hospital/ambulance.png';
import modularOtImg from '../assets/images/hospital/modular_ot.png';
import diagnosticImg from '../assets/images/hospital/diagnostic_services.png';
import icuNicuImg from '../assets/images/hospital/icu_nicu.png';
import traumaImg from '../assets/images/hospital/trauma_response.png';
import pharmacyImg from '../assets/images/hospital/pharmacy.png';
import bmtc2Img from '../assets/images/hospital/bmtc2.png';

const facilities = [
  {
    title: "Modular Operation Theatres",
    description: "State-of-the-art modular operation theatres equipped with laminar airflow, advanced anesthesia systems, and modern surgical technology to ensure precision, safety, and infection-controlled procedures. Our OTs meet international standards for surgical care.",
    icon: Shield,
    image: modularOtImg,
    features: [
      "Laminar airflow for infection control",
      "Advanced anesthesia workstations",
      "Integrated surgical lighting & displays",
      "Central sterile supply access",
      "Real-time patient monitoring",
      "Emergency power backup"
    ]
  },
  {
    title: "Intensive Care Unit (ICU) & Neonatal ICU (NICU)",
    description: "Advanced critical care units providing round-the-clock monitoring, life-support systems, and specialized care for critically ill adults, newborns, and high-risk patients. Staffed by experienced intensivists and critical care nurses.",
    icon: Activity,
    image: icuNicuImg,
    features: [
      "24/7 multiparameter monitoring",
      "Advanced ventilators & life support",
      "Dedicated neonatal intensive care",
      "Infection control protocols",
      "Bedside diagnostics",
      "Specialist round-the-clock coverage"
    ]
  },
  {
    title: "Advanced Endoscopy & Minimally Invasive Surgical Suite",
    description: "Equipped with advanced laparoscopic, hysteroscopic, arthroscopic, and endoscopic systems for minimally invasive procedures. Our suite enables greater surgical precision, reduced patient trauma, faster recovery, and shorter hospital stays.",
    icon: Crosshair,
    image: bmtc2Img,
    features: [
      "High-definition laparoscopic systems",
      "Arthroscopic & hysteroscopic towers",
      "Flexible & rigid endoscopy",
      "Minimally invasive surgical instruments",
      "Digital imaging & recording",
      "Rapid recovery protocols"
    ]
  },
  {
    title: "Trauma & Emergency Response",
    description: "Dedicated emergency and trauma facilities with rapid assessment, fracture management, accident care, emergency stabilization, and immediate access to specialized medical teams. Our trauma bay is designed for speed and efficiency.",
    icon: Siren,
    image: traumaImg,
    features: [
      "24/7 emergency physician coverage",
      "Rapid triage & assessment",
      "On-site orthopaedic & surgical response",
      "Resuscitation & stabilization bays",
      "Integrated diagnostic imaging",
      "Direct OT access for emergencies"
    ]
  },
  {
    title: "24×7 Pharmacy",
    description: "Fully stocked in-house pharmacy operating round the clock, ensuring timely availability of essential medicines, surgical consumables, and emergency medications. Our pharmacy is managed by qualified pharmacists.",
    icon: Clock,
    image: pharmacyImg,
    features: [
      "Round-the-clock medication access",
      "Wide range of surgical consumables",
      "Emergency drug availability",
      "Qualified pharmacist on duty",
      "Temperature-controlled storage",
      "Inventory management systems"
    ]
  },
  {
    title: "Advanced Diagnostic Services",
    description: "Comprehensive diagnostic facilities including laboratory investigations, digital imaging, ultrasound, ECG, and other essential diagnostic services for accurate and timely clinical decision-making by our medical team.",
    icon: Microscope,
    image: diagnosticImg,
    features: [
      "Fully automated clinical laboratory",
      "Digital X-ray & ultrasound",
      "2D Echo & ECG services",
      "Rapid turnaround times",
      "NABH quality standards",
      "Preventive health screening packages"
    ]
  },
  {
    title: "Ambulance Service",
    description: "24/7 emergency ambulance support equipped with life-support systems for rapid patient transport. Our ambulances are staffed by trained emergency medical technicians ready to respond at a moment's notice.",
    icon: Heart,
    image: ambulanceImg,
    features: [
      "24/7 emergency response",
      "Advanced life-support equipment",
      "Trained emergency medical technicians",
      "Rapid dispatch system",
      "GPS-tracked vehicles",
      "Inter-hospital transfer support"
    ]
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
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#071B34] via-cyan-800 to-cyan-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
          <div className="section-container relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-white uppercase tracking-[0.3em] font-bold text-sm mb-4 block"
              >
                World-Class Infrastructure
              </motion.span>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight"
              >
                Advanced Healthcare <br /> <span className="text-white">Infrastructure</span>
              </motion.h1>
              <p className="text-white/80 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                At Bhargava Medical and Trauma Centre, we believe that high-quality care starts with superior infrastructure. Our facility is equipped with state-of-the-art medical technology and designed for absolute patient comfort and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-24 bg-medical-bg">
          <div className="section-container">
            <div className="text-center mb-20">
              <span className="uppercase tracking-[0.3em] text-sm font-bold text-white">Our Facilities</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-medical-navy mt-4">World-Class Medical Infrastructure</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[2.5rem] border border-medical-border overflow-hidden group hover:shadow-luxury transition-all duration-500"
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
                  <div className="p-10">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-medical-bg flex items-center justify-center text-medical-royal group-hover:bg-medical-royal group-hover:text-white transition-colors duration-500 shrink-0">
                        <facility.icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-medical-navy mb-3">{facility.title}</h3>
                        <p className="text-medical-muted text-[15px] leading-relaxed font-medium">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-medical-border pt-6">
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-medical-royal mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {facility.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 text-sm text-medical-navy/80 font-medium">
                            <CheckCircle2 size={16} className="text-medical-royal shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
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
                    Committed to Safety <br /> & <span className="text-white">Clinical Quality</span>
                  </h2>
                  <div className="space-y-10">
                    {[
                      "NABH Accreditation Standards",
                      "24/7 Power & Oxygen Backup",
                      "Central Sterile Supply Department (CSSD)",
                      "Advanced Infection Control Protocols"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-6 text-white/70 font-bold uppercase tracking-[0.2em] text-xs group">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-medical-royal group-hover:text-white transition-colors shadow-sm border border-white/5">
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
                      <p className="text-[10px] text-medical-royal uppercase tracking-[0.4em] font-bold">System Up-time</p>
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
