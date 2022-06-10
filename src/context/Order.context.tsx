import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type OrderContextProps = {
  registeredComponents: string[];
  registerComponent: (key: string) => void;
};

export const OrderContext = createContext<OrderContextProps>({
  registeredComponents: [],
  registerComponent: () => {},
});

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
  const [registeredComponents, setRegisteredComponents] = useState<string[]>(
    []
  );

  const registerComponent = useCallback((key: string) => {
    setRegisteredComponents((currentlyRegisteredComponents) => {
      if (!currentlyRegisteredComponents.includes(key)) {
        return [...currentlyRegisteredComponents, key];
      }

      return currentlyRegisteredComponents;
    });
  }, []);

  return (
    <OrderContext.Provider
      value={{
        registeredComponents,
        registerComponent,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useRegisterComponent = (key: string) => {
  const { registerComponent } = useContext(OrderContext);

  useEffect(() => {
    registerComponent(key);
  }, [key, registerComponent]);
};

export const useGetComponentOrder = (key: string) => {
  const { registeredComponents } = useContext(OrderContext);

  return registeredComponents.indexOf(key);
};
