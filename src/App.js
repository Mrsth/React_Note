import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/home";
import Sales from "./Components/Sales";
import Purchase from "./Components/Purchase";
import NavBar from "./Components/NavBar";
import BalanceSheet from "./Components/BalanceSheet";
import New_balance from './Component/New_balance';
import Antfooter from "./Components/antfooter";

import Set_state from "./Components/Set_state";

import New_sale_purchase from "./Component/New_sale_purchase";

import FormSizeDemo from "./Components/antform";
import AntNav from "./Components/antnav";
import AntSales from "./Components/antSales";
import AntPurchase from "./Components/antPurchase";

function App() {
  return (
    <BrowserRouter>
      <AntNav />
    
        <Route path="/new_sales_purchase" component={New_sale_purchase} />

        <Route path="/use" component={Set_state} />
        <Route path="/dff" exact component={New_balance} />
        <Route path="/Sales" component={Sales} />
        <Route path="/Purchase" component={Purchase} />
        <Route path="/Demo" component={FormSizeDemo} />

        <Route path="/antsales" component={AntSales} />
        <Route path="/antpurchase" component={AntPurchase} />
        <Route path="/" exact component={Home} />

      
    
      <Antfooter />
    </BrowserRouter>
  );
}

export default App;
