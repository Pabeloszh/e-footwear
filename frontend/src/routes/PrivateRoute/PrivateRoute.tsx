import { PrivateRouteInterfaces } from './PrivateRoute.interfaces';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';

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