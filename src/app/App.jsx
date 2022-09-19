import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import ProductGrid1 from './components/ProductGrid1';
import UserCart from './components/UserCart';

const App = () => {
  // Block, Element, Modifier methodology (commonly referred to as BEM)
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      {/* Home */}
      <Hero />
      <ProductCategories />
      <ProductGrid1 />
      {/* <ProductGrid2 /> */}
      <UserCart />
      <Footer />
    </div>
  );
};

export default App;
