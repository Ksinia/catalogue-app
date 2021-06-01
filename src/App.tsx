import { Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./components/ProductPage";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" />
      <Switch>
        <Route path="/product/:productId" component={ProductPage} />
        <Route path="/" component={ProductsList} />
      </Switch>
    </div>
  );
}

export default App;
