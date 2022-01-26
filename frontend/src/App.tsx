import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';
import { Alert } from './components/Alert';
import { PrivateRoute } from './routes/PrivateRoute/PrivateRoute';
import { OrderDetail } from './routes/OrderDetail';

const App: React.FC = () => {
  const authToken = useSelector((state :RootState) => state.auth);

  const dispatch = useDispatch();
  const { setFavorites } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    authToken && setFavorites(authToken)
  }, [authToken])

  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/shop/:type">
                <Shop/>
              </Route>
              <Route path="/product/:id">
                <Product/>
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/order-detail/:id?">
                <OrderDetail/>
              </Route>
              <PrivateRoute to='/user' component={Profile} />
          </Switch>
        <Login/>
        <Register/>
        <Alert/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
