import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";
import { ReactComponent as MyLogo } from "./6.svg";

const One = () => {
  useRegisterComponent("Six");

  const order = useGetComponentOrder("Six");

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
