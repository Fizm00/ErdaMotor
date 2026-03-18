import { useState } from 'react';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import { featuredProducts } from '../../data/featuredProductData';
import ProductDisplay from './ProductDisplay';
import ProductDetails from './ProductDetails';
import PaymentOptions from './PaymentOptions';

const FeaturedProduct = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProduct = featuredProducts[activeIdx];

  return (
    <section id="featured-product" className="w-full bg-white py-24 overflow-hidden">
      <Container>
      <div className="mb-16">
        <SectionHeader
          label="Top Selection"
          title="Produk Unggulan"
          align="center"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <ProductDisplay activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
        <ProductDetails activeProduct={activeProduct} />
      </div>
      <PaymentOptions activeProduct={activeProduct} />
      </Container>
    </section>
  );
};

export default FeaturedProduct;
