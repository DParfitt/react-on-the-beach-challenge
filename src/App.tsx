import React, { Suspense } from "react";

import "./App.css";
import { OrderContextProvider } from "./context/Order.context";

const One = React.lazy(() => import("./components/1"));
const Two = React.lazy(() => import("./components/2"));
const Three = React.lazy(() => import("./components/3"));

// import One from "./components/1";
// import Two from "./components/2";
// import Three from "./components/3";

function App() {
  return (
    <OrderContextProvider>
      <div
        style={{
          position: "relative",
          height: 500,
          width: 500,
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

        {/* <One />
        <Two />
        <Three /> */}
      </div>
    </OrderContextProvider>
  );
}

export default App;
