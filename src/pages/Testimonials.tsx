import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const YOUTUBE_IDS = [
  '4mgxbP_ncj4', 'yNF268Xt33M', 'MI48Tyb5gaM', 'CM0CVHi34to',
  'S7I3-adoA14', 'vk8cgzwskp0', 'ua3oMjo8d1c', 'ICuGN0lMfxM',
  'DqmVOWUDb2A', 'OjS88dcFMUs', '6sQRXfEKMpQ', 'pzuIXANNfEU'
];

const VideoCard = ({ videoId, index }: { videoId: string; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.1 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-luxury border border-medical-border group"
    >
      <div className="relative aspect-video bg-slate-100 overflow-hidden cursor-pointer" onClick={() => setIsPlaying(true)}>
        {!isPlaying ? (
          <>
            <img 
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
              alt="Video Thumbnail"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-medical-navy/30 group-hover:bg-medical-navy/10 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play size={28} className="text-medical-royal ml-2" />
              </div>
            </div>
          </>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
        )}
      </div>
      <div className="p-6 text-center border-t border-medical-border/50">
        <h3 className="font-serif font-bold text-medical-navy text-lg">Patient Journey & Recovery</h3>
        <p className="text-medical-muted text-sm mt-2">Hear directly from our patients about their experiences and successful treatments at Bhargava Medical and Trauma Centre.</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
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
        <title>Patient Testimonials - Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Watch real patient testimonials and success stories from the Bhargava Medical & Trauma Center in Kanpur." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#071B34] via-cyan-800 to-cyan-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <span className="text-white uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Success Stories</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Patient <span className="text-white">Testimonials</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-10">
              Listen to real stories of recovery, hope, and expert medical care from the people we've had the privilege to serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-24 -mt-12 relative z-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {YOUTUBE_IDS.map((id, idx) => (
              <VideoCard key={id} videoId={id} index={idx} />
            ))}
          </div>
        </div>
      </section>
      
    </motion.div>
  );
};

export default Testimonials;
