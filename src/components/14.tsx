import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";
import { ReactComponent as MyLogo } from "./14.svg";

const One = () => {
  useRegisterComponent("Fourteen");

  const order = useGetComponentOrder("Fourteen");

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
