import React, { useState, useEffect } from "react";
import Dow from "../../dow";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Company from "../../Company/Company";

const Stocks = (props) => {
  
  let all = Dow.map((company) => {
    return (
     
      <Link to={"/istock/Company/" + company.ticker}>
        <Company handleClick={props.handleClick} ticker={company.ticker} company={company.company} />
      </Link>
      
    );
  });
  return (<div className="comp-link">{all}</div>);
};

export default Stocks;
