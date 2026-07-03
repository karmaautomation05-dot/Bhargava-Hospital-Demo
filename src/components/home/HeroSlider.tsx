import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import newly generated light images
import slide1Img from '../../assets/images/hospital/light/1.png';
import slide2Img from '../../assets/images/hospital/light/2.png';
import slide3Img from '../../assets/images/hospital/light/3.png';
import slide4Img from '../../assets/images/hospital/light/4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    title: "Advanced Medical Expertise",
    subtitle:
      "Leading multi-specialty healthcare provider in Kanpur, committed to excellence in trauma, orthopedics, and maternal health.",
    image: slide1Img,
    tag: "Welcome to BMTC"
  },
  {
    title: "24/7 Emergency & Trauma",
    subtitle:
      "NABH accredited trauma center with rapid response teams and advanced surgical facilities available round-the-clock.",
    image: slide2Img,
    tag: "Your Health, Our Priority"
  },
  {
    title: "Maternity Excellence",
    subtitle:
      "Expert care for high-risk pregnancies and painless delivery with a focus on compassionate, personalized healing.",
    image: slide3Img,
    tag: "Women's Health Specialist"
  },
  {
    title: "Joint Replacement Center",
    subtitle:
      "Restoring mobility through advanced knee and hip replacements using modern surgical techniques.",
    image: slide4Img,
    tag: "Orthopedic Surgery"
  }
];

const HeroSlider = () => {
  return (
    <div className="relative min-h-[100vh] lg:h-[100vh] w-full overflow-hidden flex flex-col justify-center bg-medical-navy">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full w-full min-h-[100vh] lg:min-h-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-auto lg:h-full flex items-center relative">
            {({ isActive }) => (
              <>
                {/* Background gradient applied per slide to ensure opacity works without mixing */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071B34] via-cyan-600 to-cyan-400 z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)] z-0" />
                
                {/* Full-bleed Image on Right */}
                <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[55%] h-full z-0 lg:[mask-image:linear-gradient(to_right,transparent,black_25%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_25%)]">
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={isActive ? { scale: 1 } : { scale: 1.1 }}
                    transition={{ duration: 6, ease: "easeOut" }}
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Mobile overlay for readability */}
                  <div className="absolute inset-0 bg-medical-navy/80 lg:hidden" />
                </div>
                
                {/* Adding pt-32 to account for the navbar height so content doesn't hide under it */}
                <div className="relative z-10 h-full w-full section-container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-28 lg:py-0 pt-40">
                  
                  {/* Left Content (Text) */}
                  <div className="flex flex-col justify-center items-start w-full">
                    <div className="max-w-xl xl:max-w-2xl">
                      {/* Top Tag */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: isActive ? 0.8 : 0.4, delay: isActive ? 0.2 : 0 }}
                        className="flex items-center gap-4 mb-6"
                      >
                        <div className="w-12 h-[2px] bg-cyan-300" />
                        <span className="text-cyan-300 font-semibold uppercase tracking-[0.2em] text-xs lg:text-sm">
                          {slide.tag}
                        </span>
                      </motion.div>

                      {/* Heading */}
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: isActive ? 0.8 : 0.4, delay: isActive ? 0.4 : 0 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight text-white"
                      >
                        <span>
                          {slide.title.split(' ').slice(0, -1).join(' ')}
                        </span>{' '}
                        <span className="text-cyan-300 inline-block">
                          {slide.title.split(' ').slice(-1)}
                        </span>
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: isActive ? 0.8 : 0.4, delay: isActive ? 0.6 : 0 }}
                        className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-lg font-medium"
                      >
                        {slide.subtitle}
                      </motion.p>

                      {/* Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: isActive ? 0.8 : 0.4, delay: isActive ? 0.8 : 0 }}
                        className="flex flex-wrap gap-4"
                      >
                        <Link
                          to="/appointment"
                          className="px-8 py-4 text-base lg:text-lg rounded-2xl bg-[#009fb2] text-white hover:bg-cyan-500 transition-colors flex items-center gap-3 font-semibold shadow-sm"
                        >
                          Book Appointment
                          <Calendar size={18} />
                        </Link>
                        <Link
                          to="/services"
                          className="px-8 py-4 text-base lg:text-lg rounded-2xl border border-[#009fb2] text-white hover:bg-[#009fb2]/10 transition-colors flex items-center gap-3 font-semibold backdrop-blur-sm"
                        >
                          Our Services
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Empty Column for Grid Alignment */}
                  <div className="hidden lg:block"></div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom curved overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-10 lg:h-16 bg-white rounded-t-[2.5rem] lg:rounded-t-[4rem] z-20" />
    </div>
  );
};

export default HeroSlider;