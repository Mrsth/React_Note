import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Sales from './Components/Sales';
import Purchase from './Components/Purchase';
import NavBar from './Components/NavBar';
import BalanceSheet from './Components/BalanceSheet';

ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route path="/Sales" component={Sales}/>
        <Route path="/Purchase" component={Purchase}/>
        <Route path="/bs" component={BalanceSheet}/>
      </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
