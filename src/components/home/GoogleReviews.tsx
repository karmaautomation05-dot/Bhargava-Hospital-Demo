import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { GOOGLE_REVIEWS_DATA } from '../../data/googleReviews';

import 'swiper/css';
import 'swiper/css/pagination';

const TRUNCATE_LENGTH = 120;

const GoogleSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-2.649 6.58-9.263 11.245-17.303 11.245-9.727 0-17.636-7.826-17.636-17.5S12.273 4.245 22 4.245c4.49 0 8.583 1.674 11.69 4.421L40.1 2.2A24.55 24.55 0 0 0 22 0C9.85 0 0 9.85 0 22s9.85 22 22 22c10.77 0 19.91-7.745 21.654-18H43.61Z" />
    <path fill="#FF3D00" d="M6.306 14.691 12.4 19.33A17.44 17.44 0 0 1 22 4.745c4.49 0 8.583 1.674 11.69 4.421L40.1 2.2A24.55 24.55 0 0 0 22 0C13.963 0 6.912 4.855 3.013 12.028l3.293 2.663Z" />
    <path fill="#4CAF50" d="M22 44c5.585 0 10.689-2.007 14.654-5.322L31.14 34.22c-2.703 1.854-6.104 3.025-11.14 3.025-7.182 0-13.326-4.353-16.146-10.574l-3.826 2.936C5.146 39.086 12.825 44 22 44Z" />
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a18.88 18.88 0 0 1-5.926 4.222c0 .001 0 .002-.002.002l8.765 6.463c-.002 0 8.498-6.993 8.498-17.229a14.94 14.94 0 0 0-.473-4.375Z" />
  </svg>
);

const Avatar = ({ name }: { name: string }) => (
  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm border border-medical-border bg-[#FCE4EC] flex items-center justify-center shrink-0">
    <span className="text-[#E91E63] font-bold text-xl">{name.charAt(0).toUpperCase()}</span>
  </div>
);

const ReviewCard = ({ review }: { review: typeof GOOGLE_REVIEWS_DATA.reviews[0] }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > TRUNCATE_LENGTH;
  const displayText = expanded || !isLong ? review.text : review.text.slice(0, TRUNCATE_LENGTH) + '...';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="premium-card p-12 min-h-[520px] h-full flex flex-col justify-between relative group bg-white border-medical-border"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote size={80} className="text-medical-royal" />
      </div>

      <div className="flex gap-2 mb-8 relative z-10">
        {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={22} className="fill-[#FFC107] text-[#FFC107]" />
        ))}
      </div>

      <div className="relative z-10 mb-6 flex-grow">
        <p className="text-medical-muted italic leading-relaxed text-lg font-medium">
          &ldquo;{displayText}&rdquo;
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-medical-royal text-xs font-bold uppercase tracking-[0.1em] hover:underline mt-2"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

        <a
          href={review.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-medical-royal text-xs font-bold uppercase tracking-[0.1em] hover:underline mb-8 relative z-10"
        >
          <GoogleSvg className="w-4 h-4" />
          Verify on Google
          <ExternalLink size={12} />
        </a>

      <div className="flex items-center gap-5 pt-8 border-t border-medical-border relative z-10">
        <Avatar name={review.author} />
        <div>
          <h4 className="text-medical-navy font-bold text-xl mb-1 tracking-tight">{review.author}</h4>
          <p className="text-medical-royal text-[11px] uppercase tracking-[0.3em] font-bold">{review.role || 'PATIENT'}</p>
        </div>
      </div>
    </motion.div>
  );
};

const GoogleReviews = () => {
  const { writeReviewUrl, readMoreUrl, reviews } = GOOGLE_REVIEWS_DATA;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-medical-royal/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 bg-white/80 shadow-sm mb-6">
            <GoogleSvg className="w-6 h-6" />
            <span className="text-base font-semibold text-gray-600">Verified by Google</span>
            <ShieldCheck size={20} className="text-green-600" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-medical-navy mb-8 leading-tight tracking-tight">What Our <span className="text-medical-royal">Patients Say</span></h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          className="!pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={readMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-medical-royal text-medical-royal font-semibold hover:bg-medical-royal/5 transition-all"
          >
            Read more reviews on Google
            <ExternalLink size={16} />
          </a>
          <a
            href={writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-medical-royal text-white font-semibold hover:bg-medical-royal/90 transition-all shadow-lg shadow-medical-royal/20"
          >
            <GoogleSvg className="w-5 h-5 brightness-0 invert" />
            Write a Review on Google
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
