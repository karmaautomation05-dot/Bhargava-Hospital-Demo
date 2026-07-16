import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, Video, Newspaper, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import newsImage1 from '../assets/news/news_1.jpg';
import newsImage2 from '../assets/news/news_2.jpg';
import newsImage3 from '../assets/news/news_3.jpg';

const MEDIA_ITEMS = [
  {
    type: 'event',
    title: 'Bhargava Medical and Trauma Centre Annual Healthcare Camp',
    date: 'October 15, 2020',
    description: 'Our team of specialists successfully organized a large-scale community health camp, providing free consultations and basic diagnostics to hundreds of local residents in need.',
    image: newsImage1,
    icon: Calendar
  },
  {
    type: 'news',
    title: 'Community Outreach & Engagement Program',
    date: 'October 20, 2020',
    description: 'Continuing our commitment to public health, the Bhargava Medical and Trauma Centre staff conducted interactive outreach programs to educate the community on preventive healthcare and emergency response.',
    image: newsImage2,
    icon: Newspaper
  },
  {
    type: 'news',
    title: 'Specialized Care Initiatives at Bhargava Medical and Trauma Centre',
    date: 'October 25, 2020',
    description: 'A glimpse into our dedication to patient care. We continually strive to expand our facilities and medical expertise to serve the people of Kanpur with the highest standards of healthcare.',
    image: newsImage3,
    icon: Newspaper
  }
];

const NewsEvents = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (idx: number) => {
    setExpandedItems(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-medical-bg"
    >
      <Helmet>
        <title>News & Events - Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Stay updated with the latest happenings, medical breakthroughs, health camps, and media releases from Bhargava Medical & Trauma Center." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#071B34] via-cyan-800 to-cyan-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <span className="text-white uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Media</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              News & <span className="text-white">Events</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-10">
              Stay updated with the latest happenings, medical breakthroughs, health camps, and media releases from Bhargava Medical & Trauma Center.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-24 -mt-12 relative z-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDIA_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-luxury border border-medical-border hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
              >
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="absolute inset-0 bg-medical-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <item.icon size={16} className="text-medical-royal" />
                    <span className="text-xs font-bold text-medical-navy uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-medical-royal mb-4 text-sm font-medium">
                    <Calendar size={16} />
                    {item.date}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-medical-navy mb-4 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className={`text-medical-muted mb-4 ${expandedItems.includes(idx) ? '' : 'line-clamp-3'}`}>
                    {item.description}
                  </p>
                  <button 
                    onClick={() => toggleExpand(idx)}
                    className="mt-auto text-left font-bold text-medical-royal hover:text-medical-royal transition-colors inline-flex items-center gap-2 w-max"
                  >
                    {expandedItems.includes(idx) ? 'Read Less' : 'Read More'}
                    <ArrowRight size={16} className={`transition-transform duration-300 ${expandedItems.includes(idx) ? 'rotate-90' : ''}`} />
                  </button>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter / CTA */}
      <section className="py-24 bg-medical-warmWhite">
        <div className="section-container">
          <div className="bg-medical-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-royal/10 blur-[80px] rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full -ml-32 -mb-32" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Never Miss An Update</h2>
              <p className="text-white/70 text-lg mb-12">
                Follow us on our social media platforms to get real-time updates about our upcoming health camps and events.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="https://www.facebook.com/bmtc.knp" target="_blank" rel="noreferrer" className="btn-primary !px-10 !py-5">
                  Follow on Facebook
                </a>
                <a href="https://www.instagram.com/bmtc.knp/" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold backdrop-blur-md transition-all">
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-6 right-6 text-white hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NewsEvents;
