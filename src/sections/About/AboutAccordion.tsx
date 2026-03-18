import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import { accordionItems } from '../../data';
import mcyE from '../../assets/r25.jpg';

const AboutAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <Container>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <SectionHeader
              label="Inspeksi"
              title={<>Karena tantangan<br />terbesar adalah<br />tak tertandingi.</>}
              className="mb-12"
            />
            <p className="text-lg font-bold text-gray-900 mb-12 uppercase tracking-wide">Temukan detail inspeksi kami.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12 border-t border-gray-200">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-6"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                <h4 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">Performa</h4>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">Sistem mekanis disiapkan untuk performa maksimal berkat filter oli & aerodinamika yang direvisi secara profesional.</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <h4 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">Nyaman & Aman</h4>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">Tetap setia pada filosofi kenyamanan premium meskipun terdapat peningkatan performa mekanis yang signifikan.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden h-full min-h-[500px]"
          >
            <img src={mcyE} alt="Mekanik ErdaMotor melakukan inspeksi mendalam pada kendaraan" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Quote Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/50 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-white">
              <span className="text-[#d8f552] text-5xl leading-none font-serif block mb-4">"</span>
              <p className="text-lg md:text-xl leading-relaxed font-medium mb-6">
                Dengan standar teknis yang ketat, setiap unit dikurasi secara sempurna untuk menghadirkan performa maksimal di jalan raya.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[2px] bg-[#d8f552]"></div>
                <span className="text-sm font-bold uppercase tracking-widest text-[#d8f552]">Ahli Mesin ErdaMotor</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature List Accordion Style */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <div className="flex justify-end items-center mb-16 border-b border-gray-200 pb-4">
            <p className="text-lg font-medium text-gray-900 text-right">Temukan detail teknis spesifik <br /> tentang tiap kendaraan.</p>
          </div>

          {accordionItems.map((item) => {
            const isOpen = openAccordion === item.id;
            return (
              <div key={item.id} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                  className="w-full py-8 flex justify-between items-center group cursor-pointer"
                >
                  <div className="flex items-center gap-12">
                    <span className="text-gray-400 text-sm font-medium w-6">0{item.id}</span>
                    <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-colors ${isOpen ? 'text-black' : 'text-gray-900 group-hover:text-black'
                      }`}>{item.title}</h3>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                    ? 'bg-red-500 text-white'
                    : 'bg-black text-white group-hover:scale-110'
                    }`}>
                    {isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 17 17 17 7"></polyline></svg>
                    )}
                  </div>
                </button>

                {/* Expandable Content */}
                <div className={`grid transition-all duration-700 ease-[0.22,1,0.36,1] ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-12' : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                  }`}>
                  <div className="overflow-hidden">
                    {/* Media Container */}
                    <div className="relative w-full aspect-16/10 md:aspect-21/9 rounded-3xl overflow-hidden mb-12">
                      <img src={item.image} alt={`Visualisasi ${item.title} ErdaMotor`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Stats Overlay */}
                      <div className="absolute top-4 md:top-8 left-4 md:left-8 text-white">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                          <span className="text-4xl md:text-8xl font-black leading-none">{item.stats[0].value}</span>
                          <span className="text-xs md:text-xl font-medium text-[#d8f552] md:text-white/70 uppercase tracking-widest">{item.stats[0].label}</span>
                        </div>
                      </div>

                      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 text-white text-right">
                        <div className="flex flex-col items-end gap-1 md:gap-0">
                          <span className="text-3xl md:text-6xl font-black leading-none">{item.stats[1].value}</span>
                          <span className="text-[10px] md:text-lg font-medium text-white/50 md:text-white/70 uppercase tracking-widest">{item.stats[1].label}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                      <div className="md:w-1/3">
                        <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-[10px] font-bold tracking-widest text-gray-900 mb-6 font-mono">
                          SPESIFIKASI TEKNIS
                        </div>
                        <div className="space-y-4">
                          <ul className="space-y-3">
                            {item.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-sm text-gray-500 font-medium pb-3 border-b border-gray-100 last:border-0">
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="md:w-2/3 flex flex-col justify-between items-start">
                        <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-12">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutAccordion;
