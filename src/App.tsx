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

// import One from "./components/1";
// import Two from "./components/2";
// import Three from "./components/3";

function App() {
  return (
    <OrderContextProvider>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Suspense fallback="LOADING ONE...">
          <One />
        </Suspense>
        <Suspense fallback="LOADING TWO...">
          <Two />
        </Suspense>
        <Suspense fallback="LOADING THREE...">
          <Three />
        </Suspense>
        <Suspense fallback="LOADING Four...">
          <Four />
        </Suspense>
        <Suspense fallback="LOADING Five...">
          <Five />
        </Suspense>
        <Suspense fallback="LOADING Six...">
          <Six />
        </Suspense>
        <Suspense fallback="LOADING Seven...">
          <Seven />
        </Suspense>
        <Suspense fallback="LOADING Eight...">
          <Eight />
        </Suspense>
        <Suspense fallback="LOADING Nine...">
          <Nine />
        </Suspense>

        {/* <One />
        <Two />
        <Three /> */}
      </div>
    </OrderContextProvider>
  );
}

export default App;
