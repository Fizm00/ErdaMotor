import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../components/ui/SectionHeader';
import { getWhatsAppLink } from '../../utils/whatsapp';

interface ProductDetailsProps {
  activeProduct: any;
}

const ProductDetails = ({ activeProduct }: ProductDetailsProps) => {
  const whatsappLink = getWhatsAppLink(`Halo ErdaMotor, saya tertarik dengan info lebih lanjut mengenai ${activeProduct.name}.`);

  return (
    <div className="w-full lg:w-2/5 flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            label={activeProduct.tagline}
            title={activeProduct.name}
            className="mb-6"
          />

          <h3 className="text-4xl font-black text-gray-900 mb-8">{activeProduct.price}</h3>

          <p className="text-gray-600 leading-relaxed mb-10 text-lg">
            {activeProduct.description}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-8 mb-12 py-10 border-y border-gray-100">
            {activeProduct.specs.map((spec: { label: string; value: string }) => (
              <div key={spec.label} className="flex flex-col">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{spec.label}</span>
                <span className="text-gray-900 font-bold text-lg">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col gap-4 sticky bottom-0">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="w-full bg-[#d8f552] hover:bg-black hover:text-white text-gray-900 py-6 rounded-2xl font-black text-lg transition-all shadow-xl shadow-lime-100 active:scale-[0.98]">
            Pesan {activeProduct.name}
          </button>
        </a>
        <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          *Harga OTR JABODETABEK & Negotiable
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
