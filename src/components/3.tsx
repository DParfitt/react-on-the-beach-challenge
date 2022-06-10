import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";
import { ReactComponent as MyLogo } from "./3.svg";

const Three = () => {
  useRegisterComponent("Three");

  const order = useGetComponentOrder("Three");

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

export default Three;
