import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sales from './Components/Sales';
import Purchase from './Components/Purchase';
import NavBar from './Components/NavBar';
import BalanceSheet from './Components/BalanceSheet';

import Set_state from './Components/Set_state';
import Data_fetch_file from './Components/Data_fetch_file';

import New_sale_purchase from './Component/New_sale_purchase';



ReactDOM.render(
  <div>
    <BrowserRouter>
      <NavBar />
        <Switch>

          <Route path="/new_sales_purchase" component={New_sale_purchase}/>


          <Route path="/use" component={Set_state}/>
          <Route path="/dff" component={Data_fetch_file}/>
          <Route path="/Sales" component={Sales} />
          <Route path="/Purchase" component={Purchase} />
          <Route path="/bs" component={() => <BalanceSheet text="apple" />} />
          {/* <Route path="/bs" component={BalanceSheet}/> */}
        </Switch>   
    </BrowserRouter>
  </div> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
