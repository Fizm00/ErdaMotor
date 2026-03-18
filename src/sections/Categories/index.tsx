import { motion } from 'framer-motion';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import { categories } from '../../data';

const Categories = () => {
  return (
    <section id="categories" className="w-full bg-white overflow-hidden py-24">
      <Container className="contain-[paint]">
      {/* Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="will-change-transform mb-16"
      >
        <SectionHeader
          label="Kategori Produk"
          title="Apa yang Anda Cari Hari Ini?"
          description="Jelajahi pilihan terbaik kami mulai dari mobil & motor bekas bersertifikat, suku cadang baru bergaransi, hingga aksesoris premium untuk gaya berkendara Anda."
        />
      </motion.div>

      {/* Bento Box Grid */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] will-change-transform"
      >
        {categories.map((cat, index) => {
          if (cat.id === 'unit-bekas') {
            return (
              <a key={cat.id} href={`#${cat.id}`} className={`group relative rounded-3xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500 ${cat.span || ''}`}>
                <div className="absolute inset-0 z-0">
                  <img src={cat.image} alt="Koleksi unit kendaraan bekas berkualitas di ErdaMotor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 group-hover:bg-[#d8f552] transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-white/80 text-sm font-light max-w-sm">
                    {cat.description}
                  </p>
                </div>
              </a>
            );
          }

          if (index === 1) {
            return (
              <div key="secondary-cards" className="flex flex-col gap-6 lg:col-span-1">
                {categories.slice(1).map((subCat) => (
                  <a
                    key={subCat.id}
                    href={`#${subCat.id}`}
                    className="group relative rounded-3xl overflow-hidden flex-1 block shadow-sm hover:shadow-xl transition-all duration-500 min-h-[140px]"
                  >
                    <div className="absolute inset-0 z-0">
                      <img src={subCat.image} alt={`Kategori ${subCat.title} - ErdaMotor`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/60 transition-colors duration-500"></div>
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-between p-6">
                      <h3 className="text-2xl font-bold text-white leading-tight">{subCat.title}</h3>
                      <div className="flex justify-between items-end w-full">
                        <span className="text-white/70 text-xs max-w-[180px]">{subCat.subtitle || subCat.cta}</span>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#d8f552] group-hover:text-black group-hover:-rotate-45 transition-all duration-300">
                          &rarr;
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            );
          }
          return null;
        })}
      </motion.div>
      </Container>
    </section>
  );
};

export default Categories;
