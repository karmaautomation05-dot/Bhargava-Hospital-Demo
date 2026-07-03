import { motion } from 'framer-motion';
import { Calendar, User, Phone, Mail, Clock, Shield } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Appointment Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Specialty:* ${formData.specialty}\n*Additional Notes:* ${formData.notes || 'None'}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp
    window.open(`https://wa.me/917309038868?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-medical-bg"
    >
      <section className="py-20 bg-medical-warmWhite">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
            
            {/* Left Side: Info */}
            <div className="lg:w-1/3">
              <span className="section-subtitle">Book Now</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy mb-8 leading-tight tracking-tight">
                Schedule Your <br /> <span className="text-medical-royal">Consultation</span>
              </h1>
              <p className="text-medical-muted mb-12 text-lg leading-relaxed font-medium">
                Take a proactive step towards your health. Fill out the form, and our patient care team will get back to you within 24 hours to confirm your slot.
              </p>

              <div className="space-y-10">
                 {[
                   { icon: Shield, title: 'Safe & Secure', desc: 'Your medical data is protected with enterprise-level encryption.' },
                   { icon: Clock, title: 'Priority Scheduling', desc: 'Emergency cases are prioritized for immediate medical attention.' },
                   { icon: User, title: 'Expert Consultants', desc: 'Direct consultation with our senior specialists and surgeons.' }
                 ].map((item, index) => (
                   <div key={index} className="flex gap-6 group">
                     <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-medical-royal shadow-sm border border-medical-border shrink-0 group-hover:bg-medical-royal group-hover:text-white transition-all duration-500">
                       <item.icon size={26} />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-medical-navy mb-1">{item.title}</h4>
                       <p className="text-medical-muted text-sm font-medium">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-sm border border-medical-border relative overflow-hidden group">
                {/* Subtle Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-medical-royal/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                  <div className="space-y-4">
                    <label className="text-[11px] font-bold text-medical-navy uppercase tracking-[0.2em] flex items-center gap-3">
                      <User size={16} className="text-medical-royal" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Rahul Sharma" 
                      className="w-full px-8 py-5 rounded-2xl bg-medical-bg border border-medical-border focus:ring-2 focus:ring-medical-royal focus:bg-white transition-all outline-none font-medium" 
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[11px] font-bold text-medical-navy uppercase tracking-[0.2em] flex items-center gap-3">
                      <Phone size={16} className="text-medical-royal" /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91" 
                      className="w-full px-8 py-5 rounded-2xl bg-medical-bg border border-medical-border focus:ring-2 focus:ring-medical-royal focus:bg-white transition-all outline-none font-medium" 
                    />
                  </div>

                  {/* Removed Email and Date fields */}
                  <div className="md:col-span-2 space-y-4">
                    <label className="text-[11px] font-bold text-medical-navy uppercase tracking-[0.2em]">Select Specialty</label>
                    <select 
                      required
                      value={formData.specialty}
                      onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                      className="w-full px-8 py-5 rounded-2xl bg-medical-bg border border-medical-border focus:ring-2 focus:ring-medical-royal focus:bg-white transition-all outline-none appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled>Choose a specialty...</option>
                      <option value="Gynecology & Obstetrics">Gynecology & Obstetrics</option>
                      <option value="Orthopedics & Joint Replacement">Orthopedics & Joint Replacement</option>
                      <option value="General medicine (Physician)">General medicine (Physician)</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <label className="text-[11px] font-bold text-medical-navy uppercase tracking-[0.2em]">Additional Notes</label>
                    <textarea 
                      rows={4} 
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="Briefly describe your medical concern..." 
                      className="w-full px-8 py-5 rounded-2xl bg-medical-bg border border-medical-border focus:ring-2 focus:ring-medical-royal focus:bg-white transition-all outline-none resize-none font-medium"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 pt-6">
                    <button type="submit" className="btn-primary w-full py-6 text-xl shadow-sm group">
                      Confirm Appointment Request
                    </button>
                    <p className="text-center text-medical-muted text-xs mt-6 font-medium">
                      By submitting this form, you agree to our <Link to="/privacy-policy" className="text-medical-royal hover:underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-medical-royal hover:underline">Terms of Service</Link>.
                    </p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Appointment;
