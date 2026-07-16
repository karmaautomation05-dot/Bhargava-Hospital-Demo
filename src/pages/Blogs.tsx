import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { BLOGS } from '../data/blogs';

const Blogs = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Orthopaedics', 'Maternal Health', 'Trauma Care', "Women's Health", 'Patient Guide'];

  const filteredBlogs = BLOGS.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Medical Blogs | Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Read our latest insights, health tips, and medical advancements from the experts at Bhargava Hospital." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-medical-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-royal/50 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Health & Wellness <span className="text-white">Insights</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed font-medium">
              Stay informed with the latest medical news, expert tips, and patient care guides from our top specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="section-container">
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            </div>
            
            <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map((cat, i) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === cat 
                      ? 'bg-[#2563EB] text-white' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <motion.div
                onClick={() => navigate(`/blogs/${blog.id}`)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                key={blog.id}
                className="group flex flex-col bg-white rounded-[2rem] border border-[#E2E8F0] shadow-sm hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    {blog.category}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 text-[#64748B] text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {blog.author}
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-4 group-hover:text-[#2563EB] transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  
                  <p className="text-[#475569] leading-relaxed mb-8 flex-grow">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[#2563EB] font-semibold mt-auto">
                    Read Article
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-2">No articles found</h3>
                <p className="text-slate-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default Blogs;
