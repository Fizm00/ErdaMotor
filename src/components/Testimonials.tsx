import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import { testimonials } from '../data';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
      setIsAnimating(false);
    }, 200);
  };

  const current = testimonials[currentSlide];

  return (
    <Container id="testimonials" className="">
      {/* Header Section */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin:"-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8"
      >
        <SectionHeader
          label="Ulasan Pelanggan"
          title={<>Apa kata<br />pelanggan kami</>}
        />

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-400 mr-2 tabular-nums">
            {String(currentSlide + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
          <button
            onClick={() => changeSlide('prev')}
            className="w-12 h-12 rounded-full bg-[#f5f5f7] hover:bg-gray-200 transition-colors flex items-center justify-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={() => changeSlide('next')}
            className="w-12 h-12 rounded-full bg-[#f5f5f7] hover:bg-gray-200 transition-colors flex items-center justify-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Two-Column Card Layout */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-auto lg:h-[600px] transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
        {/* Left Column: Quote Card */}
        <div className="bg-white p-10 md:p-14 flex flex-col justify-between h-[400px] lg:h-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-900 rounded-sm rotate-45"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 uppercase">ErdaVerified</span>
          </div>

          <div className="flex flex-col gap-8 mt-auto">
            <blockquote className="text-2xl md:text-[2rem] font-medium leading-[1.3] tracking-tight text-gray-900">
              {current.quote}
            </blockquote>
            <p className="text-gray-500 font-medium text-sm">
              — {current.name}, <span className="font-normal text-gray-400">{current.role}</span>
            </p>
          </div>
        </div>

        {/* Right Column: Image Card */}
        <div className="rounded-4xl overflow-hidden bg-[#e0e1db] h-[400px] lg:h-full relative">
          <img
            src={current.image}
            alt="Customer Experience"
            className="w-full h-full object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsAnimating(false);
              }, 200);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-gray-900' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;
;
