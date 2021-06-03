import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "./logo.svg";
import ProductPage from "./components/ProductPage";
import ProductsList from "./components/ProductsList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Link to={`/`}>
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <Switch>
        <Route path="/product/:productId" component={ProductPage} />
        <Route path="/" component={ProductsList} />
      </Switch>
    </div>
  );
}

export default App;
