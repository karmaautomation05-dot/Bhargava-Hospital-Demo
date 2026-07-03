import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Orthopedic Patient",
    text: "The joint replacement team at BMTC is truly world-class. My father was walking the very next day after surgery. The care and facilities are unmatched in Kanpur.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Neha Sharma",
    role: "Maternity Patient",
    text: "Dr. Priyanka and her team made my high-risk pregnancy journey safe and comforting. The NICU facilities gave us immense peace of mind. Highly recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Amit Patel",
    role: "Emergency Care",
    text: "When my brother had a severe accident, BMTC's trauma team saved his life. Their rapid response and advanced ICU setup were critical.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Dr. Sanjay Gupta",
    role: "Referring Physician",
    text: "I trust BMTC for all complex surgical cases. Their modular OTs and infection control protocols are at par with international standards.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-medical-gold/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          <span className="section-subtitle">Patient Experiences</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy mb-8 leading-tight tracking-tight">Stories of <span className="text-medical-royal">Healing</span></h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          className="!pb-24"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="premium-card p-12 min-h-[520px] h-full flex flex-col justify-between relative group bg-white border-medical-border"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={80} className="text-medical-gold" />
                </div>
                
                <div className="flex gap-2 mb-8 relative z-10">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-medical-gold text-medical-gold" />
                  ))}
                </div>
                
                <p className="text-medical-muted italic mb-12 flex-grow leading-relaxed text-lg relative z-10 font-medium">
                  "{item.text}"
                </p>
                
                <div className="flex items-center gap-5 pt-8 border-t border-medical-border relative z-10">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm border border-medical-border">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h4 className="text-medical-navy font-bold text-xl mb-1 tracking-tight">{item.name}</h4>
                    <p className="text-medical-gold text-[11px] uppercase tracking-[0.3em] font-bold">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;