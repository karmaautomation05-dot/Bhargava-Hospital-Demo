import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse, Baby, Bone, Siren, Microscope,
  CheckCircle2, Stethoscope, Activity, Brain, Droplets,
  ChevronRight, Calendar, Pill, Zap, Users, Truck,
  Heart, Scissors, Crosshair, ClipboardCheck
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Import images (assuming paths are correct based on session context)
import bmtc4 from '../assets/images/hospital/bmtc4.png';
import bmtc6 from '../assets/images/hospital/bmtc6.png';
import bmtc7 from '../assets/images/hospital/bmtc7.png';

const OPD_SERVICES = [
  {
    title: "Joint Replacement",
    booking: true,
    icon: Bone,
    description: "Advanced knee, hip, and shoulder replacement surgeries using modern techniques to restore mobility, reduce pain, and improve quality of life.",
    details: "Our joint replacement program offers comprehensive surgical solutions for damaged or arthritic joints. Using advanced techniques and high-quality implants, we help patients regain pain-free movement and return to an active lifestyle.",
    features: ["Total Knee Replacement", "Total Hip Replacement", "Shoulder Replacement", "Minimally Invasive Techniques", "Robotic-Assisted Surgery", "Post-Surgical Rehabilitation"]
  },
  {
    title: "Arthroscopy & Sports Injury",
    booking: true,
    icon: Activity,
    description: "Minimally invasive arthroscopic procedures for ligament tears, meniscus injuries, sports trauma, and faster recovery with expert orthopedic care.",
    details: "Our arthroscopy and sports medicine department specializes in diagnosing and treating sports-related injuries and joint disorders. We use minimally invasive techniques to ensure faster recovery and better outcomes for athletes and active individuals.",
    features: ["ACL Reconstruction", "Meniscus Repair", "Rotator Cuff Repair", "Cartilage Restoration", "Shoulder Stabilization", "Sports Rehabilitation"]
  },
  {
    title: "Trauma & Emergency Care",
    booking: false,
    icon: Siren,
    description: "24×7 emergency management for fractures, accident injuries, complex trauma, and orthopedic emergencies with rapid diagnosis and treatment.",
    details: "Our 24/7 trauma center is equipped to handle all types of emergencies, from minor fractures to complex polytrauma cases. With a dedicated team of emergency physicians, orthopedic surgeons, and support staff, we provide rapid, life-saving care.",
    features: ["Fracture Management", "Polytrauma Care", "Emergency Surgery", "Road Accident Injuries", "Workplace Trauma", "24/7 Emergency Response"]
  },
  {
    title: "High-Risk Pregnancy Care",
    booking: true,
    icon: Baby,
    description: "Specialized care for high-risk pregnancies with advanced maternal monitoring, fetal assessment, and personalized treatment for safer outcomes.",
    details: "Our high-risk pregnancy program provides comprehensive care for expectant mothers with complex medical conditions. We offer advanced fetal monitoring, specialized maternal care, and a multidisciplinary approach to ensure the safest possible outcomes.",
    features: ["Advanced Fetal Monitoring", "Maternal ICU Care", "Preterm Labor Management", "Gestational Diabetes Care", "Preeclampsia Management", "Neonatal Support"]
  },
  {
    title: "Advanced Infertility Treatment",
    booking: true,
    icon: Heart,
    description: "Comprehensive fertility evaluation and personalized infertility treatments designed to help couples achieve successful parenthood.",
    details: "Our fertility center offers a full spectrum of infertility evaluation and treatment options. From initial diagnostic workup to advanced assisted reproductive technologies, we provide compassionate, personalized care for couples on their journey to parenthood.",
    features: ["Fertility Evaluation", "Ovulation Induction", "IUI Treatment", "Hormonal Therapy", "Laparoscopic Fertility Surgery", "Fertility Counseling"]
  },
  {
    title: "Laparoscopic Surgery",
    booking: true,
    icon: Crosshair,
    description: "Advanced minimally invasive surgical procedures offering smaller incisions, reduced pain, faster recovery, and shorter hospital stays.",
    details: "Our laparoscopic surgery department specializes in minimally invasive procedures across multiple specialties. Using advanced camera systems and precision instruments, we perform complex surgeries through tiny incisions, resulting in less pain and quicker recovery.",
    features: ["Laparoscopic Cholecystectomy", "Hernia Repair", "Appendectomy", "Gynecological Laparoscopy", "Diagnostic Laparoscopy", "Fast Track Recovery"]
  },
  {
    title: "General Surgery",
    booking: true,
    icon: Scissors,
    description: "Expert surgical management for hernia, gallbladder, appendix, breast, thyroid, and other general surgical conditions.",
    details: "Our general surgery department provides comprehensive surgical care for a wide range of conditions. From routine procedures to complex surgeries, our experienced surgeons utilize both traditional and minimally invasive approaches for optimal outcomes.",
    features: ["Hernia Surgery", "Gallbladder Surgery", "Appendix Surgery", "Breast Surgery", "Thyroid Surgery", "Minor Surgical Procedures"]
  },
  {
    title: "Advanced Physician Management",
    booking: true,
    icon: ClipboardCheck,
    description: "Comprehensive diagnosis and long-term management of diabetes, hypertension, thyroid disorders, infections, and other chronic medical conditions.",
    details: "Our internal medicine department offers expert management of chronic medical conditions through comprehensive evaluation, evidence-based treatment plans, and regular follow-up care. We focus on preventive care and long-term health optimization.",
    features: ["Diabetes Management", "Hypertension Control", "Thyroid Disorder Care", "Infection Treatment", "Preventive Health Checkups", "Chronic Disease Monitoring"]
  },
  {
    title: "Neonatal & Pediatric Care",
    booking: true,
    icon: HeartPulse,
    description: "Dedicated healthcare for newborns, infants, and children, including newborn care, vaccinations, growth monitoring, and pediatric consultations.",
    details: "Our pediatric department provides comprehensive healthcare for children from birth through adolescence. We offer preventive care, treatment of acute and chronic conditions, and specialized neonatal care for newborns requiring medical attention.",
    features: ["Newborn Care", "Childhood Vaccinations", "Growth & Development Monitoring", "Pediatric Consultations", "Nutritional Guidance", "Pediatric Emergency Care"]
  },
  {
    title: "Advanced Diagnostic Services",
    booking: true,
    icon: Microscope,
    description: "Comprehensive diagnostic facilities including laboratory investigations, digital imaging, ultrasound, ECG, and other essential diagnostic services for accurate and timely clinical decision-making.",
    details: "Our diagnostic services department offers a full spectrum of laboratory and imaging services to support accurate diagnosis and effective treatment planning. With state-of-the-art equipment and experienced technicians, we ensure rapid turnaround times and reliable results.",
    features: ["Fully Automated Lab", "Digital X-Ray & Ultrasound", "2D Echo & ECG", "Preventive Health Packages", "NABH Quality Standards", "Rapid Results Turnaround"]
  }
];

const IPD_SERVICES = [
  { title: "Anaesthesiology", icon: Activity },
  { title: "Critical Care (ICU)", icon: Siren },
  { title: "Dental Surgeries", icon: Stethoscope },
  { title: "General Medicine", icon: Users },
  { title: "Laparoscopic Surgery", icon: Zap },
  { title: "Obstetric & Gynaecology", icon: Baby },
  { title: "ENT (Otorhinolaryngology)", icon: Activity },
  { title: "Pediatrics IPD", icon: Users },
  { title: "Plastic & Reconstructive Surgery", icon: Droplets },
  { title: "Respiratory Medicine", icon: Pill },
  { title: "Sports Medicine", icon: Bone },
  { title: "Emergency Medicine", icon: Siren }
];

const DOCTOR_SCHEDULE = [
  { dept: "Internal Medicine / Physican", name: "Dr. R.R. Bhargava", time: "11:00 AM - 4:00 PM / 8:00 PM - 10:00 PM", days: "All Days" },
  { dept: "Internal Medicine / Physican", name: "Dr. A.K Verma", time: "05:00 PM - 07:00 PM", days: "Mon - Sat" },
  { dept: "Orthopedic / Joint Replacement", name: "Dr. Gaurav Bhargava", time: "10:00 AM - 01:00 PM", days: "All Days" },
  { dept: "OBS & Gynecology / Infertility", name: "Dr. Priyanka Bhargava", time: "10:00 AM - 01:00 PM", days: "All Days" },
  { dept: "Neuro Physician", name: "Dr. Haramohan Sahoo", time: "03:00 PM - 05:00 PM", days: "All Days" }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<'opd' | 'ipd'>('opd');
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#ipd') setActiveTab('ipd');
    if (location.hash === '#opd') setActiveTab('opd');
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-medical-bg"
    >
      <Helmet>
        <title>Our Services & Departments - Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Explore our comprehensive Outpatient (OPD) and Inpatient (IPD) services, 24/7 trauma care, modular OT, and specialized departments." />
      </Helmet>

      {/* Cinematic Hero */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#071B34] via-cyan-800 to-cyan-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <span className="text-white uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Medical Excellence</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-8">
              Our Healthcare <span className="text-white">Services</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-12">
              <button
                onClick={() => setActiveTab('opd')}
                className={`px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-full font-bold transition-all ${activeTab === 'opd' ? 'bg-medical-royal text-medical-navy shadow-luxury' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                OPD Services
              </button>
              <button
                onClick={() => setActiveTab('ipd')}
                className={`px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-full font-bold transition-all ${activeTab === 'ipd' ? 'bg-medical-royal text-medical-navy shadow-luxury' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                IPD Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="section-container">
          <AnimatePresence mode="wait">
            {activeTab === 'opd' ? (
              <motion.div
                key="opd"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-24"
              >
                {/* Doctor Schedule Table */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-luxury border border-medical-border overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div>
                      <h2 className="text-3xl font-serif font-bold text-medical-navy mb-2">OPD Doctor Schedule</h2>
                      <p className="text-medical-muted">Consult with our expert specialists during their visiting hours.</p>
                    </div>
                    <Link to="/appointment" className="btn-primary">
                      <Calendar size={20} /> Book Online
                    </Link>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b-2 border-medical-border">
                          <th className="py-6 px-4 text-medical-navy font-bold uppercase tracking-wider text-xs">Department</th>
                          <th className="py-6 px-4 text-medical-navy font-bold uppercase tracking-wider text-xs">Doctor's Name</th>
                          <th className="py-6 px-4 text-medical-navy font-bold uppercase tracking-wider text-xs">Schedule</th>
                          <th className="py-6 px-4 text-medical-navy font-bold uppercase tracking-wider text-xs">Days</th>
                        </tr>
                      </thead>
                      <tbody>
                        {DOCTOR_SCHEDULE.map((doc, idx) => (
                          <tr key={idx} className="border-b border-medical-border hover:bg-medical-bg transition-colors">
                            <td className="py-6 px-4 font-bold text-medical-navy">{doc.dept}</td>
                            <td className="py-6 px-4 text-medical-royal font-medium">{doc.name}</td>
                            <td className="py-6 px-4 text-medical-muted">{doc.time}</td>
                            <td className="py-6 px-4 font-bold text-medical-royal">{doc.days}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* OPD Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {OPD_SERVICES.map((service, idx) => (
                    <motion.div
                      key={service.title}
                      id={service.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white rounded-[2.5rem] p-10 shadow-luxury border border-medical-border hover:border-medical-royal transition-all group"
                    >
                      <div className="flex items-start gap-6 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-medical-bg flex items-center justify-center text-medical-royal group-hover:bg-medical-royal group-hover:text-white transition-all shrink-0">
                          <service.icon size={32} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif font-bold text-medical-navy mb-2">{service.title}</h3>
                          {service.booking && (
                            <span className="text-[10px] font-bold uppercase tracking-widest text-medical-royal bg-medical-royal/10 px-3 py-1 rounded-full">
                              Online Booking Available
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-medical-muted leading-relaxed mb-8">
                        {service.details}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center gap-3 text-sm text-medical-navy/80 font-medium">
                            <CheckCircle2 size={16} className="text-medical-royal shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="ipd"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* IPD Intro Card */}
                  <div className="lg:col-span-1 bg-medical-navy text-white rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-medical-royal/10 blur-[80px] rounded-full -mr-32 -mt-32" />
                    <div className="relative z-10">
                      <h2 className="text-4xl font-serif font-bold mb-6 leading-tight">Superior <br />In-Patient <br />Care</h2>
                      <p className="text-white/70 leading-relaxed mb-12">
                        Our IPD facility is designed for comfort and safety, featuring state-of-the-art medical technology and a dedicated team of healthcare professionals available 24/7.
                      </p>
                      <img src={bmtc6} alt="IPD" loading="lazy" className="rounded-2xl shadow-luxury mb-8" />
                    </div>
                    <Link to="/contact" className="btn-primary w-full justify-center">
                      Contact for Admission
                    </Link>
                  </div>

                  {/* IPD Grid */}
                  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {IPD_SERVICES.map((service, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-[2rem] p-8 border border-medical-border hover:shadow-luxury transition-all flex items-center gap-6 group"
                      >
                        <div className="w-14 h-14 rounded-xl bg-medical-bg flex items-center justify-center text-medical-royal group-hover:scale-110 transition-transform">
                          <service.icon size={28} />
                        </div>
                        <h4 className="text-lg font-bold text-medical-navy">{service.title}</h4>
                        <ChevronRight className="ml-auto text-medical-border group-hover:text-medical-royal transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facilities Grid */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-medical-warmWhite p-12 rounded-[2.5rem] border border-medical-border text-center">
                    <Microscope size={48} className="text-medical-royal mx-auto mb-8" />
                    <h3 className="text-2xl font-serif font-bold text-medical-navy mb-4">Diagnostic Services</h3>
                    <p className="text-medical-muted mb-8">2D Echo, Spirometry, Ultrasound, X-Ray and fully automated lab.</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['2D Echo', 'Ultrasound', 'X-Ray', 'Lab'].map(tag => (
                        <span key={tag} className="bg-white px-4 py-2 rounded-full text-xs font-bold text-medical-navy shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-medical-warmWhite p-12 rounded-[2.5rem] border border-medical-border text-center">
                    <Stethoscope size={48} className="text-medical-royal mx-auto mb-8" />
                    <h3 className="text-2xl font-serif font-bold text-medical-navy mb-4">Allied Professions</h3>
                    <p className="text-medical-muted mb-8">Specialized support through expert dietetics and physiotherapy.</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['Dietetics', 'Physiotherapy'].map(tag => (
                        <span key={tag} className="bg-white px-4 py-2 rounded-full text-xs font-bold text-medical-navy shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-medical-warmWhite p-12 rounded-[2.5rem] border border-medical-border text-center">
                    <Truck size={48} className="text-medical-royal mx-auto mb-8" />
                    <h3 className="text-2xl font-serif font-bold text-medical-navy mb-4">Support Services</h3>
                    <p className="text-medical-muted mb-8">24/7 Advanced ambulance services for emergency transport.</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['24/7 Ambulance', 'Emergency'].map(tag => (
                        <span key={tag} className="bg-white px-4 py-2 rounded-full text-xs font-bold text-medical-navy shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-medical-warmWhite">
        <div className="section-container">
          <div className="bg-medical-navy rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <img src={bmtc7} alt="Hospital" loading="lazy" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl font-serif font-bold text-white mb-8">Experience World-Class Healthcare</h2>
              <p className="text-white/70 text-xl mb-12">Whether it's a routine check-up or specialized treatment, we are here for you.</p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link to="/appointment" className="btn-primary !px-12 !py-6 text-xl">
                  Book Appointment
                </Link>
                <Link to="tel:+917309038872" className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold text-xl backdrop-blur-md transition-all">
                  Emergency Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
