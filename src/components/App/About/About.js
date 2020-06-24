import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const About = (props) => {
  return (
    <>
      <h1>ABOUT THIS APP</h1>
      <p>
        This app pulls stock price data via api call to finnhub.com. It shows
        the prices of the DOW 30 companies.{" "}
      </p>
    </>
  );
};

export default About;
