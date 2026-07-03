import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-medical-bg"
    >
      <div className="section-container max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-medical-text">
          <p className="font-medium text-medical-muted mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Bhargava Medical & Trauma Center (BMTC) website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our website or services.
          </p>

          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">2. Medical Disclaimer</h2>
          <p>
            The content on the BMTC website is provided for general informational purposes only and is not intended as, nor should it be considered a substitute for, professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>

          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">3. Appointment Requests</h2>
          <p>
            Submitting an appointment request through our website does not guarantee a booking. Our patient care team will contact you to confirm the date, time, and availability of our specialists. In case of a medical emergency, please do not rely on online forms—call our emergency lines or visit the nearest hospital immediately.
          </p>

          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">4. Intellectual Property</h2>
          <p>
            The website and its original content, features, and functionality are owned by Bhargava Medical & Trauma Center and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">5. Modifications to Terms</h2>
          <p>
            BMTC reserves the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on this site. Your decision to continue to visit and make use of the site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
          </p>
          
          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">6. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <br /><br />
            <strong>Bhargava Medical & Trauma Center</strong><br />
            30E, O Block, Kidwai Nagar, Kanpur, Uttar Pradesh 208023<br />
            Phone: +91-7309038872
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
