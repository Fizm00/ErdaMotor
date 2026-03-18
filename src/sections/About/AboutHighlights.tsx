import { motion } from 'framer-motion';
import Container from '../../components/ui/Container';
import { carShowcaseDescription, carLuxuryImg } from '../../data';

const AboutHighlights = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden border-t border-gray-100">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
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
            className="relative w-full aspect-video md:aspect-21/9 rounded-3xl overflow-hidden mt-8 shadow-2xl border border-gray-100"
          >
            <img src={carLuxuryImg} alt="Koleksi sedan mewah dan mobil eksotis pilihan di ErdaMotor Temanggung" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent"></div>

            {/* Landing Text Highlights - Paragraph Style (Refined) */}
            <div className="absolute bottom-4 md:bottom-12 left-4 md:left-8 right-4 md:right-8 max-w-2xl flex items-start gap-4 md:gap-6">
              <div className="w-1 self-stretch bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)] rounded-full"></div>
              <p className="text-white text-xs sm:text-sm md:text-lg leading-relaxed font-light drop-shadow-lg">
                {carShowcaseDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHighlights;
