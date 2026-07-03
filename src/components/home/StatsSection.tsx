import { motion } from 'framer-motion';
import { Users, Award, Calendar, Clock } from 'lucide-react';

const stats = [
  { label: 'Clinical Legacy', value: '30+', icon: Award },
  { label: 'Successful Cases', value: '10k+', icon: Users },
  { label: 'Years Experience', value: '20+', icon: Calendar },
  { label: '24/7 Support', value: '100%', icon: Clock },
];

const StatsSection = () => {
  return (
    <section className="relative py-12 -mt-20 z-20">
      <div className="section-container">
        <div className="bg-white border border-medical-border rounded-[3rem] p-10 md:p-8 shadow-sm overflow-hidden relative group">
          {/* Subtle animated glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-medical-royal/5 via-transparent to-medical-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative group/stat"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-medical-bg flex items-center justify-center text-medical-gold group-hover/stat:text-white group-hover/stat:bg-medical-royal transition-all duration-500 shadow-sm border border-medical-border">
                    <stat.icon size={28} />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-serif font-bold text-medical-navy mb-3 tracking-tight group-hover/stat:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="text-[11px] text-medical-muted font-bold uppercase tracking-[0.4em] group-hover/stat:opacity-100 transition-opacity">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;