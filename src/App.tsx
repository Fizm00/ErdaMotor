import { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './sections/Hero'
import About from './sections/About'
import WhyChooseUs from './sections/WhyChooseUs'
import Testimonials from './sections/Testimonials'
import Categories from './sections/Categories'
import FeaturedProduct from './sections/FeaturedProduct'
import Gallery from './sections/Gallery'
import Location from './sections/Location'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative w-full overflow-hidden bg-white">
      <Hero />
      <About />
      <Categories />
      <FeaturedProduct />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Location />
      <Footer />
    </main>
  )
}

export default App
