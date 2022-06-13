import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";
import { ReactComponent as MyLogo } from "./7.svg";

const One = () => {
  useRegisterComponent("Seven");

  const order = useGetComponentOrder("Seven");

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
