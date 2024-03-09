/* eslint-disable linebreak-style */

import Hero from '../components/Hero';
import Trendes from '../components/Trendes';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

function Home() {
  return (
    <>
      <Hero />
      <Trendes />
      <Categories />

      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
