import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Award, GraduationCap, ChevronRight, Bone, Heart, Activity, Stethoscope, Baby, Scissors, FlaskConical, Ear, Brain, Eye, Dna, Spline, Utensils, Dumbbell, Smile, Radio, FlaskRound } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Doctor {
  name: string;
  specialty: string;
  qualifications: string;
  achievements: string;
  department: string;
}

interface DeptInfo {
  name: string;
  icon: React.ElementType;
}

const departments: DeptInfo[] = [
  { name: 'Orthopedics', icon: Bone },
  { name: 'General Medicine', icon: Stethoscope },
  { name: 'Gynaecology', icon: Heart },
  { name: 'Cardiology', icon: Activity },
  { name: 'General Surgery', icon: Scissors },
  { name: 'Peadiatrics', icon: Baby },
  { name: 'Peadiatric Surgeons', icon: Baby },
  { name: 'Urology', icon: FlaskConical },
  { name: 'Chest Physician', icon: Activity },
  { name: 'ENT', icon: Ear },
  { name: 'Gastroentrology', icon: Stethoscope },
  { name: 'Nephrology', icon: FlaskConical },
  { name: 'Opthalmics', icon: Eye },
  { name: 'Onco-Surgery', icon: Dna },
  { name: 'Neuro Surgeons', icon: Brain },
  { name: 'Plastic Surgeon', icon: Spline },
  { name: 'Anaesthesia', icon: FlaskConical },
  { name: 'Psychiatrists', icon: Smile },
  { name: 'Radiology', icon: Radio },
  { name: 'Pathology', icon: FlaskRound },
  { name: 'Dietetics', icon: Utensils },
  { name: 'Physiotherapy', icon: Dumbbell }
];

const doctors: Doctor[] = [
  { name: "Dr. Gaurav Bhargava", specialty: "Orthopaedist / Joint Replacement / Sports Injury", qualifications: "MBBS, MS (Ortho)", achievements: "He is the best known Orthopaedist in Kanpur. A well known knee replacement surgeon, he leaves no stone unturned in taking care of his patients.", department: "Orthopedics" },
  { name: "Dr. Priyanka Bhargava", specialty: "Obstetrics & Gynaecology", qualifications: "MBBS, MS (Obs & Gyn)", achievements: "She is one of the best gynaecologist in Kanpur. Known for her amazing specialization at this profession, she has been contributing a lot towards the health of all the female across the city and beyond.", department: "Gynaecology" },
  { name: "Dr. Anil Verma", specialty: "General Medicine", qualifications: "MBBS, MD", achievements: "He is a MBBS (M.D) at the Bhargava Medical and trauma center. He has a great experience over his designation.", department: "General Medicine" },
  { name: "Dr. R.R. Bhargava", specialty: "MD Chest / Chest Physician", qualifications: "MBBS, MD", achievements: "He is the best known MD Chest in Kanpur. He has been providing comprehensive medical services in our city since many years now.", department: "Chest Physician" },
  { name: "Dr. Kanchanmala", specialty: "Obstetrics & Gynaecology", qualifications: "MBBS, MS (Obs & Gyn)", achievements: "She is one of the Gynaecologist at the Bhargava Medical and trauma center.", department: "Gynaecology" },
  { name: "Dr. Amit", specialty: "Cardiology", qualifications: "MBBS", achievements: "He is a cardiologist at the Bhargava Medical and trauma center. He has a great experience over this profession.", department: "Cardiology" },
  { name: "Dr. Irfan", specialty: "Cardiology", qualifications: "MBBS", achievements: "He is the Cardiologist at the Bhargava Medical and trauma center.", department: "Cardiology" },
  { name: "Dr. Pawan Singh", specialty: "Laparoscopic & General Surgeon", qualifications: "MBBS, MS", achievements: "He has been providing his services as the General Surgeon at the Bhargava Medical and trauma center.", department: "General Surgery" },
  { name: "Dr. R.K. Singh", specialty: "Laparoscopic & General Surgeon", qualifications: "MBBS, MS", achievements: "He is a General Surgeon at the Bhargava Medical and trauma center.", department: "General Surgery" },
  { name: "Dr. Prashant Rajpoot", specialty: "Laparoscopic & General Surgeon", qualifications: "MBBS, MS", achievements: "He has been providing his services as the General Surgeon at the Bhargava Medical and trauma center.", department: "General Surgery" },
  { name: "Dr. Rohit Agarwal", specialty: "Peadiatrics", qualifications: "MBBS", achievements: "He is one of the Pediatrician at the Bhargava Medical and trauma center.", department: "Peadiatrics" },
  { name: "Dr. Ashwini Shukla", specialty: "Peadiatrics", qualifications: "MBBS, DCH", achievements: "He is a Pediatrician at the Bhargava Medical and trauma center.", department: "Peadiatrics" },
  { name: "Dr. S.S. Rathore", specialty: "Peadiatrics", qualifications: "MBBS, DCH", achievements: "He is one of the Pediatrician at the Bhargava Medical and trauma center.", department: "Peadiatrics" },
  { name: "Dr. Arif Mohammad", specialty: "Peadiatrics", qualifications: "MBBS, DCH", achievements: "He holds a degree in MBBS BCH and has a great experience of 15 years.", department: "Peadiatrics" },
  { name: "Dr. Rakesh Tripathi", specialty: "Peadiatric Surgeon", qualifications: "MBBS, MS", achievements: "He is one of the Pediatrician(Surgeon) at the Bhargava Medical and trauma center.", department: "Peadiatric Surgeons" },
  { name: "Dr. Manish Kumar", specialty: "Urology Surgeon", qualifications: "MBBS, MS", achievements: "A Urologist surgeon at the Bhargava Medical and trauma center.", department: "Urology" },
  { name: "Dr. Vijay Bajaj", specialty: "ENT Specialist", qualifications: "MBBS, MS", achievements: "He is a well known ENT at the Bhargava Medical and trauma center.", department: "ENT" },
  { name: "Dr. Anand Verma", specialty: "Gastroentrology", qualifications: "MBBS", achievements: "He holds a degree in gastro. He is well known as a Gastrologist in Bhargava Medical and trauma center.", department: "Gastroentrology" },
  { name: "Dr. Sameer Govil", specialty: "Nephrology", qualifications: "MBBS, MD", achievements: "He is a well known Nephrologist at the Bhargava Medical and trauma center.", department: "Nephrology" },
  { name: "Dr. D K Sinha", specialty: "Nephrology", qualifications: "MBBS, MD", achievements: "He is well known as the Nephrologist at the Bhargava Medical and trauma center.", department: "Nephrology" },
  { name: "Dr. Deepa Tiwari", specialty: "Ophthalmology", qualifications: "MBBS, MS", achievements: "She is well known as the Ophthalmologist at the Bhargava Medical and trauma center.", department: "Opthalmics" },
  { name: "Dr. Rohit Tekriwal", specialty: "Onco-Surgeon", qualifications: "MBBS, MS", achievements: "An Oncologist (Surgeon) by profession at the Bhargava Medical and trauma center.", department: "Onco-Surgery" },
  { name: "Dr. Rajeev Kainth", specialty: "Neuro Surgery", qualifications: "MBBS, MCH", achievements: "He is a well known Neuro Surgeon at the Bhargava Medical and trauma center.", department: "Neuro Surgeons" },
  { name: "Dr. Amit Gupta", specialty: "Neuro Surgery", qualifications: "MBBS, MCH", achievements: "He is known to be as a well known Neuro Surgeon at the Bhargava Medical and trauma center.", department: "Neuro Surgeons" },
  { name: "Dr. Pradeep Tandon", specialty: "Plastic Surgery", qualifications: "MBBS, MCH", achievements: "He is a well known Plastic Surgeon at the Bhargava Medical and trauma center.", department: "Plastic Surgeon" },
  { name: "Dr. Hemlata Shukla", specialty: "Anaesthesia & Intensive Care", qualifications: "MBBS, DA", achievements: "She is well known as the Anesthesiologist at the Bhargava Medical and trauma center.", department: "Anaesthesia" },
  { name: "Dr. Dinesh Sahu", specialty: "Anaesthesia & Intensive Care", qualifications: "MBBS, MD", achievements: "An Anaesthesiologist at the Bhargava Medical and trauma center.", department: "Anaesthesia" },
  { name: "Dr. Neeraj Shukla", specialty: "Anaesthesia & Intensive Care", qualifications: "MBBS, MD", achievements: "He is well known as the Anesthesiologist at the Bhargava Medical and trauma center.", department: "Anaesthesia" },
  { name: "Dr. A.K. Jaiswal", specialty: "Psychiatry", qualifications: "MBBS, MD", achievements: "A Psychiatrist by profession, he has been offering his services at the Bhargava Medical and trauma center for many years.", department: "Psychiatrists" },
  { name: "Dr. K P Narang", specialty: "Radiology", qualifications: "MBBS, MD", achievements: "He is a Radiologist at the Bhargava Medical and trauma center.", department: "Radiology" },
  { name: "Dr. Umesh Paliwal", specialty: "Pathology", qualifications: "MBBS, MD", achievements: "He is the MD pathologist at the Bhargava Medical and trauma center.", department: "Pathology" },
  { name: "Dt. Aisha Khan", specialty: "Dietetics & Nutrition", qualifications: "B.Sc, M.Sc", achievements: "A well known Dietitians and Nutritionists at the Bhargava Medical and trauma center.", department: "Dietetics" },
  { name: "Dr. Malkhan Singh", specialty: "Physiotherapy", qualifications: "MPT, MSc (Endocrinology)", achievements: "He is the Physiotherapist, holding MPT and MSc (Endocrinology) degree at the Bhargava Medical and trauma center.", department: "Physiotherapy" }
];

const Doctors = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '').toLowerCase();
    if (hash) {
      const matched = departments.find(d => d.name.toLowerCase().replace(/\s+/g, '-') === hash);
      if (matched) {
        setActiveCategory(matched.name);
        setTimeout(() => {
          const el = document.getElementById('doctors-section');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }
  }, [location]);

  const handleDeptClick = (name: string) => {
    setActiveCategory(activeCategory === name ? null : name);
    setTimeout(() => {
      const el = document.getElementById('doctors-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 250);
  };

  const filteredDoctors = activeCategory
    ? doctors.filter(d => d.department === activeCategory)
    : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-medical-bg"
    >
      <Helmet>
        <title>Our Doctors - Bhargava Medical & Trauma Center</title>
        <meta name="description" content="Meet our complete team of expert doctors at Bhargava Medical & Trauma Center across all departments." />
      </Helmet>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-medical-royal/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-medical-navy/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#071B34] via-cyan-800 to-cyan-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,169,95,0.08),transparent_40%)]" />
          <div className="section-container relative z-10 text-center">
            <span className="text-white uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Specialty Clinics</span>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight"
            >
              Our Medical <span className="text-white">Departments</span>
            </motion.h1>
            <p className="text-white/80 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              Browse our departments and select one to view our specialist doctors
            </p>
          </div>
        </section>

        {/* Department Grid */}
        <section className="py-24 bg-medical-bg">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="text-medical-royal uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Departments</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy mb-6">Explore Our Specialties</h2>
              <p className="text-medical-muted text-lg max-w-2xl mx-auto">
                Click a department to view its specialist doctors
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {departments.map((dept) => {
                const IconComponent = dept.icon;
                const isActive = activeCategory === dept.name;
                return (
                  <button
                    key={dept.name}
                    onClick={() => handleDeptClick(dept.name)}
                    className={`group relative flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300 shadow-sm ${
                      isActive
                        ? 'bg-medical-royal text-white border-medical-royal shadow-lg shadow-medical-royal/20 scale-[1.02]'
                        : 'bg-white text-medical-navy border-medical-border hover:border-medical-royal/40 hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-white/15'
                        : 'bg-medical-royal/5 group-hover:bg-medical-royal/10'
                    }`}>
                      <IconComponent size={28} className={isActive ? 'text-white' : 'text-medical-royal'} />
                    </div>
                    <span className="text-xs font-bold text-center leading-tight tracking-wide">
                      {dept.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        {activeCategory && (
          <section id="doctors-section" className="py-24 bg-medical-warmWhite">
            <div className="section-container">
              <div className="flex items-center justify-between mb-16">
                <div>
                  <span className="text-medical-royal uppercase tracking-[0.3em] font-bold text-sm mb-2 block">Specialists</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-medical-navy">{activeCategory}</h2>
                </div>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-sm text-medical-muted hover:text-medical-royal font-medium transition-colors"
                >
                  View All Departments
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredDoctors.map((doc) => (
                    <div
                      key={doc.name}
                      className="bg-white rounded-3xl border-2 border-medical-border p-8 flex flex-col h-full group hover:shadow-lg hover:border-medical-royal/30 transition-all duration-500 shadow-sm"
                    >
                      <div className="mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-medical-bg flex items-center justify-center text-medical-royal mb-6 group-hover:bg-medical-royal group-hover:text-white transition-all duration-500 border border-medical-border">
                          <Award size={32} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-medical-navy mb-2">
                          {doc.name}
                        </h3>
                        <p className="text-medical-royal font-bold text-xs uppercase tracking-[0.25em]">
                          {doc.specialty}
                        </p>
                      </div>

                      <div className="space-y-5 mb-8 flex-grow">
                        <div className="flex items-center gap-3 text-[14px] text-medical-muted">
                          <GraduationCap size={20} className="text-medical-royal shrink-0" />
                          <span className="font-bold text-medical-navy">{doc.qualifications}</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-medical-bg border border-medical-border/60">
                          <p className="text-medical-muted text-[14px] italic leading-relaxed font-medium">
                            "{doc.achievements}"
                          </p>
                        </div>
                      </div>

                      <Link to="/appointment" className="inline-flex items-center gap-2 text-medical-royal font-bold text-xs uppercase tracking-[0.25em] group/btn">
                        Consult Specialist <ChevronRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* Appointment CTA */}
        <section className="py-24 bg-medical-bg">
          <div className="section-container">
            <div className="bg-medical-navy rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-sm border border-medical-border">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,169,95,0.1),transparent_60%)]" />
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Expertise You Can <br /><span className="text-white">Trust</span></h2>
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
