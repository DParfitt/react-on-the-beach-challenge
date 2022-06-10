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
        width: "33vw",
        height: "33vh",
      }}
    >
      <MyLogo width="100%" height="100%" />
    </div>
  );
};

export default One;
