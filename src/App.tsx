import React, { Suspense } from "react";

import "./App.css";
import { OrderContextProvider } from "./context/Order.context";

const One = React.lazy(() => import("./components/1"));
const Two = React.lazy(() => import("./components/2"));
const Three = React.lazy(() => import("./components/3"));
const Four = React.lazy(() => import("./components/4"));
const Five = React.lazy(() => import("./components/5"));
const Six = React.lazy(() => import("./components/6"));
const Seven = React.lazy(() => import("./components/7"));
const Eight = React.lazy(() => import("./components/8"));
const Nine = React.lazy(() => import("./components/9"));
const Ten = React.lazy(() => import("./components/10"));
const Eleven = React.lazy(() => import("./components/11"));
const Twelve = React.lazy(() => import("./components/12"));
const Thirteen = React.lazy(() => import("./components/13"));
const Fourteen = React.lazy(() => import("./components/14"));
const Fifteen = React.lazy(() => import("./components/15"));
const Sixteen = React.lazy(() => import("./components/16"));

const components = [
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  Fifteen,
  Sixteen,
];

function App() {
  return (
    <OrderContextProvider>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100vw",
        }}
      >
        {components.map((Component, i) => (
          <Suspense key={i} fallback="Loading...">
            <Component />
          </Suspense>
        ))}
      </div>
    </OrderContextProvider>
  );
}

export default App;
