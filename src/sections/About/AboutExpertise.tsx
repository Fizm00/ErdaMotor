import { motion } from 'framer-motion';
import Container from '../../components/ui/Container';
import { carBenefits, carSuvImg } from '../../data';

const AboutExpertise = () => {
  return (
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
          className="mt-20 w-full aspect-video md:aspect-16/7 rounded-[3rem] overflow-hidden shadow-3xl"
        >
          <img src={carSuvImg} alt="Unit SUV keluarga tangguh dan berkualitas tersedia di ErdaMotor" className="w-full h-full object-cover" />
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutExpertise;
