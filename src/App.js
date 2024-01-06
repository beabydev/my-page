import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./router/home/home";
import Login from './router/login/Login';
import Not from "./router/404/404";
import Register from "./router/register/Register";
import './app.scss';
import Product from './router/product/product';
import Game from './router/game/game';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/game"><Game /></Route>
          <Route path="/product"><Product /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="*"><Not /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
