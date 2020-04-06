import React from 'react';
import './global.css';
import { BrowserRouter, Route } from 'react-router-dom';

import MainApp from './Components/MainPage';
import GamesBuy from './Components/GamesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={MainApp}
      />
      <Route 
       path='/games'
       component={GamesBuy}
      />
    </BrowserRouter>
  );
}
