import React from 'react';
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
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {/* <Route path="/login">
              </Route> */}
          </Switch>
        <Login />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
