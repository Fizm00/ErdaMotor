import { motion } from 'framer-motion';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import { siteConfig } from '../../data';

const Location = () => {
  return (
    <section id="location" className="w-full bg-white py-24 overflow-hidden">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <SectionHeader
            label="Kunjungi Kami"
            title={`Lokasi ${siteConfig.name.toUpperCase()}`}
          />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          {/* Left Column: Info Box */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between bg-white rounded-4xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-8">
                Alamat Showroom
              </h3>

              {/* Address Block */}
              <div className="flex gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-semibold leading-relaxed mb-1">
                    {siteConfig.address.title}
                  </p>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {siteConfig.address.detail}
                  </p>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="bg-gray-50 rounded-3xl p-6 mb-10 border border-gray-100">
                <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  Jam Layanan
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">Senin - Sabtu</span>
                    <span className="text-gray-900 font-bold">08:00 — 16:30</span>
                  </div>
                  <div className="flex flex-col border-t border-gray-200 pt-3 mt-1 col-span-1 sm:col-span-2">
                    <span className="text-sm font-medium text-[red]">Minggu</span>
                    <span className="text-[red] font-bold">Showroom Libur</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Area */}
            <div className="flex flex-col sm:flex-row gap-3 relative z-10">
              <a 
                href={`${siteConfig.contact.whatsapp}?text=Halo%20ErdaMotor%2C%20saya%20ingin%20bertanya%20mengenai%20unit%20yang%20tersedia.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-2"
              >
                <button className="w-full bg-[#1a1a24] hover:bg-black text-white px-8 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/10 active:scale-[0.98]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Hubungi Sales
                </button>
              </a>
              <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 px-6 py-5 rounded-2xl font-bold border border-gray-200 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                Rute
              </button>
            </div>
          </motion.div>

          {/* Right Column: Google Maps */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-4xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-gray-200 bg-gray-50 min-h-[600px] lg:min-h-[750px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.679256006484!2d110.1397956!3d-7.277289400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7077f05c1ee369%3A0xd4a0fc9e4ad8cba5!2serda%20motor!5e0!3m2!1sid!2sid!4v1773475962444!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ErdaMotor Location Map"
              className="w-full h-full object-cover"
            ></iframe>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Location;
