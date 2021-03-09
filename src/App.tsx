import React from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import { Provider } from "react-redux";
import Details from "./Details";
import store from "./store";
import "regenerator-runtime/runtime"; // This needs to be here for async await to work

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
