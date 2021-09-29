import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dashboard, SignIn } from '../pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
};
