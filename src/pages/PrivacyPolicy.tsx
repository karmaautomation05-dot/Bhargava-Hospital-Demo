import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-medical-bg"
    >
      <div className="section-container max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-medical-text">
          <p className="font-medium text-medical-muted mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">1. Introduction</h2>
          <p>
            Welcome to Bhargava Medical & Trauma Center . We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">2. The Data We Collect About You</h2>
          <p>
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, title, date of birth and gender.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Medical Data:</strong> includes information you provide through appointment requests or inquiries relating to your health conditions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., scheduling an appointment).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-bold text-medical-navy mt-10 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
            <br /><br />
            <strong>Bhargava Medical & Trauma Center</strong><br />
            30E, O Block, Kidwai Nagar, Kanpur, Uttar Pradesh 208023<br />
            Email: bmtckanpur@gmail.com<br />
            Phone: +91-7309038872
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
