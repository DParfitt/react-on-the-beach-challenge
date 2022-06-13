import { ReactNode, useId } from "react";
import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../../context/Order.context";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const id = useId();
  useRegisterComponent(id);

  const order = useGetComponentOrder(id);

  return (
    <div
      style={{
        order,
        width: "25%",
        maxWidth: "200px",
        height: "100%",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};
