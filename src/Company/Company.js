import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Dow from "../dow";

const Company = (props) => {
  const [details, setDetails] = useState({});
  let realTicker = props.ticker;
  if (props.match) {
    realTicker = props.match.params.ticker;
  }
  function searchTicker(nameKey, Dow) {
    for (var i = 0; i < Dow.length; i++) {
      if (Dow[i].ticker === realTicker) {
        return Dow[i];
      }
    }
  }
  let realCompany = searchTicker(realTicker,Dow)
  console.log(realCompany.company)
  useEffect(() => {
    let specific = `https://finnhub.io/api/v1/quote?symbol=${realTicker}&token=brp8s3vrh5rdpcujjpug`;
    const makeApiCall = async () => {
      const res = await fetch(specific);
      const json = await res.json();
      setDetails(json);
    };
    makeApiCall();
  }, []);

  return (
    <h1>
      {realTicker} : {realCompany.company} current price is ${details.c}
    </h1>
  );
};

export default Company;
