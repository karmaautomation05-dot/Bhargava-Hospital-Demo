import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon } from 'lucide-react';

// Use Vite's glob import to automatically pull in all images from the gallery directory
const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
const GALLERY_IMAGES = Object.values(imageModules) as string[];

const CATEGORIES = [
  'All', 
  'OPD & Emergency', 
  'ICU, HDU & NICU', 
  'OT & Labor', 
  'Patient Rooms', 
  'Basement & Infrastructure'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Categorize based on the original filename from the glob keys
  const categorizedImages = Object.entries(imageModules).map(([originalPath, importUrl], idx) => {
    const filename = originalPath.toUpperCase();
    let category = 'Basement & Infrastructure';
    
    if (filename.includes('OPD') || filename.includes('EMERGENCY')) {
      category = 'OPD & Emergency';
    } else if (filename.includes('ICU') || filename.includes('HDU') || filename.includes('NICU')) {
      category = 'ICU, HDU & NICU';
    } else if (filename.includes('OT') || filename.includes('LABOR')) {
      category = 'OT & Labor';
    } else if (filename.includes('ROOM')) {
      category = 'Patient Rooms';
    } else if (filename.includes('BASE-MENT') || filename.includes('BASEMENT')) {
      category = 'Basement & Infrastructure';
    }

    return { id: idx, src: importUrl as string, category };
  });

  const displayedImages = activeCategory === 'All' 
    ? categorizedImages 
    : categorizedImages.filter(img => img.category === activeCategory);

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
        <title>Gallery - Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Explore our hospital infrastructure, facilities, modular OT, ICU, and medical camps through our comprehensive photo gallery." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-[#071B34] via-cyan-600 to-cyan-400">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <span className="text-medical-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Visual Tour</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Hospital <span className="text-medical-gold">Gallery</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-10">
              A comprehensive visual tour of our state-of-the-art facilities, patient wards, intensive care units, and community health events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pt-12 pb-4 relative z-20">
        <div className="section-container flex flex-wrap justify-center gap-4">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-medical-royal text-white shadow-lg shadow-medical-royal/30 scale-105' 
                  : 'bg-white text-medical-navy border border-medical-border hover:border-medical-royal hover:text-medical-royal hover:bg-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid Section */}
      <section className="py-12 relative z-20 min-h-[500px]">
        <div className="section-container">
          <motion.div 
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            <AnimatePresence>
              {displayedImages.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-luxury border border-medical-border inline-block w-full"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <div className="absolute inset-0 bg-medical-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <ImageIcon size={32} className="text-white drop-shadow-md scale-75 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                  <img 
                    src={item.src} 
                    alt={`${item.category} ${item.id + 1}`} 
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-100"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-[10px] font-bold text-medical-navy uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {displayedImages.length === 0 && (
            <div className="text-center py-20 text-medical-muted">
              No media available in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-6 right-6 text-white hover:text-medical-gold transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
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

export default Gallery;
