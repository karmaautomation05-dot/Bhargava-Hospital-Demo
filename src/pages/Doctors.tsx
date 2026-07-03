import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Award, GraduationCap, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Doctor {
  name: string;
  specialty: string;
  qualifications: string;
  achievements: string;
}

interface SpecialtyGroup {
  category: string;
  doctors: Doctor[];
}

const specialtyGroups: SpecialtyGroup[] = [
  {
    category: "Orthopedics",
    doctors: [
      { name: "Dr. Gaurav Bhargava", specialty: "Orthopaedist / Joint Replacement / Sports Injury", qualifications: "MBBS, MS (Ortho)", achievements: "He is the best known Orthopaedist in Kanpur. A well known knee replacement surgeon, he leaves no stone unturned in taking care of his patients." }
    ]
  },
  {
    category: "General Medicine",
    doctors: [
      { name: "Dr. Anil Verma", specialty: "General Medicine", qualifications: "MBBS, MD", achievements: "He is a MBBS (M.D) at the Bhargava Medical and trauma center. He has a great experience over his designation." },
      { name: "Dr. R.R. Bhargava", specialty: "MD Chest", qualifications: "MBBS, MD", achievements: "He is the best known MD Chest in Kanpur. He has been providing comprehensive medical services in our city since many years now." }
    ]
  },
  {
    category: "Gynaecology",
    doctors: [
      { name: "Dr. Priyanka Bhargava", specialty: "Obstetrics & Gynaecology", qualifications: "MBBS, MS (Obs & Gyn)", achievements: "She is one of the best gynaecologist in Kanpur. Known for her amazing specialization at this profession, she has been contributing a lot towards the health of all the female across the city and beyond." },
      { name: "Dr. Kanchanmala", specialty: "Obstetrics & Gynaecology", qualifications: "MBBS, MS (Obs & Gyn)", achievements: "She is one of the Gynaecologist at the Bhargava Medical and trauma center." }
    ]
  },
  {
    category: "Cardiology",
    doctors: [
      { name: "Dr. Amit", specialty: "Cardiology", qualifications: "MBBS", achievements: "He is a cardiologist at the Bhargava Medical and trauma center. He has a great experience over this profession." },
      { name: "Dr. Irfan", specialty: "Cardiology", qualifications: "MBBS", achievements: "He is the Cardiologist at the Bhargava Medical and trauma center. Also has been providing comprehensive medical services at the hospital for many years now." }
    ]
  },
  {
    category: "General Surgery",
    doctors: [
      { name: "Dr. Pawan Singh", specialty: "Laparoscopic & General Surgeon", qualifications: "MBBS, MS", achievements: "He has been providing his services as the General Surgeon at the Bhargava Medical and trauma center." },
      { name: "Dr. R.K. Singh", specialty: "Laparoscopic & General Surgeon", qualifications: "MBBS, MS", achievements: "He is a General Surgeon at the Bhargava Medical and trauma center. Also holds a great experience over his designation." },
      { name: "Dr. Prashant Rajpoot", specialty: "Laparoscopic & General Surgeon", qualifications: "MBBS, MS", achievements: "He has been providing his services as the General Surgeon at the Bhargava Medical and trauma center." }
    ]
  },
  {
    category: "Peadiatrics",
    doctors: [
      { name: "Dr. Rohit Agarwal", specialty: "Peadiatrics", qualifications: "MBBS", achievements: "He is one of the Pediatrician at the Bhargava Medical and trauma center and is well known for contributing his services to the hospital." },
      { name: "Dr. Ashwini Shukla", specialty: "Peadiatrics", qualifications: "MBBS, DCH", achievements: "He is a Pediatrician at the Bhargava Medical and trauma center. He is known for his specialization at pediatrics." },
      { name: "Dr. S.S. Rathore", specialty: "Peadiatrics", qualifications: "MBBS, DCH", achievements: "He is one of the Pediatrician at the Bhargava Medical and trauma center and has a great experience over his profession." },
      { name: "Dr. Arif Mohammad", specialty: "Peadiatrics", qualifications: "MBBS, DCH", achievements: "He holds a degree in MBBS BCH and has a great experience of 15 years. He is a well known Pediatrician at the Bhargava Medical and trauma center." }
    ]
  },
  {
    category: "Peadiatric Surgeons",
    doctors: [
      { name: "Dr. Rakesh Tripathi", specialty: "Peadiatric Surgeon", qualifications: "MBBS, MS", achievements: "He is one of the Pediatrician(Surgeon) at the Bhargava Medical and trauma center and is well known for his contribution towards the hospital and the patients." }
    ]
  },
  {
    category: "Urology",
    doctors: [
      { name: "Dr. Manish Kumar", specialty: "Urology Surgeon", qualifications: "MBBS, MS", achievements: "A Urologist surgeon at the Bhargava Medical and trauma center, he has been providing comprehensive medical services at the hospital for many years now." }
    ]
  },
  {
    category: "Chest Physician",
    doctors: [
      { name: "Dr. R.R. Bhargava", specialty: "Chest Physician", qualifications: "MBBS, MD", achievements: "He is the best known MD Chest in Kanpur. He has been providing comprehensive medical services in our city since many years now." }
    ]
  },
  {
    category: "ENT",
    doctors: [
      { name: "Dr. Vijay Bajaj", specialty: "ENT Specialist", qualifications: "MBBS, MS", achievements: "He is a well known ENT at the Bhargava Medical and trauma center and has been providing services at the hospital for many years now." }
    ]
  },
  {
    category: "Gastroentrology",
    doctors: [
      { name: "Dr. Anand Verma", specialty: "Gastroentrology", qualifications: "MBBS", achievements: "He holds a degree in gastro. He is well known as a Gastrologist in Bhargava Medical and trauma center." }
    ]
  },
  {
    category: "Nephrology",
    doctors: [
      { name: "Dr. Sameer Govil", specialty: "Nephrology", qualifications: "MBBS, MD", achievements: "He is a well known Nephrologist at the Bhargava Medical and trauma center." },
      { name: "Dr. D K Sinha", specialty: "Nephrology", qualifications: "MBBS, MD", achievements: "He is well known as the Nephrologist at the Bhargava Medical and trauma center." }
    ]
  },
  {
    category: "Opthalmics",
    doctors: [
      { name: "Dr. Deepa Tiwari", specialty: "Ophthalmology", qualifications: "MBBS, MS", achievements: "She is well known as the Ophthalmologist at the Bhargava Medical and trauma center." }
    ]
  },
  {
    category: "Onco-Surgery",
    doctors: [
      { name: "Dr. Rohit Tekriwal", specialty: "Onco-Surgeon", qualifications: "MBBS, MS", achievements: "An Oncologist (Surgeon) by profession at the Bhargava Medical and trauma center, he has been providing great services to his patients." }
    ]
  },
  {
    category: "Neuro Surgeons",
    doctors: [
      { name: "Dr. Rajeev Kainth", specialty: "Neuro Surgery", qualifications: "MBBS, MCH", achievements: "He is a well known Neuro Surgeon at the Bhargava Medical and trauma center." },
      { name: "Dr. Amit Gupta", specialty: "Neuro Surgery", qualifications: "MBBS, MCH", achievements: "He is known to be as a well known Neuro Surgeon at the Bhargava Medical and trauma center." }
    ]
  },
  {
    category: "Plastic Surgeon",
    doctors: [
      { name: "Dr. Pradeep Tandon", specialty: "Plastic Surgery", qualifications: "MBBS, MCH", achievements: "He is a well known Plastic Surgeon at the Bhargava Medical and trauma center. And has been providing comprehensive medical and surgical services at the hospital." }
    ]
  },
  {
    category: "Anaesthesia",
    doctors: [
      { name: "Dr. Hemlata Shukla", specialty: "Anaesthesia & Intensive Care", qualifications: "MBBS, DA", achievements: "She is well known as the Anesthesiologist at the Bhargava Medical and trauma center." },
      { name: "Dr. Dinesh Sahu", specialty: "Anaesthesia & Intensive Care", qualifications: "MBBS, MD", achievements: "An Anaesthesiologist at the Bhargava Medical and trauma center, he has been providing comprehensive services at the hospital." },
      { name: "Dr. Neeraj Shukla", specialty: "Anaesthesia & Intensive Care", qualifications: "MBBS, MD", achievements: "He is well known as the Anesthesiologist at the Bhargava Medical and trauma center." }
    ]
  },
  {
    category: "Psychiatrists",
    doctors: [
      { name: "Dr. A.K. Jaiswal", specialty: "Psychiatry", qualifications: "MBBS, MD", achievements: "A Psychiatrist by profession, he has been offering his services at the Bhargava Medical and trauma center for many years." }
    ]
  },
  {
    category: "Radiology",
    doctors: [
      { name: "Dr. K P Narang", specialty: "Radiology", qualifications: "MBBS, MD", achievements: "He is a Radiologist at the Bhargava Medical and trauma center. Holds great experience over his profession." }
    ]
  },
  {
    category: "Pathology",
    doctors: [
      { name: "Dr. Umesh Paliwal", specialty: "Pathology", qualifications: "MBBS, MD", achievements: "He is the MD pathologist at the Bhargava Medical and trauma center and has been providing quality services to the patients and the hospital." }
    ]
  },
  {
    category: "Dietetics",
    doctors: [
      { name: "Dt. Aisha Khan", specialty: "Dietetics & Nutrition", qualifications: "B.Sc, M.Sc", achievements: "A well known Dietitians and Nutritionists at the Bhargava Medical and trauma center." }
    ]
  },
  {
    category: "Physiotherapy",
    doctors: [
      { name: "Dr. Malkhan Singh", specialty: "Physiotherapy", qualifications: "MPT, MSc (Endocrinology)", achievements: "He is the Physiotherapist, holding MPT and MSc (Endocrinology) degree at the Bhargava Medical and trauma center and has been providing quality services to the patients and the hospital." }
    ]
  }
];

const Doctors = () => {
  const [activeCategory, setActiveCategory] = useState(specialtyGroups[0].category);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '').toLowerCase();
    if (hash) {
      const matchedGroup = specialtyGroups.find(
        g => g.category.toLowerCase().replace(/\s+/g, '-') === hash
      );
      if (matchedGroup) {
        setActiveCategory(matchedGroup.category);
        // Optional: Scroll to the category tabs section
        const tabsSection = document.getElementById('category-tabs');
        if (tabsSection) {
          tabsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location]);

  const handleCategoryClick = (category: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveCategory(category);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-medical-bg"
    >
      <Helmet>
        <title>Our Expert Doctors - Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Meet our distinguished panel of specialists dedicated to providing world-class healthcare with a compassionate touch across all major medical departments." />
      </Helmet>

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-medical-royal/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-medical-navy/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-[#071B34] via-cyan-600 to-cyan-400">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
          <div className="section-container relative z-10 text-center">
            <span className="text-medical-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Clinical Experts</span>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight"
            >
              Our Medical <span className="text-medical-gold">Team</span>
            </motion.h1>
            <p className="text-white/80 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              Meet our distinguished panel of specialists dedicated to providing world-class healthcare with a compassionate touch.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section id="category-tabs" className="py-8 bg-white sticky top-[80px] z-30 border-y border-medical-border shadow-sm">
          <div className="section-container">
            <div className="flex flex-col gap-4">
              {/* Top Row - Featured Specialties */}
              <div className="flex overflow-x-auto gap-4 px-2 pb-2 snap-x snap-mandatory scroll-smooth hide-scrollbar md:justify-center">
                {specialtyGroups
                  .filter((group) => ["Gynaecology", "Orthopedics", "General Medicine"].includes(group.category))
                  .sort((a, b) => {
                    const order = ["Gynaecology", "Orthopedics", "General Medicine"];
                    return order.indexOf(a.category) - order.indexOf(b.category);
                  })
                  .map((group) => (
                    <button
                      key={group.category}
                      onClick={(e) => handleCategoryClick(group.category, e)}
                      className={`px-8 py-4 rounded-2xl text-[11px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap border shrink-0 snap-center ${
                        activeCategory === group.category 
                          ? "bg-medical-royal text-white shadow-lg border-medical-royal scale-105" 
                          : "bg-medical-bg text-medical-muted border-medical-border hover:border-medical-royal/30 hover:bg-white hover:text-medical-royal"
                      }`}
                    >
                      {group.category}
                    </button>
                  ))}
              </div>

              {/* Bottom Row - Other Specialties */}
              <div className="flex overflow-x-auto gap-4 px-2 pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar">
                {specialtyGroups
                  .filter((group) => !["Gynaecology", "Orthopedics", "General Medicine"].includes(group.category))
                  .map((group) => (
                    <button
                      key={group.category}
                      onClick={(e) => handleCategoryClick(group.category, e)}
                      className={`px-8 py-4 rounded-2xl text-[11px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap border shrink-0 snap-center ${
                        activeCategory === group.category 
                          ? "bg-medical-royal text-white shadow-lg border-medical-royal scale-105" 
                          : "bg-medical-bg text-medical-muted border-medical-border hover:border-medical-royal/30 hover:bg-white hover:text-medical-royal"
                      }`}
                    >
                      {group.category}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-32 bg-medical-bg">
          <div className="section-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              >
                {specialtyGroups.find(g => g.category === activeCategory)?.doctors.map((doc) => (
                  <div
                    key={doc.name}
                    className="premium-card p-12 flex flex-col h-full group bg-white border-medical-border"
                  >
                    <div className="mb-10">
                      <div className="w-20 h-20 rounded-[2rem] bg-medical-bg flex items-center justify-center text-medical-gold mb-10 group-hover:bg-medical-royal group-hover:text-white group-hover:shadow-sm transition-all duration-500 border border-medical-border">
                        <Award size={40} />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-medical-navy mb-3 group-hover:text-medical-royal transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-medical-gold font-bold text-xs uppercase tracking-[0.3em]">
                        {doc.specialty}
                      </p>
                    </div>

                    <div className="space-y-8 mb-12 flex-grow">
                      <div className="flex items-start gap-5 text-[15px] text-medical-muted">
                        <GraduationCap size={24} className="text-medical-gold shrink-0" />
                        <span className="font-bold tracking-tight text-medical-navy">{doc.qualifications}</span>
                      </div>
                      <div className="p-8 rounded-3xl bg-medical-bg border border-medical-border group-hover:border-medical-royal/20 transition-colors">
                        <p className="text-medical-muted text-[15px] italic leading-relaxed font-medium">
                          "{doc.achievements}"
                        </p>
                      </div>
                    </div>

                    <Link to="/appointment" className="inline-flex items-center gap-4 text-medical-royal font-bold text-sm uppercase tracking-[0.25em] group/btn">
                      Consult Specialist <ChevronRight size={22} className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Appointment CTA */}
        <section className="py-32 bg-medical-warmWhite">
          <div className="section-container">
            <div className="bg-medical-navy rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-sm border border-medical-border">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,169,95,0.1),transparent_60%)]" />
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Expertise You Can <br /><span className="text-medical-gold">Trust</span></h2>
                <p className="text-white/80 text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                  Our specialists bring decades of experience and a passion for healing to every patient they serve.
                </p>
                <div className="flex flex-wrap justify-center gap-10">
                  <Link to="/appointment" className="btn-primary !px-16 !py-6 text-xl shadow-sm">
                    <Calendar size={22} />
                    Book Appointment
                  </Link>
                  <Link to="/contact" className="btn-secondary !bg-medical-bg !border-medical-border !text-medical-navy hover:!bg-white hover:!text-medical-navy !px-16 !py-6 text-xl">
                    Contact Hospital
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Doctors;