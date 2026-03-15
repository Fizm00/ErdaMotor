import { motion } from 'framer-motion';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import { galleryItems } from '../data';

const Gallery = () => {

  return (
    <Container id="gallery" className="py-24">
      {/* Header */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin:"-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <SectionHeader
          label="Galeri Kami"
          title={<>Jelajahi Dunia<br />ErdaMotor</>}
          align="center"
          description="Dari ruang pamer mewah hingga detail mekanikal terkecil, temukan alasan mengapa kami adalah pilihan utama para pecinta roda dua."
        />
      </motion.div>

      {/* Bento Grid */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin:"-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]"
      >
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-3xl bg-[#1a1a1a] shadow-sm hover:shadow-xl transition-all duration-500 block ${item.gridClass}`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 ${item.imageProps}`}
            />

            {/* Permanent soft dark overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Discover Plus Icon (Top Right) */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>

            {/* Text Content Area */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </motion.div>


    </Container>
  );
};

export default Gallery;
