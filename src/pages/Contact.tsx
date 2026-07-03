import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-medical-bg"
    >
      <Helmet>
        <title>Contact Us - Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Get in touch with Bhargava Medical & Trauma Center for appointments, emergency support, and medical inquiries. We are available 24/7." />
      </Helmet>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-medical-royal/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-medical-navy/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-[#071B34] via-cyan-600 to-cyan-400">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
          <div className="section-container relative z-10 text-center">
            <span className="text-medical-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">24/7 Support</span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight"
            >
              Get in <span className="text-medical-gold">Touch</span>
            </motion.h1>
            <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              We are here to assist you with any medical inquiries, appointments, or emergency support. Reach out to our dedicated team.
            </p>
          </div>
        </section>

        <section className="py-24 bg-medical-bg">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-sm border border-medical-border">
                  <h3 className="text-4xl font-serif font-bold text-medical-navy mb-12">Send us a Message</h3>
                  <form className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="block text-[11px] font-bold text-medical-navy uppercase tracking-[0.2em] mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full bg-medical-bg border border-medical-border rounded-2xl px-8 py-5 text-medical-navy focus:outline-none focus:ring-2 focus:ring-medical-royal focus:bg-white transition-all placeholder:text-medical-muted/40 font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="block text-[11px] font-bold text-medical-navy uppercase tracking-[0.2em] mb-2">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full bg-medical-bg border border-medical-border rounded-2xl px-8 py-5 text-medical-navy focus:outline-none focus:ring-2 focus:ring-medical-royal focus:bg-white transition-all placeholder:text-medical-muted/40 font-medium"
                          placeholder="+91"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[11px] font-bold text-medical-navy uppercase tracking-[0.2em] mb-2">Message</label>
                      <textarea
                        rows={6}
                        className="w-full bg-medical-bg border border-medical-border rounded-2xl px-8 py-5 text-medical-navy focus:outline-none focus:ring-2 focus:ring-medical-royal focus:bg-white transition-all resize-none placeholder:text-medical-muted/40 font-medium"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button type="button" className="btn-primary w-full md:w-auto !px-16 !py-6 text-lg">
                      <Send size={20} /> Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-10">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="premium-card p-10 bg-white border border-medical-border"
                >
                  <div className="w-16 h-16 rounded-2xl bg-medical-bg flex items-center justify-center text-medical-gold mb-8 shadow-sm border border-medical-border">
                    <Phone size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-medical-navy mb-4">Emergency Lines</h4>
                  <a href="tel:+917309038872" className="block text-medical-muted font-medium mb-1 hover:text-medical-royal transition-colors">+91-7309038872 (Main)</a>
                  <a href="tel:+917309038868" className="block text-medical-muted font-medium hover:text-medical-royal transition-colors">+91-7309038868 (Alt)</a>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="premium-card p-10 bg-white border border-medical-border"
                >
                  <div className="w-16 h-16 rounded-2xl bg-medical-bg flex items-center justify-center text-medical-gold mb-8 shadow-sm border border-medical-border">
                    <Mail size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-medical-navy mb-4">Email Desk</h4>
                  <a href="mailto:bmtckanpur@gmail.com" className="block text-medical-muted font-medium hover:text-medical-royal transition-colors">bmtckanpur@gmail.com</a>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="premium-card p-10 bg-white border border-medical-border"
                >
                  <div className="w-16 h-16 rounded-2xl bg-medical-bg flex items-center justify-center text-medical-gold mb-8 shadow-sm border border-medical-border">
                    <Clock size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-medical-navy mb-4">Working Hours</h4>
                  <p className="text-medical-muted font-medium mb-1">Emergency: 24/7</p>
                  <p className="text-medical-muted font-medium">OPD: 9:00 AM - 8:00 PM</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-medical-warmWhite">
          <div className="section-container">
            <div className="w-full rounded-[3.5rem] overflow-hidden shadow-sm border border-medical-border bg-white flex flex-col">
              {/* Top part: Map Preview */}
              <div className="w-full h-[400px] md:h-[500px] relative bg-slate-100 flex items-center justify-center">
                {!mapLoaded ? (
                  <div className="flex flex-col items-center justify-center text-medical-muted">
                    <div className="w-8 h-8 border-4 border-medical-royal border-t-transparent rounded-full animate-spin mb-4"></div>
                    <span className="font-medium tracking-wide">Loading Map...</span>
                  </div>
                ) : (
                  <iframe
                    src="https://maps.google.com/maps?q=Bhargava+Medical+and+Trauma+Center,+30E,+O+Block,+Kidwai+Nagar,+Kanpur,+Uttar+Pradesh+208023&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location of Bhargava Medical and Trauma Center"
                    className="w-full h-full absolute inset-0"
                  ></iframe>
                )}
              </div>

              {/* Bottom part: Address Details */}
              <div className="w-full p-8 md:p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-6 border-t border-medical-border">
                <div className="flex items-center gap-6 text-center md:text-left w-full md:w-auto flex-col md:flex-row">
                  <div className="w-16 h-16 rounded-2xl bg-medical-bg flex items-center justify-center text-medical-gold shadow-sm border border-medical-border shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-medical-navy mb-2">Visit Our Hospital</h3>
                    <p className="text-medical-muted text-lg font-medium max-w-lg">
                      30E, O Block, Kidwai Nagar, Kanpur, Uttar Pradesh 208023
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Bhargava+Medical+and+Trauma+Center,+30E,+O+Block,+Kidwai+Nagar,+Kanpur,+Uttar+Pradesh+208023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary whitespace-nowrap w-full md:w-auto flex justify-center items-center"
                >
                  Get Directions <Send size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;