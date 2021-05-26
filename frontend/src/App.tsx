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
import { Register } from './components/Register';
import { Profile } from './routes/Profile';

const App: React.FC = () => {
  const [loginWindow, toggleLoginWindow] = useState<boolean>(false);
  const [registerWindow, toggleRegisterWindow] = useState<boolean>(false);

  return (
    <div className="App">
      <Router>
        <Navbar loginWindow={loginWindow} toggleLoginWindow={toggleLoginWindow} registerWindow={registerWindow} toggleRegisterWindow={toggleRegisterWindow}/>
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
              <Route path="/user/name">
                <Profile />
              </Route>
          </Switch>
        <Login loginWindow={loginWindow} toggleLoginWindow={toggleLoginWindow}/>
        <Register registerWindow={registerWindow} toggleRegisterWindow={toggleRegisterWindow}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
