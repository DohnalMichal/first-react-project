import React from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import "regenerator-runtime/runtime"; // This needs to be here for async await to work

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
