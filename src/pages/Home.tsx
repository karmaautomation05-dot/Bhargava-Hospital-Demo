import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/home/HeroSlider';
import StatsSection from '../components/home/StatsSection';
import ServicesGrid from '../components/home/ServicesGrid';
import Testimonials from '../components/home/Testimonials';
import BlogsSection from '../components/home/BlogsSection';
import { motion } from 'framer-motion';
import { Clock, Award, ArrowRight, Stethoscope, Heart, Calendar, Phone, Activity, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import drPriyanka from '../assets/images/doctors/dr priyanka.jpg';
import drGaurav from '../assets/images/doctors/Gaurav Bhargava.png';
import modularOtImg from '../assets/images/hospital/modular_ot.png';
import icuNicuImg from '../assets/images/hospital/icu_nicu.png';
import diagnosticImg from '../assets/images/hospital/diagnostic_services.png';
import traumaImg from '../assets/images/hospital/trauma_response.png';
import pharmacyImg from '../assets/images/hospital/pharmacy.png';
import bmtc2Img from '../assets/images/hospital/bmtc2.png';
import ambulanceImg from '../assets/images/hospital/ambulance.png';

const FEATURED_DOCTORS = [
  {
    name: "Dr. Priyanka Bhargava",
    qualifications: "MBBS, MS (Obstetrics & Gynecology)",
    title: "Pioneer in Women's Health",
    role: "Senior Consultant",
    exp: "20+ Years Experience",
    desc: "A renowned expert in High-Risk Pregnancy and Gynecology with over 20 years of dedicated patient care. Dr. Priyanka Bhargava is committed to advancing women's health at Bhargava Medical and Trauma Centre Kanpur.",
    image: drPriyanka,
    imgPosition: 'center 25%',
    opdTiming: "11:00 AM – 2:00 PM",
    specialties: ["Gynecology", "High-Risk Pregnancy", "Infertility Care"],
    slug: "dr-priyanka-bhargava",
    trust: [
      { value: "20+ Years", label: "Years of Experience" },
      { value: "10,000+", label: "Patients Treated" },
      { value: "1,500+", label: "Successful Procedures" },
    ],
  },
  {
    name: "Dr. Gaurav Bhargava",
    qualifications: "MBBS, MS (Orthopaedics)",
    title: "Excellence in Orthopaedics",
    role: "Consultant Orthopaedic Surgeon",
    exp: "18+ Years Experience",
    desc: "A highly skilled Orthopaedic Surgeon specializing in Joint Replacement and Sports Medicine. He combines surgical precision with compassionate care for outstanding patient outcomes.",
    image: drGaurav,
    opdTiming: "10:00 AM – 2:00 PM",
    specialties: ["Orthopaedics", "Joint Replacement", "Sports Injury"],
    slug: "dr-gaurav-bhargava",
    trust: [
      { value: "18+ Years", label: "Years of Experience" },
      { value: "8,000+", label: "Patients Treated" },
      { value: "3,000+", label: "Successful Procedures" },
    ],
  },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Helmet>
        <title>Bhargava Medical & Trauma Center - Excellence in Care</title>
        <meta name="description" content="Bhargava Medical & Trauma Center is Kanpur's leading healthcare provider offering specialized treatments, 24/7 trauma care, and world-class facilities." />
      </Helmet>

      {/* Background Decorative Shadows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <HeroSlider />
        <StatsSection />

        {/* Services Grid Section */}
        <section className="bg-[#F7FAFC] py-32">
          <ServicesGrid />
        </section>

        {/* Featured Doctors */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#EEF5FF] via-[#F6FAFF] to-[#E3F2FD]">
          <div className="section-container relative z-10">
            <div className="text-center mb-20">
              <span className="uppercase tracking-[0.35em] text-sm font-bold text-[#2563EB]">
                Our Medical Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mt-4">
                Meet Our Distinguished Medical Specialists
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              {FEATURED_DOCTORS.map((doctor) => (
                <div
                  key={doctor.name}
                  className="group h-full rounded-[2.5rem] p-12 md:p-14 flex flex-col items-center text-center relative overflow-hidden border border-[#E2E8F0] bg-white shadow-[0_20px_80px_rgba(37,99,235,0.08)] hover:shadow-[0_30px_100px_rgba(37,99,235,0.14)] transition-all duration-500"
                >
                  {/* Doctor Portrait & Experience Badge */}
                  <div className="relative mb-10 shrink-0">
                    <div className="w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.12)] border-4 border-white ring-2 ring-[#2563EB]/20">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={doctor.imgPosition ? { objectPosition: doctor.imgPosition } : undefined}
                      />
                    </div>
                    {/* Experience Badge */}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white text-[13px] font-bold shadow-lg whitespace-nowrap">
                      <Award size={14} />
                      {doctor.exp}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-serif font-bold text-[#0F172A] text-[30px] md:text-[36px] leading-tight mb-3">
                    {doctor.name}
                  </h3>

                  {/* Qualifications */}
                  <p className="text-[15px] text-[#475569] mb-2">
                    <span className="inline-flex items-center gap-1.5">
                      <GraduationCap size={14} className="text-[#2563EB] shrink-0" />
                      {doctor.qualifications}
                    </span>
                  </p>

                  {/* Designation */}
                  <p className="text-[13px] font-semibold text-[#334155] uppercase tracking-[0.15em] mb-6">
                    {doctor.role}
                  </p>

                  {/* Description */}
                  <p className="text-[16px] text-[#334155] leading-relaxed mb-7 max-w-[95%]">
                    {doctor.desc}
                  </p>

                  {/* Specialty Pills */}
                  <div className="flex flex-wrap justify-center gap-3 mb-7">
                    {doctor.specialties.map((spec, i) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] text-[13px] font-semibold text-[#334155] shadow-sm"
                      >
                        {i === 0 && <Stethoscope size={14} className="text-[#2563EB] shrink-0" />}
                        {i === 1 && <Heart size={14} className="text-[#2563EB] shrink-0" />}
                        {i === 2 && <Activity size={14} className="text-[#2563EB] shrink-0" />}
                        {spec}
                      </span>
                    ))}
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#2563EB]/10 to-[#38BDF8]/10 border border-[#2563EB]/20 text-[13px] font-semibold text-[#2563EB] shadow-sm">
                      <Clock size={14} />
                      24/7 Care
                    </span>
                  </div>

                  {/* Availability */}
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 w-full mb-7 px-5 py-3.5 rounded-xl bg-white border border-[#CBD5E1] shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#2563EB] shrink-0" />
                      <span className="text-[12px] font-medium text-[#475569] whitespace-nowrap">Mon – Sat</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#2563EB] shrink-0" />
                      <span className="text-[12px] font-medium text-[#475569] whitespace-nowrap">OPD: {doctor.opdTiming}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone size={13} className="text-[#2563EB] shrink-0" />
                      <span className="text-[12px] font-medium text-[#475569] whitespace-nowrap">24×7 Emergency</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 w-full mt-auto">
                    <Link
                      to="/appointment"
                      className="group/btn flex-1 text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white font-semibold text-[16px] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    >
                      Book Appointment
                      <ArrowRight size={17} className="inline ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                    <Link
                      to={`/doctor/${doctor.slug}`}
                      className="flex-1 text-center px-6 py-4 rounded-2xl bg-white border border-[#CBD5E1] text-[#0F172A] font-semibold text-[16px] hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300"
                    >
                      View Full Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-32 relative bg-[#F8FAFC]">
          <div className="section-container text-center mb-24">
            <span className="uppercase tracking-[0.35em] text-sm font-bold text-[#2563EB]">
              Medical Infrastructure
            </span>
            <h2 className="text-5xl font-serif font-bold text-[#0F172A] mt-6">
              Advanced Healthcare
              <span className="text-[#2563EB]"> Infrastructure</span>
            </h2>
          </div>

          <div className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Modular Operation Theatres',
                desc: 'State-of-the-art modular operation theatres equipped with laminar airflow, advanced anesthesia systems, and modern surgical technology to ensure precision, safety, and infection-controlled procedures.',
                image: modularOtImg,
              },
              {
                title: 'Intensive Care Unit (ICU) & Neonatal ICU (NICU)',
                desc: 'Advanced critical care units providing round-the-clock monitoring, life-support systems, and specialized care for critically ill adults, newborns, and high-risk patients.',
                image: icuNicuImg,
              },
              {
                title: 'Advanced Endoscopy & Minimally Invasive Surgical Suite',
                desc: 'Equipped with advanced laparoscopic, hysteroscopic, arthroscopic, and endoscopic systems for minimally invasive procedures, offering greater precision, reduced pain, and faster recovery.',
                image: bmtc2Img,
              },
              {
                title: 'Trauma & Emergency Response',
                desc: 'Dedicated emergency and trauma facilities with rapid assessment, fracture management, accident care, emergency stabilization, and immediate access to specialized medical teams.',
                image: traumaImg,
              },
              {
                title: '24×7 Pharmacy',
                desc: 'Fully stocked in-house pharmacy operating round the clock, ensuring timely availability of essential medicines, surgical consumables, and emergency medications.',
                image: pharmacyImg,
              },
              {
                title: 'Ambulance Service',
                desc: '24/7 emergency ambulance support equipped with life-support systems for rapid patient transport. Our ambulances are staffed by trained emergency medical technicians ready to respond at a moment\'s notice.',
                image: ambulanceImg,
              },
            ].map((item, i) => (
              <Link
                key={i}
                to="/facilities"
                className="group block overflow-hidden rounded-[2rem] bg-white border border-[#E2E8F0] shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-all duration-500"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-serif font-bold text-[#0F172A] mb-4">
                    {item.title}
                  </h4>
                  <p className="text-[#64748B] text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border border-[#CBD5E1] text-[#0F172A] font-semibold hover:bg-white transition-all"
            >
              Explore Medical Facilities
              <ArrowRight size={22} />
            </Link>
          </div>
        </section>

        {/* Blogs Section */}
        <BlogsSection />

        {/* Testimonials */}
        <section className="bg-[#F1F5F9]">
          <Testimonials />
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
