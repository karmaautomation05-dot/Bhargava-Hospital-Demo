import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/home/HeroSlider';
import StatsSection from '../components/home/StatsSection';
import ServicesGrid from '../components/home/ServicesGrid';
import Testimonials from '../components/home/Testimonials';
import BlogsSection from '../components/home/BlogsSection';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import drPriyanka from '../assets/images/doctors/dr priyanka.jpg';
import drGaurav from '../assets/images/doctors/Gaurav Bhargava.png';
import modularOtImg from '../assets/images/hospital/modular_ot.png';
import icuNicuImg from '../assets/images/hospital/icu_nicu.png';
import diagnosticImg from '../assets/images/hospital/diagnostic_services.png';

const FEATURED_DOCTORS = [
  {
    name: "Dr. Priyanka Bhargava",
    title: "Pioneer in Women's Health",
    role: "Senior Consultant",
    exp: "20+ Years Exp.",
    desc: "A renowned expert in High-Risk Pregnancy and Gynecology, Dr. Priyanka Bhargava has dedicated over 20+ years to providing advanced medical care. Her patient-first approach has made BMTC a center of trust for thousands of families in Kanpur.",
    image: drPriyanka,
    specialty: "Gynecology & Obstetrics"
  },
  {
    name: "Dr. Gaurav Bhargava (MS)",
    title: "Excellence in Orthopaedics",
    role: "Senior Surgeon",
    exp: "18+ Years Exp.",
    desc: "The best known Orthopaedist in Kanpur. A well-known knee replacement surgeon, he leaves no stone unturned in taking care of his patients, bringing advanced surgical precision to joint and trauma care.",
    image: drGaurav,
    specialty: "Orthopaedics & Joint Replacement"
  }
];

const Home = () => {
  const [currentDoc, setCurrentDoc] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDoc((prev) => (prev + 1) % FEATURED_DOCTORS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextDoc = () => setCurrentDoc((prev) => (prev + 1) % FEATURED_DOCTORS.length);
  const prevDoc = () => setCurrentDoc((prev) => (prev - 1 + FEATURED_DOCTORS.length) % FEATURED_DOCTORS.length);

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

        {/* Featured Doctor Carousel */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#EEF5FF] via-[#F6FAFF] to-[#E3F2FD]">
          <div className="section-container relative z-10">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="uppercase tracking-[0.35em] text-sm font-bold text-[#2563EB]">
                  Our Medical Leadership
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mt-4">
                  Expert Care by Distinguished Specialists
                </h2>
              </div>
              <div className="flex gap-4 mb-2">
                <button onClick={prevDoc} className="w-14 h-14 rounded-full border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextDoc} className="w-14 h-14 rounded-full border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="relative min-h-[600px] lg:min-h-[auto]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDoc}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden border border-white/60 bg-gradient-to-br from-white via-[#F8FBFF] to-[#EDF6FF] shadow-[0_20px_80px_rgba(37,99,235,0.08)]"
                >
                  {/* Luxury Glow */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#38BDF8]/20 via-[#2563EB]/10 to-transparent -skew-x-12 translate-x-1/4 opacity-70" />

                  {/* LEFT IMAGE */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="relative inline-block w-full">
                      <div className="w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.12)] border border-white/40 group/img">
                        <img
                          src={FEATURED_DOCTORS[currentDoc].image}
                          alt={FEATURED_DOCTORS[currentDoc].name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Experience Floating Card */}
                      <div className="absolute -bottom-10 -right-10 bg-gradient-to-br from-[#0F172A] to-[#1E3A5F] p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(15,23,42,0.25)] hidden md:block border border-white/10">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#F4C27A]">
                            <Award size={32} />
                          </div>
                          <div>
                            <p className="text-[10px] text-[#F4C27A] uppercase font-bold tracking-[0.4em] mb-2">
                              {FEATURED_DOCTORS[currentDoc].role}
                            </p>
                            <p className="text-2xl font-serif font-bold text-white tracking-tight">
                              {FEATURED_DOCTORS[currentDoc].exp}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="w-full lg:w-1/2 relative z-10">
                    <span className="uppercase tracking-[0.35em] text-sm font-bold text-[#2563EB]">
                      {FEATURED_DOCTORS[currentDoc].title}
                    </span>

                    <h2 className="font-serif font-bold text-[#0F172A] mb-8 leading-tight tracking-tight mt-6">
                      <span className="text-3xl md:text-4xl block mb-2">Compassionate Care by</span>
                      <span className="text-4xl md:text-6xl text-[#2563EB] block">
                        {FEATURED_DOCTORS[currentDoc].name}
                      </span>
                    </h2>

                    <p className="text-[#475569] text-lg leading-relaxed mb-12">
                      {FEATURED_DOCTORS[currentDoc].desc}
                    </p>

                    {/* FEATURES */}
                    <div className="grid grid-cols-2 gap-10 mb-12">
                      <div className="flex items-center gap-4 text-sm text-[#334155] font-semibold uppercase tracking-wider">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#D4A574]">
                          <ShieldCheck size={22} />
                        </div>
                        {FEATURED_DOCTORS[currentDoc].specialty}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-[#334155] font-semibold uppercase tracking-wider">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#2563EB]">
                          <Clock size={22} />
                        </div>
                        24/7 Consultation
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-8">
                      <Link
                        to="/appointment"
                        className="px-12 py-5 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white font-semibold shadow-[0_15px_40px_rgba(37,99,235,0.25)] hover:scale-105 transition-all duration-300"
                      >
                        Book Appointment
                      </Link>
                      <Link
                        to="/doctors"
                        className="px-12 py-5 rounded-2xl bg-white border border-[#DCE7F5] text-[#0F172A] font-semibold flex items-center gap-3 hover:shadow-lg transition-all duration-300"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-32 relative bg-[#F8FAFC]">
          <div className="section-container text-center mb-24">
            <span className="uppercase tracking-[0.35em] text-sm font-bold text-[#2563EB]">
              Infrastructure
            </span>
            <h2 className="text-5xl font-serif font-bold text-[#0F172A] mt-6">
              Luxury Medical
              <span className="text-[#2563EB]"> Facilities</span>
            </h2>
          </div>

          <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Modular OT',
                desc: 'Advanced surgical suites with laminar flow and state-of-the-art instrumentation.',
                image: modularOtImg,
              },
              {
                title: 'NICU & ICU',
                desc: 'Specialized critical care units for newborns and adults with 24/7 monitoring.',
                image: icuNicuImg,
              },
              {
                title: 'Diagnostic Lab',
                desc: 'Fully automated 24/7 diagnostic services with advanced imaging capabilities.',
                image: diagnosticImg,
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
              Explore Infrastructure
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
