import {
  useGetComponentOrder,
  useRegisterComponent,
} from "../context/Order.context";

const Three = () => {
  useRegisterComponent("Three");

  const order = useGetComponentOrder("Three");

  return (
    <div
      style={{
        zIndex: order,
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(255, 0, 0, 1)",
      }}
    >
      <h1>Three</h1>
    </div>
  );
};

export default Three;
