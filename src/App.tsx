import { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Categories from './components/Categories'
import FeaturedProduct from './components/FeaturedProduct'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Footer from './components/Footer'

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
