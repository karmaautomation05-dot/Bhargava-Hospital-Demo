import React, { useState } from 'react';
import { Phone, Bot, X, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Action Buttons Menu */}
      <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] flex flex-col items-end gap-4">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 mb-2 mr-2"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/message/YG64XTMSRKNQH1?src=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)]"
                title="WhatsApp"
              >
                <FaWhatsapp size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="tel:+917309038872"
                className="w-14 h-14 bg-[#3B82F6] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(59,130,246,0.4)]"
                title="Call Us"
              >
                <Phone size={24} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setIsChatOpen(!isChatOpen);
                  setIsMenuOpen(false); // Close menu when opening chat
                }}
                className="w-14 h-14 bg-[#0F2859] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(15,40,89,0.5)]"
                title="AI Assistant"
              >
                <Bot size={24} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group flex items-center gap-3 lg:gap-4 bg-[#071B34]/95 hover:bg-[#071B34] text-white px-5 py-3 lg:px-7 lg:py-4 rounded-[1.25rem] shadow-[0_10px_40px_rgba(7,27,52,0.3)] border border-white/10 backdrop-blur-md transition-all duration-300"
        >
          <div className="bg-white/5 p-2 lg:p-2.5 rounded-full group-hover:bg-white/10 transition-colors">
            {isMenuOpen ? <X size={20} className="text-cyan-400 lg:w-6 lg:h-6" /> : <MessageSquare size={20} className="text-cyan-400 lg:w-6 lg:h-6" />}
          </div>
          <div className="flex flex-col items-start justify-center leading-none">
            <span className="text-[9px] lg:text-[10px] text-white/60 font-bold tracking-[0.15em] uppercase mb-1 lg:mb-1.5">
              Need Help?
            </span>
            <span className="text-sm lg:text-base font-bold text-white tracking-wide">
              {isMenuOpen ? "Close Menu" : "Contact Us"}
            </span>
          </div>
        </motion.button>
      </div>

      {/* Chatbot Iframe Container */}
      <div
        className={`
          fixed bottom-[100px] right-[24px] lg:right-[40px] lg:bottom-[120px] z-[100]
          w-[92vw] md:w-[420px]
          h-[700px] max-h-[78vh]
          bg-white
          rounded-[2rem]
          overflow-hidden
          border border-white/20
          shadow-[0_20px_80px_rgba(15,23,42,0.35)]
          backdrop-blur-2xl
          transition-all duration-500
          origin-bottom-right
          ${
            isChatOpen
              ? 'scale-100 opacity-100 translate-y-0'
              : 'scale-95 opacity-0 translate-y-5 pointer-events-none'
          }
        `}
      >
        {/* Header with Close Button */}
        <div className="absolute top-4 right-4 z-[110]">
          <button 
            onClick={() => setIsChatOpen(false)}
            className="p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors text-medical-navy"
            aria-label="Close Chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Top Glow */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-medical-cyan/20 via-medical-blue/10 to-medical-royal/20 blur-2xl pointer-events-none z-0" />

        {/* Chatbot iframe */}
        {isChatOpen && (
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/p5REQhMwjkB7_piGfnp_N"
            width="100%"
            height="100%"
            style={{
              height: '100%',
              minHeight: '100%',
              border: 'none',
              borderRadius: '2rem',
            }}
            allow="microphone"
            title="Bhargava Hospital AI Assistant"
          ></iframe>
        )}
      </div>
    </>
  );
};

export default Chatbot;