/***  examples/src/index.js ***/
import React from "react";
import { render } from "react-dom";
import FontShowcase from "../../src";
const App = () => (
  <FontShowcase fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif" />
);
render(<App />, document.getElementById("root"));
