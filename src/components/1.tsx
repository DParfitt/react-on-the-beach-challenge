import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";
import { ReactComponent as MyLogo } from "./1.svg";

const One = () => {
  useRegisterComponent("One");

  const order = useGetComponentOrder("One");

  return (
    <div
      style={{
        zIndex: order,
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 255, 1)",
      }}
    >
      <h1>One</h1>
      <MyLogo />
    </div>
  );
};

export default One;
