import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Award, GraduationCap, ShieldCheck, Heart, Stethoscope, Activity, Quote, ChevronRight, Calendar, Clock, MapPin, Star, CheckCircle2, Bone } from 'lucide-react';
import { Link } from 'react-router-dom';
import drGaurav from '../assets/images/doctors/Gaurav Bhargava.png';

const fadeUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const DoctorGaurav = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-medical-bg"
    >
      <Helmet>
        <title>Dr. Gaurav Bhargava - Orthopaedist in Kanpur | Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Dr. Gaurav Bhargava is a leading Orthopaedist in Kanpur specializing in Joint Replacement, Sports Injury, and Trauma Care with 18+ years of experience at Bhargava Medical and Trauma Centre." />
      </Helmet>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-medical-royal/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-medical-navy/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#071B34] via-cyan-800 to-cyan-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
          <div className="section-container relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-56 h-56 md:w-72 md:h-72 rounded-[3rem] overflow-hidden border-4 border-medical-royal/30 shadow-2xl shrink-0"
              >
                <img src={drGaurav} alt="Dr. Gaurav Bhargava" className="w-full h-full object-cover" />
              </motion.div>
              <div className="text-center md:text-left">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-white uppercase tracking-[0.3em] font-bold text-sm mb-4 block"
                >
                  Consultant Orthopaedic Surgeon
                </motion.span>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight"
                >
                  Dr. Gaurav Bhargava
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
                >
                  A highly skilled Orthopaedic Surgeon specializing in Joint Replacement and Sports Medicine with over 18 years of clinical excellence.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-24 md:py-32 bg-medical-bg">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-16">
                {/* About */}
                <motion.div {...fadeUp}>
                  <span className="section-subtitle">About</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-medical-navy mt-4 mb-6">
                    Excellence in Orthopaedics
                  </h2>
                  <div className="space-y-5">
                    <p className="text-medical-muted text-lg leading-relaxed font-medium">
                      Dr. Gaurav Bhargava is a highly skilled Orthopaedic Surgeon specializing in Joint Replacement and Sports Medicine. With over 18 years of experience, he combines surgical precision with compassionate care for outstanding patient outcomes.
                    </p>
                    <p className="text-medical-muted text-lg leading-relaxed font-medium">
                      He is known for performing the most successful joint replacement surgeries in the region, bringing Delhi-standard orthopaedic care to Kanpur. His expertise spans total knee and hip replacements, arthroscopy, sports injury management, and complex trauma care.
                    </p>
                    <p className="text-medical-muted text-lg leading-relaxed font-medium">
                      Dr. Gaurav has transformed the lives of thousands of patients suffering from joint pain, sports injuries, and trauma, restoring their mobility and quality of life through advanced surgical techniques and dedicated rehabilitation.
                    </p>
                  </div>
                </motion.div>

                {/* Qualifications */}
                <motion.div {...fadeUp}>
                  <h2 className="text-3xl font-serif font-bold text-medical-navy mb-8">Qualifications</h2>
                  <div className="space-y-4">
                    {[
                      { degree: 'MBBS, MS (Orthopaedics)', desc: 'Masters in Orthopaedics' },
                      { degree: 'Advanced Joint Replacement Training', desc: 'Specialized in total knee and hip arthroplasty' },
                      { degree: 'Sports Medicine Fellowship', desc: 'Expertise in arthroscopy and sports injury management' },
                    ].map((q, idx) => (
                      <div key={idx} className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-medical-border group hover:border-medical-royal transition-all">
                        <div className="w-12 h-12 rounded-xl bg-medical-royal/10 flex items-center justify-center text-medical-royal shrink-0 group-hover:bg-medical-royal group-hover:text-white transition-all">
                          <GraduationCap size={22} />
                        </div>
                        <div>
                          <p className="font-bold text-medical-navy text-lg">{q.degree}</p>
                          <p className="text-medical-muted text-sm mt-1">{q.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Specialties */}
                <motion.div {...fadeUp}>
                  <h2 className="text-3xl font-serif font-bold text-medical-navy mb-8">Specializations</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: Award, label: 'Knee Replacement Surgery' },
                      { icon: Bone, label: 'Hip Replacement Surgery' },
                      { icon: Activity, label: 'Sports Injury Treatment' },
                      { icon: ShieldCheck, label: 'Arthroscopy Surgery' },
                      { icon: Stethoscope, label: 'Trauma & Fracture Care' },
                      { icon: Heart, label: 'Orthopaedic Rehabilitation' },
                    ].map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-medical-border group hover:border-medical-royal/30 transition-all">
                        <div className="w-11 h-11 rounded-xl bg-medical-royal/10 flex items-center justify-center text-medical-royal shrink-0">
                          <spec.icon size={20} />
                        </div>
                        <span className="font-semibold text-medical-navy">{spec.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Approach */}
                <motion.div {...fadeUp}>
                  <h2 className="text-3xl font-serif font-bold text-medical-navy mb-8">Philosophy &amp; Approach</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { title: 'Surgical Precision', desc: 'Combining advanced techniques with meticulous care for optimal surgical outcomes.' },
                      { title: 'Patient-Centric', desc: 'Every treatment plan is tailored to the individual needs and goals of each patient.' },
                      { title: 'Holistic Recovery', desc: 'Comprehensive pre and post-operative care focused on restoring full function.' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-white border border-medical-border text-center group hover:border-medical-royal transition-all">
                        <div className="w-10 h-10 rounded-full bg-medical-royal/10 flex items-center justify-center text-medical-royal mx-auto mb-4 group-hover:bg-medical-royal group-hover:text-white transition-all">
                          <CheckCircle2 size={20} />
                        </div>
                        <h4 className="font-bold text-medical-navy mb-2">{item.title}</h4>
                        <p className="text-medical-muted text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] border border-medical-border p-8 space-y-6 sticky top-32"
                >
                  <h3 className="text-2xl font-serif font-bold text-medical-navy">Quick Info</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-medical-royal/10 flex items-center justify-center text-medical-royal shrink-0">
                        <Award size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-medical-navy text-sm">Experience</p>
                        <p className="text-medical-muted text-sm">18+ Years</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-medical-royal/10 flex items-center justify-center text-medical-royal shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-medical-navy text-sm">Location</p>
                        <p className="text-medical-muted text-sm">Bhargava Medical and Trauma Centre Kanpur</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-medical-royal/10 flex items-center justify-center text-medical-royal shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-medical-navy text-sm">OPD Timings</p>
                        <p className="text-medical-muted text-sm">Mon – Sat, 10:00 AM – 2:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-medical-royal/10 flex items-center justify-center text-medical-royal shrink-0">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-medical-navy text-sm">Emergency</p>
                        <p className="text-medical-muted text-sm">24×7 Available</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Link to="/appointment" className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-sm">
                      <Calendar size={18} />
                      Book Appointment
                    </Link>
                    <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white border border-medical-border text-medical-navy font-bold text-sm hover:border-medical-royal/30 transition-all">
                      <ChevronRight size={16} />
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-20 bg-medical-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,169,95,0.05),transparent_70%)]" />
          <div className="section-container relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { value: '18+', label: 'Years Experience' },
                { value: '10,000+', label: 'Patients Treated' },
                { value: '5,000+', label: 'Joint Replacements' },
                { value: '97%', label: 'Success Rate' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 md:py-32 bg-medical-warmWhite relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-medical-royal/5 blur-[120px] rounded-full" />
          <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Quote size={48} className="text-white/30 mx-auto mb-8" />
              <blockquote className="text-2xl md:text-4xl font-serif font-bold text-medical-navy leading-snug mb-8">
                "My commitment is to restore mobility and improve quality of life through surgical excellence and compassionate care."
              </blockquote>
              <div className="w-12 h-[2px] bg-medical-royal mx-auto mb-6" />
              <p className="text-medical-muted font-bold tracking-wider">— Dr. Gaurav Bhargava</p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-medical-bg">
          <div className="section-container">
            <div className="bg-gradient-to-br from-[#071B34] via-cyan-800 to-cyan-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(212,169,95,0.1),transparent_70%)]" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <motion.div {...fadeUp}>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                    Schedule Your <span className="text-white">Consultation</span>
                  </h2>
                  <p className="text-white/70 text-lg font-medium mb-10 max-w-2xl mx-auto">
                    Take the first step towards pain-free living. Book an appointment with Dr. Gaurav Bhargava today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/appointment" className="btn-primary !px-12 !py-5 text-base shadow-lg">
                      Book Appointment
                      <ChevronRight size={18} className="inline ml-1" />
                    </Link>
                    <Link to="/doctors" className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-full font-bold backdrop-blur-md transition-all border border-white/20">
                      View All Doctors
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default DoctorGaurav;
