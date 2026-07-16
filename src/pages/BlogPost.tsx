import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BLOGS } from '../data/blogs';

const BlogPost = () => {
  const { id } = useParams();
  const blog = BLOGS.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-32 text-center px-4">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-4">Article Not Found</h1>
        <p className="text-lg text-slate-600 mb-8">The blog post you are looking for does not exist.</p>
        <Link 
          to="/blogs"
          className="px-8 py-4 bg-[#2563EB] text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Bhargava Medical and Trauma Centre Medical Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-medical-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-medical-royal/40 to-transparent z-0" />
        <div className="section-container relative z-10">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm font-semibold uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            Back to All Articles
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-4 text-sm text-white font-semibold uppercase tracking-wider mb-6">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
                <Tag size={16} />
                {blog.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-white/80 font-medium">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                {blog.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-white" />
                {blog.date}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white mb-16 -mt-32 z-20"
            >
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Article Content */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_10px_40px_rgba(15,23,42,0.04)] border border-slate-100 prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:text-[#0F172A] prose-headings:mt-12 prose-headings:mb-6 prose-a:text-[#2563EB] prose-p:text-slate-600 prose-p:mb-8 prose-li:mb-6 prose-ul:mb-8 prose-ul:list-disc prose-ul:pl-8 prose-ol:list-decimal prose-ol:pl-8 marker:text-medical-royal">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
            </div>

            {/* Share & Call to Action */}
            <div className="mt-16 bg-gradient-to-br from-[#EEF5FF] to-[#E3F2FD] rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-100 shadow-sm">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-2">Need Expert Advice?</h3>
                <p className="text-slate-600">Schedule a consultation with our medical specialists today.</p>
              </div>
              <Link 
                to="/appointment"
                className="px-8 py-4 bg-[#2563EB] text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all whitespace-nowrap"
              >
                Book an Appointment
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
