import { useState } from 'react';
import mcyA from '../assets/cb150rmods.jpg';
import mcyB from '../assets/benneli.jpg';
import mcyL from '../assets/ZX10.jpg';
import mcyD from '../assets/vesmet.jpg';
import mcyE from '../assets/r25.jpg';
import { motion } from 'framer-motion';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import { accordionItems, aboutBrands, carBenefits, carShowcaseDescription, carLuxuryImg, carSuvImg } from '../data';

const About = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Section 1: Introduction & Trust (White Theme) */}
      <Container id="about" className="py-24">
        {/* Header Area */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16"
        >
          <SectionHeader
            label="Tentang Kami"
            title="Pusat Jual Beli Mobil & Motor Bekas Berkualitas & Sparepart"
            className="max-w-2xl"
          />
          <div className="max-w-xs md:mt-12">
            <p className="text-gray-600 text-sm leading-relaxed">
              Sejak 2005, ErdaMotor hadir sebagai destinasi terpercaya untuk kebutuhan kendaraan roda dua & empat serta suku cadang original Anda.
            </p>
          </div>
        </motion.div>

        {/* Vehicle Showcase */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-2/1 min-h-[400px] flex items-center justify-center"
        >
          <img
            src={mcyB}
            alt="Premium Vehicle Showcase"
            className="w-full h-full object-cover rounded-3xl"
            decoding="async"
          />

          {/* Minimalist Text Overlay - Bottom Left */}
          <div className="absolute bottom-8 left-8 z-10 max-w-sm">
            <h4 className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-4">ErdaMotor Quality</h4>
            <p className="text-white text-lg md:text-xl font-light leading-relaxed">
              Setiap unit lulus <span className="text-[#d8f552] font-semibold">inspeksi mendalam</span> dengan ketersediaan <span className="text-[#d8f552] font-semibold">sparepart original</span>.
            </p>
          </div>
        </motion.div>

        {/* Brands Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-gray-100 flex flex-col items-center"
        >
          <p className="text-sm text-gray-500 mb-8 text-center max-w-xl">
            Kami menyediakan mobil dan motor dari berbagai merk terkemuka beserta kelengkapan sparepart orisinal dengan jaminan kualitas terbaik.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale">
            {aboutBrands.map((brand) => (
              <span key={brand} className="text-2xl font-bold tracking-widest">{brand}</span>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Section 2: Featured Car Highlights */}
      <section className="bg-white py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden border-t border-gray-100">
        <Container>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">Tentang Kami</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                  Dari koleksi mobil eksotis <br />
                  hingga sedan mewah <br />
                  <span className="text-red-600">dan SUV.</span>
                </h2>
              </div>
              <div className="max-w-xs pt-8 md:pt-16">
                <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-8">
                  Koleksi mobil eksotis ErdaMotor menawarkan seleksi yang luar biasa dan layanan personal yang terpercaya. Setiap unit dikurasi untuk kepuasan berkendara Anda.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-21/9 rounded-3xl overflow-hidden mt-8 shadow-2xl border border-gray-100"
            >
              <img src={carLuxuryImg} alt="Luxury Car Showcase" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent"></div>

              {/* Landing Text Highlights - Paragraph Style (Refined) */}
              <div className="absolute bottom-12 left-8 right-8 max-w-2xl flex items-start gap-6">
                <div className="w-1 self-stretch bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)] rounded-full"></div>
                <p className="text-white text-base md:text-lg leading-relaxed font-light drop-shadow-lg">
                  {carShowcaseDescription}
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Section 3: Future Vision (Blueprint Theme) */}
      <section className="bg-white py-24 px-4 md:px-8 lg:px-16 w-full">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          {/* Top Row: Header & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">Visi & Misi</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 max-w-2xl">
                Kendaraan bekas <br /> kualitas terbaik
              </h2>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-start md:items-end gap-6 md:text-right lg:pt-4">
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[10px] text-gray-400 group hover:border-gray-900 hover:text-gray-900 transition-colors cursor-pointer">
                    {i === 0 ? 'E' : i === 1 ? 'R' : i === 2 ? 'D' : 'A'}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-[280px]">
                Kami menghadirkan koleksi mobil dan motor bekas pilihan dan ketersediaan suku cadang lengkap untuk memastikan kendaraan Anda selalu prima.
              </p>
            </div>
          </div>
          {/* Middle Row: Circular Images & Dark Card Start */}
          <div className="relative mt-12">
            {/* The three circular images - Tightened Spacing */}
            <div className="flex gap-2 relative z-30 -mb-8 md:-mb-12 ml-4 md:ml-8">
              {[mcyL, mcyD, mcyE].map((img, i) => (
                <div key={i} className="w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-xl">
                  <img src={img} alt={`Koleksi kendaraan bekas ErdaMotor detail ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Dark Card */}
            <div className="bg-[#111418] rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 lg:p-24 xl:p-32 relative min-h-[500px] md:min-h-[650px] lg:min-h-[1000px] xl:min-h-[1200px] flex flex-col justify-start pt-20 md:pt-28 lg:pt-48 xl:pt-64 w-full overflow-hidden md:overflow-visible my-8">
              {/* Background Image (darkened) */}
              <div className="absolute inset-0 z-0 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden">
                <img src={mcyL} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/80"></div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 lg:gap-12 h-full">
                {/* Left Bottom Text & Stats */}
                <div className="max-w-full md:max-w-[45%] lg:max-w-[500px] mt-4 md:mt-4 lg:mt-16 xl:mt-20 order-2 md:order-1 flex flex-col gap-10 md:gap-12 lg:gap-14">

                  <div className="relative">
                    <div className="absolute left-0 top-1 bottom-1 w-1 bg-[#d8f552] rounded-full"></div>
                    <div className="pl-6 md:pl-8">
                      <h4 className="text-[#d8f552] text-sm font-bold tracking-[0.25em] uppercase mb-6">ErdaMotor</h4>
                      <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-[1.6] font-light mb-4">
                        Lebih dari sekadar dealer, <strong className="text-white font-medium">ErdaMotor</strong> adalah mitra perjalanan Anda.
                      </p>
                      <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed font-light">
                        Kami berkomitmen memberikan <span className="text-white font-medium">transparansi kondisi mesin</span>, <span className="text-white font-medium">harga yang sangat kompetitif</span>, dan kemudahan mencari sparepart untuk menjadikan setiap perawatan kendaraan lebih efisien.
                      </p>
                    </div>
                  </div>

                  {/* New Content Grid to fill space */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 pt-4 border-t border-white/10">
                    <div>
                      <h4 className="text-[#d8f552] text-2xl md:text-3xl lg:text-5xl font-bold mb-2">100%</h4>
                      <p className="text-sm text-gray-500 font-medium">Inspeksi Unit Transparan</p>
                    </div>
                    <div>
                      <h4 className="text-[#d8f552] text-2xl md:text-3xl lg:text-5xl font-bold mb-2">15+</h4>
                      <p className="text-sm text-gray-500 font-medium">Tahun melayani pelanggan</p>
                    </div>
                    <div>
                      <h4 className="text-[#d8f552] text-2xl md:text-3xl lg:text-5xl font-bold mb-2">24H</h4>
                      <p className="text-sm text-gray-500 font-medium">Dukungan ketersediaan part</p>
                    </div>
                    <div>
                      <h4 className="text-[#d8f552] text-2xl md:text-3xl lg:text-5xl font-bold mb-2">10K+</h4>
                      <p className="text-sm text-gray-500 font-medium">Unit terjual dengan aman</p>
                    </div>
                  </div>
                </div>

                {/* Right Header Text - Scalable typography */}
                <div className="flex flex-col items-start md:items-end text-left md:text-right ml-0 md:ml-auto order-1 md:order-2 max-w-3xl">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-white md:text-right">
                    Temukan unit <br />
                    impian dengan <br />
                    <span className="text-[#d8f552]">harga terbaik</span>
                  </h3>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="relative mt-8 md:mt-0 md:absolute md:bottom-[-8%] md:right-[-2%] w-full md:w-[45%] max-w-3xl aspect-video rounded-3xl md:rounded-full overflow-hidden border-4 md:border-8 lg:border-12 border-[#111418] shadow-2xl md:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] z-30">
                <img src={mcyA} alt="Koleksi kendaraan berkualitas tinggi di ErdaMotor" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Responsive Spacer */}
            <div className="h-8 md:h-24 lg:h-48"></div>
          </div>
        </div>
      </section>

      {/* Section 4: Transaction Benefits */}
      <section className="bg-white py-24 w-full border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                Keuntungan
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
                Jual Kendaraan Anda <br /> Dengan <span className="text-red-600">Harga Terbaik</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 max-w-lg">
                Anda mengenal kami sebagai dealer kendaraan spesial, kini kami juga memfasilitasi penjualan mobil pilihan pelanggan kami dengan proses yang sangat transparan.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {carBenefits.map((benefit, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all group">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#d8f552] transition-colors">
                    {benefit.icon === 'wallet' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                    )}
                    {benefit.icon === 'smile' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                    )}
                    {benefit.icon === 'shield-check' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 w-full aspect-16/7 rounded-[3rem] overflow-hidden shadow-3xl"
          >
            <img src={carSuvImg} alt="Family SUV" className="w-full h-full object-cover" />
          </motion.div>
        </Container>
      </section>

      {/* Section 5: Deep Dive Details (Editorial Theme) */}
      <Container className="py-24">
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
    </div>
  );
};

export default About;
