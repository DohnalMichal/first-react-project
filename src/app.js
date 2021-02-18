import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import "regenerator-runtime/runtime";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
