import { motion, AnimatePresence } from 'framer-motion';
import { featuredProducts } from '../../data/featuredProductData';

interface ProductDisplayProps {
  activeIdx: number;
  setActiveIdx: (idx: number) => void;
}

const ProductDisplay = ({ activeIdx, setActiveIdx }: ProductDisplayProps) => {
  const activeProduct = featuredProducts[activeIdx];

  return (
    <div className="w-full lg:w-3/5">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-4/3 rounded-4xl overflow-hidden bg-gray-50 border border-gray-100 group"
        >
          <img
            src={activeProduct.image}
            alt={`${activeProduct.name} - ErdaMotor`}
            className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-8 left-8">
            <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm text-xs font-bold uppercase tracking-widest text-gray-900">
              {activeProduct.year} MODEL
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Product Selector Tabs */}
      <div className="flex gap-4 mt-8">
        {featuredProducts.map((product, idx) => (
          <button
            key={product.id}
            onClick={() => setActiveIdx(idx)}
            className={`flex-1 group relative aspect-video rounded-2xl overflow-hidden border-2 transition-all duration-300 ${activeIdx === idx ? 'border-gray-900 ring-4 ring-gray-100' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-white text-[10px] font-bold uppercase tracking-widest">{product.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
