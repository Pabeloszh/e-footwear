import React from 'react';
import { Navbar } from './components/Navbar/Navbar'
import { MainSlider }  from './components/MainSlider/MainSlider';
import { ProductsCarousel } from "./components/ProductsCarousel/ProductsCarousel"
import { SalesContainer } from "./components/SalesContainer/SalesContainer"
import { Newsletter } from "./components/Newsletter/Newsletter"

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <MainSlider/>
      <ProductsCarousel/>
      <SalesContainer/>
      <ProductsCarousel/>
      <Newsletter/>
    </div>
  );
}

export default App;
