import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";
import Collections from "../../components/Collections/Collections";
import Marquee from "../../components/Marquee/Marquee";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import BrandStory from "../../components/BrandStory/BrandStory";
import Testimonials from "../../components/Testimonials/Testimonials";
import Gallery from "../../components/Gallery/Gallery";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import ScrollProgress from "../../components/ScrollProgress/ScrollProgress";
import Cursor from "../../components/Cursor/Cursor";
import useLenis from "../../hooks/useLenis";

function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

useEffect(() => {

  const timer = setTimeout(() => {

    setLoading(false);

  }, 3000);

  return () => clearTimeout(timer);

}, []);
  return (
    <>
      {loading && <Loader />}

        <Cursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Collections />
      <FeaturedProducts />
      <BrandStory />
      <Testimonials />
      <Gallery />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;