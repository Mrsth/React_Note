import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { AuthContext, AuthProvider } from "./Components/Context/authContext";
import { useContext } from "react";
import Routes from "./route";
import { SalesProvider } from "./Components/Context/Sales_context";

function App() {
  return (
    <AuthProvider>
      <SalesProvider>
        <Routes />
      </SalesProvider>
    </AuthProvider>
  );
}

export default App;
