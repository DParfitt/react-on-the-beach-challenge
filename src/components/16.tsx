import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";
import { ReactComponent as MyLogo } from "./16.svg";

const One = () => {
  useRegisterComponent("Sixteen");

  const order = useGetComponentOrder("Sixteen");

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
