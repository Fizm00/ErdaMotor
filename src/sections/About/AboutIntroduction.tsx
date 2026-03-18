import { motion } from 'framer-motion';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import { aboutBrands } from '../../data';
import mcyB from '../../assets/benneli.jpg';

const AboutIntroduction = () => {
  return (
    <section id="about" className="w-full bg-white pt-44 pb-24 overflow-hidden">
      <Container>
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
            Kami menyediakan mobil dan motor dari berbagai merk terkemuka beserta kelengkapan sparepart original dengan jaminan kualitas terbaik.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale">
            {aboutBrands.map((brand) => (
              <span key={brand} className="text-2xl font-bold tracking-widest">{brand}</span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutIntroduction;
