import React from 'react';
import { Navbar } from './components/Navbar/Navbar'
import { MainSlider }  from './components/MainSlider/MainSlider';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <MainSlider/>
    </div>
  );
}

export default App;
