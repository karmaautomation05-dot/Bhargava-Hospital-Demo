import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../../data/blogs';

const BlogsSection = () => {
  return (
    <section className="py-32 relative bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="uppercase tracking-[0.35em] text-sm font-bold text-[#2563EB]">
              Health & Wellness Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mt-4">
              Latest from Our <span className="text-[#2563EB]">Medical Blog</span>
            </h2>
          </div>
          <Link
            to="/blogs"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl border border-[#CBD5E1] text-[#0F172A] font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
          >
            View All Articles
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOGS.slice(0, 3).map((blog) => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.id}`}
              className="group flex flex-col bg-white rounded-[2rem] border border-[#E2E8F0] shadow-sm hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
