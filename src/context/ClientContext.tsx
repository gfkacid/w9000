import React from "react";
import { Context, DEFAULT_CLIENT_CONTEXT } from "@/constants/defaultContext";

interface ClientContextType {
  context: Context;
  updateContext: React.Dispatch<React.SetStateAction<Context>>;
}

export const ClientContext = React.createContext<ClientContextType>({
  context: DEFAULT_CLIENT_CONTEXT,
  updateContext: () => undefined,
});

interface ClientProviderProps {
  children: React.ReactNode;
}

export const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  const [context, setContext] = React.useState(DEFAULT_CLIENT_CONTEXT);

  return (
    <ClientContext.Provider value={{ context, updateContext: setContext }}>
      {children}
    </ClientContext.Provider>
  );
};
