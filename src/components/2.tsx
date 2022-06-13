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
        order,
        width: "25%",
        maxWidth: "200px",
        height: "100%",
      }}
    >
      <MyLogo width="100%" height="100%" />
    </div>
  );
};

export default Two;
