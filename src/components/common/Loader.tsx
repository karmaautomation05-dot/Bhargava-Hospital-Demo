import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-medical-bg">
      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-medical-navy/20 border-t-medical-gold rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="mt-6 text-medical-navy font-bold tracking-widest uppercase text-sm"
        >
          Loading...
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
