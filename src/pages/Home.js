import React from 'react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Productgrid8 from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Productgrid8 />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
