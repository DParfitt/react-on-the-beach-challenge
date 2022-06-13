import "./App.css";
import { OrderContextProvider } from "./context/Order.context";

// SOLUTION:
// const One = React.lazy(() => import("./components/Pieces/1"));
// const Two = React.lazy(() => import("./components/Pieces/2"));
// const Three = React.lazy(() => import("./components/Pieces/3"));
// const Four = React.lazy(() => import("./components/Pieces/4"));
// const Five = React.lazy(() => import("./components/Pieces/5"));
// const Six = React.lazy(() => import("./components/Pieces/6"));
// const Seven = React.lazy(() => import("./components/Pieces/7"));
// const Eight = React.lazy(() => import("./components/Pieces/8"));
// const Nine = React.lazy(() => import("./components/Pieces/9"));
// const Ten = React.lazy(() => import("./components/Pieces/10"));
// const Eleven = React.lazy(() => import("./components/Pieces/11"));
// const Twelve = React.lazy(() => import("./components/Pieces/12"));
// const Thirteen = React.lazy(() => import("./components/Pieces/13"));
// const Fourteen = React.lazy(() => import("./components/Pieces/14"));
// const Fifteen = React.lazy(() => import("./components/Pieces/15"));
// const Sixteen = React.lazy(() => import("./components/Pieces/16"));

import One from "./components/Pieces/1";
import Two from "./components/Pieces/2";
import Three from "./components/Pieces/3";
import Four from "./components/Pieces/4";
import Five from "./components/Pieces/5";
import Six from "./components/Pieces/6";
import Seven from "./components/Pieces/7";
import Eight from "./components/Pieces/8";
import Nine from "./components/Pieces/9";
import Ten from "./components/Pieces/10";
import Eleven from "./components/Pieces/11";
import Twelve from "./components/Pieces/12";
import Thirteen from "./components/Pieces/13";
import Fourteen from "./components/Pieces/14";
import Fifteen from "./components/Pieces/15";
import Sixteen from "./components/Pieces/16";

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
          maxWidth: "800px",
          margin: "50px auto",
        }}
      >
        {components.map((Component, i) => (
          // <Suspense fallback="Loading..."> key={i}> // SOLUTION
          <Component key={i} />
          // </Suspense>
        ))}
      </div>
    </OrderContextProvider>
  );
}

export default App;
