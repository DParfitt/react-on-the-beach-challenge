import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";
import { ReactComponent as MyLogo } from "./9.svg";

const One = () => {
  useRegisterComponent("Nine");

  const order = useGetComponentOrder("Nine");

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

export default One;
