import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";
import { ReactComponent as MyLogo } from "./2.svg";

const Two = () => {
  useRegisterComponent("Two");

  const order = useGetComponentOrder("Two");

  return (
    <div
      style={{
        zIndex: order,
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 255, 0, 1)",
      }}
    >
      <h1>Two</h1>
      <MyLogo />
    </div>
  );
};

export default Two;
