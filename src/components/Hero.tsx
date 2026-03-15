import heroBg from '../assets/hero-bg.jpg';
import { motion } from 'framer-motion';
import { siteConfig, navigationLinks } from '../data';

const Hero = () => {

  return (
    <section className="w-full h-screen min-h-[600px] p-[10px] md:p-[20px] bg-[#ffffff]">
      <div className="relative w-full h-full flex flex-col overflow-hidden bg-black rounded-3xl">
        {/* Background Image with Overlay */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src={heroBg}
            alt="Classic custom motorcycle"
            className="w-full h-full object-cover object-center transform-gpu"
            decoding="async"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        {/* Inner Container */}
        <div className="relative z-10 w-full h-full flex flex-col px-4 md:px-8 lg:px-16">
          {/* Navbar */}
          <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between pt-6 text-white w-full"
          >
            {/* Logo */}
            <div className="text-2xl font-bold tracking-tight">{siteConfig.name}</div>

            {/* Links */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
              {navigationLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href="#location" 
              className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#d8f552] transition-colors"
            >
              {siteConfig.ctaText}
            </a>
          </motion.nav>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-end pb-12 w-full mt-auto">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8"
              >
                {siteConfig.tagline}
              </motion.h1>

              {/* Action Button */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex"
              >
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between bg-white text-gray-900 rounded-full py-4 px-8 font-bold text-lg shadow-2xl hover:bg-[#d8f552] transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 mr-4">Kontak Kami</span>
                  <div className="relative z-10 bg-gray-900 text-white p-2 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Bottom Right Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden md:flex absolute right-6 bottom-12 flex-col items-end text-right"
            >
              <span className="text-white font-bold tracking-widest text-sm md:text-base uppercase">
                {siteConfig.name}
              </span>
              <span className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase mt-1">
                Since 2005
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
