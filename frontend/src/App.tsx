import React from 'react';
import { Navbar } from './components/Navbar/Navbar'
import { MainSlider }  from './components/MainSlider/MainSlider';
import { ProductsCarousel } from "./components/ProductsCarousel/ProductsCarousel"
import { SalesContainer } from "./components/SalesContainer/SalesContainer"

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <MainSlider/>
      <ProductsCarousel/>
      <SalesContainer/>
    </div>
  );
}

export default App;
