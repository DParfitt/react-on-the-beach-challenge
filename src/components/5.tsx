import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";
import { ReactComponent as MyLogo } from "./5.svg";

const One = () => {
  useRegisterComponent("Five");

  const order = useGetComponentOrder("Five");

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

export default One;
