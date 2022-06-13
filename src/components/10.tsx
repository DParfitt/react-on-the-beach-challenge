import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";
import { ReactComponent as MyLogo } from "./10.svg";

const One = () => {
  useRegisterComponent("Ten");

  const order = useGetComponentOrder("Ten");

  return (
    <div
      style={{
        order,
        width: "25vw",
        height: "25vh",
      }}
    >
      <MyLogo width="100%" height="100%" />
    </div>
  );
};

export default One;
