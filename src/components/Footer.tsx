import { motion } from 'framer-motion';
import { siteConfig, navigationLinks } from '../data';

const Footer = () => {

   return (
      <footer className="w-full bg-white px-2 pb-2 pt-24">
         <motion.div 
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin:"-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#111111] w-full rounded-4xl pt-16 pb-8 md:pt-24 px-8 md:px-16 lg:px-24 flex flex-col text-white pb-safe overflow-hidden"
         >

            {/* Main Footer Content */}
            <div className="w-full flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-20 md:mb-32">

               {/* Left Box: Call To Action */}
               <div className="flex flex-col lg:w-5/12">
                  <div className="flex items-center gap-2 mb-6">
                     <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                     <span className="text-gray-400 text-sm font-medium">Hubungi Kami</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.1] mb-10">
                     Siap untuk<br />mendapatkan<br />kendaraan impian?
                  </h2>

                  <button className="self-start flex items-center justify-between bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium w-full max-w-[280px] hover:bg-gray-100 transition-colors group">
                     <span>Jelajahi Sekarang</span>
                     <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-white group-hover:bg-black transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                     </div>
                  </button>
               </div>

               {/* Right Container: Links and Contact */}
               <div className="flex flex-col sm:flex-row gap-16 lg:w-6/12 lg:justify-end">

                  {/* Middle Box: Navigation */}
                  <div className="flex flex-col sm:w-1/2 lg:w-48">
                     <h3 className="text-gray-400 font-medium border-b border-gray-800 pb-4 mb-6">
                        Navigasi
                     </h3>
                     <ul className="flex flex-col gap-4 text-sm font-medium text-white/90">
                        {navigationLinks.map((link) => (
                           <li key={link.label}>
                              <a href={link.href} className="hover:text-white transition-colors block">
                                 {link.label}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Right Box: Offices & Contact */}
                  <div className="flex flex-col sm:w-1/2 lg:w-64 max-sm:max-w-sm">
                     <h3 className="text-gray-400 font-medium border-b border-gray-800 pb-4 mb-6">
                        Kunjungi Kantor Kami
                     </h3>
                     <div className="flex gap-3 mb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white shrink-0 mt-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <p className="text-sm leading-relaxed text-white/90 whitespace-pre-line">
                           {siteConfig.address.detail}
                        </p>
                     </div>

                     <h3 className="text-gray-400 font-medium border-b border-gray-800 pb-4 mb-6">
                        Kontak Kami
                     </h3>
                     <div className="flex flex-col gap-5 text-sm text-white/90">
                        <div className="flex items-center gap-3 w-max hover:text-white cursor-pointer transition-colors">
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                           {siteConfig.contact.phone}
                        </div>
                        <div className="flex items-center gap-3 w-max hover:text-white cursor-pointer transition-colors">
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                           {siteConfig.contact.email}
                        </div>

                        <div className="flex gap-4 mt-4">
                           <a href={siteConfig.socials.instagram} className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                           </a>
                           <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3.5l-1 7.2z"></path></svg>
                           </a>
                           <a href={siteConfig.socials.facebook} className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                           </a>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

            <div className="w-full border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50">
               <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Seluruh Hak Cipta Dilindungi.</p>
               <div className="flex gap-6">
                  <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                  <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
               </div>
            </div>

         </motion.div>
      </footer>
   );
};

export default Footer;
