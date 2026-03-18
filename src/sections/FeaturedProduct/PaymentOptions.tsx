import { motion, AnimatePresence } from 'framer-motion';

interface PaymentOptionsProps {
  activeProduct: any;
}

const PaymentOptions = ({ activeProduct }: PaymentOptionsProps) => {
  return (
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

        {/* Credit Option */}
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
  );
};

export default PaymentOptions;
