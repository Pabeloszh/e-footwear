import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar/';
import { Home } from './components/Home/';
import { Login } from './components/Login';
import { Footer } from './components/Footer/';

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
              {/* <Route path="/login">
              </Route> */}
          </Switch>
        <Login authWindow={authWindow} toggleAuthWindow={toggleAuthWindow}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
