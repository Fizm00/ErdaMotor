import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import { featuredProducts } from '../data/featuredProductData';

const FeaturedProduct = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProduct = featuredProducts[activeIdx];

  return (
    <Container id="featured-product" className="py-24">
      <div className="mb-16">
        <SectionHeader
          label="Top Selection"
          title="Produk Unggulan"
          align="center"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left: Product Selection & Main Display */}
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
            {featuredProducts.map((product: any, idx: number) => (
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

        {/* Right: Product Details */}
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
            <button className="w-full bg-[#d8f552] hover:bg-black hover:text-white text-gray-900 py-6 rounded-2xl font-black text-lg transition-all shadow-xl shadow-lime-100 active:scale-[0.98]">
              Pesan {activeProduct.name}
            </button>
            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              *Harga OTR JABODETABEK & Negotiable
            </p>
          </div>
        </div>
      </div>

      {/* Payment Options Section */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeProduct.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Cash Option */}
          <div className="bg-[#f8f8fb] rounded-4xl p-10 md:p-14 border border-gray-200 group hover:bg-white hover:shadow-xl transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            </div>
            <h4 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">{activeProduct.paymentOptions.cash.title}</h4>
            <p className="text-gray-500 mb-8 leading-relaxed font-medium">
              Dapatkan potongan langsung untuk pembelian melalui transfer bank atau tunai di tempat.
            </p>
            <div className="text-4xl font-black text-gray-900 mb-8">{activeProduct.paymentOptions.cash.price}</div>
            <ul className="flex flex-col gap-4">
              {activeProduct.paymentOptions.cash.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-800">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-[10px]">✓</div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-4xl p-10 md:p-14 border border-gray-800 group hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#d8f552] group-hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">{activeProduct.paymentOptions.credit.title}</h4>
            <p className="text-white/40 mb-8 leading-relaxed font-medium">
              Cicilan ringan dan fleksibel dengan dukungan lising terpercaya di kelasnya.
            </p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-black text-white">{activeProduct.paymentOptions.credit.price}</span>
              <span className="text-[#d8f552] text-sm font-black uppercase tracking-widest">{activeProduct.paymentOptions.credit.period}</span>
            </div>
            <ul className="flex flex-col gap-4">
              {activeProduct.paymentOptions.credit.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-center gap-4 text-sm font-bold text-white/70">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#d8f552] text-[10px]">✓</div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default FeaturedProduct;
