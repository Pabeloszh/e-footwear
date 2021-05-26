import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar/';
import { Home } from './routes/Home/';
import { Shop } from "./routes/Shop"
import { Product } from './routes/Product';
import { Login } from './components/Login';
import { Footer } from './components/Footer/';
import { Cart } from './routes/Cart';

const App: React.FC = () => {
  const [authWindow, toggleAuthWindow] = useState<boolean>(false);

  return (
    <div className="App">
      <Router>
        <Navbar authWindow={authWindow} toggleAuthWindow={toggleAuthWindow}/>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/shop">
                <Shop/>
              </Route>
              <Route path="/man/name">
                <Product/>
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
          </Switch>
        <Login authWindow={authWindow} toggleAuthWindow={toggleAuthWindow}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
