import { ElementType, memo } from 'react';

import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { selectAuth } from 'app/containers/login/selectors';

type PrivateProps = Omit<RouteProps, 'component'> & {
  component: ElementType;
};

export const PrivateRoute = memo(({ component: Component, ...rest }: PrivateProps) => {
  const isAuth = useSelector(selectAuth);
  if (!Component) return null;
  const switchRoute = () => (isAuth ? <Component /> : <Redirect to="/login" />);
  return <Route {...rest} render={switchRoute} />;
});
