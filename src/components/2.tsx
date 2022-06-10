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
        width: "33vw",
        height: "33vh",
      }}
    >
      <MyLogo width="100%" height="100%" />
    </div>
  );
};

export default Two;
