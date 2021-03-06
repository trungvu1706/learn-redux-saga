import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import cityApi from './api/cityApi';
import { NotFound, PrivateRoute } from './components/Common';
import { AdminLayout } from './components/Layout';
import LoginPage from './features/auth/pages/LoginPage';

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => console.log('res', res));
  }, []);

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>

      <PrivateRoute path="/admin">
        <AdminLayout />
      </PrivateRoute>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
