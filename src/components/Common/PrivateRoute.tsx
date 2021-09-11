import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export const PrivateRoute = (props: RouteProps) => {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  return <>{!isLoggedIn ? <Redirect to="/login" /> : <Route {...props} />}</>;
};
