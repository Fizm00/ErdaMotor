import { motion } from 'framer-motion';
import Container from './common/Container';
import mcyHero from '../assets/about-hero-moto.jpg';
import mcyEdit from '../assets/about-editorial.png';

const WhyChooseUs = () => {

  return (
    <Container id="why-choose-us" className="py-24 bg-white">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin:"-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(300px,auto)]"
      >

        {/* Tile 1: Header / Intro Text */}
        <div className="p-10 flex flex-col justify-start">
          <h2 className="text-[2.75rem] font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
            Kenapa Memilih<br />ErdaMotor?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xs">
            Komitmen kami adalah memberikan pengalaman jual-beli kendaraan yang paling aman dan transparan.
          </p>
        </div>

        {/* Tile 2: Terpercaya (Top Middle) */}
        <div className="bg-[#fef9f3] rounded-[2.5rem] p-10 flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
          <h3 className="text-xl font-bold text-gray-900">Terpercaya</h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
            Lebih dari 10 tahun melayani ribuan pelanggan dengan integritas tinggi.
          </p>
        </div>

        {/* Tile 3: Kualitas Terjamin (Top Right) */}
        <div className="bg-[#f4f7f4] rounded-[2.5rem] p-10 flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
          <h3 className="text-xl font-bold text-gray-900">Kualitas<br />Terjamin</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Setiap unit melalui 50+ titik inspeksi ketat oleh mekanik bersertifikat.
          </p>
        </div>

        {/* Tile 4: Hasil Nyata (Bottom Left - Wide) */}
        <div className="md:col-span-2 relative bg-[#ecf2f3] rounded-[2.5rem] overflow-hidden min-h-[400px] flex flex-col justify-between p-10 group hover:shadow-xl transition-all duration-500">
          <div className="absolute inset-0 z-0">
            <img
              src={mcyHero}
              alt="Koleksi Kendaraan Premium"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white">Hasil Nyata</h3>
          </div>

          <div className="relative z-10 mt-auto">
            <p className="text-white/80 text-sm leading-relaxed font-semibold max-w-xs">
              Dibangun oleh pengendara untuk pengendara — kami mengerti presisi apa yang mesin butuhkan.
            </p>
          </div>
        </div>

        {/* Tile 5: Bebas Khawatir (Bottom Right - Tall) */}
        <div className="relative bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden min-h-[400px] flex flex-col justify-between p-10 group hover:shadow-xl transition-all duration-500">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white">Bebas Khawatir</h3>
          </div>

          <div className="absolute inset-0 z-0">
            <img
              src={mcyEdit}
              alt="Mechanic"
              className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="relative z-10 mt-auto">
            <p className="text-white/80 text-sm leading-relaxed font-bold">
              Garansi uang kembali 7 hari dan garansi mesin & transmisi 1 tahun penuh.
            </p>
          </div>
        </div>

      </motion.div>
    </Container>
  );
};

export default WhyChooseUs;
