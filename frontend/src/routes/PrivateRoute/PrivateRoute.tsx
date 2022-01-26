import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import { PrivateRouteInterfaces } from './PrivateRoute.interfaces';

export const PrivateRoute = (props: PrivateRouteInterfaces) => {
    const { component: Component, ...rest } = props;
    const authToken = useSelector((state :RootState) => state.auth);

    return (
        <Route {...rest} render={({ location }) => {
            return authToken
              ? <Component/>
              : <Redirect to={{
                  pathname: '/',
                  state: { from: location }
                }} />
          }}/>
    )
}