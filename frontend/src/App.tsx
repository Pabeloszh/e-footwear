import React from 'react';
import { Navbar } from './components/Navbar/Navbar'
import { MainSlider }  from './components/MainSlider/MainSlider';
import { ProductsCarousel } from "./components/ProductsCarousel/ProductsCarousel"

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <MainSlider/>
      <ProductsCarousel/>
    </div>
  );
}

export default App;
