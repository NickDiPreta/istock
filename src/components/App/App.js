import React, { useState } from "react";
import Home from "../Home/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Stocks from "../../components/Stocks/Stocks";
import About from "../App/About/About";
import Company from "../../Company/Company";

function App() {
  const [price, setPrice] = useState(null);
  const handleClick = (price) => {
    setPrice(price);
  };
  return (
    <div>
      <nav>
        <Link to="/istock/Home">
          <h1>Home</h1>
        </Link>
        <Link to="/istock/Stocks">
          <h2>Stocks</h2>
        </Link>
        <Link to="/istock/About">
          <h2>About</h2>
        </Link>
        <Link to="/istock/Company">
        </Link>
      </nav>
      <main>
        <Switch>
          <Route path="/istock/Stocks" handleClick={handleClick} component={Stocks} />
          <Route path="/istock/Home" exact component={Home} />
          <Route path="/istock/About" exact component={About} />
          <Route
            path="/istock/Company/:ticker"
            render={props => <Company {...props} />}
            />
        </Switch>
      </main>
    </div>
  );

}
export default App;
