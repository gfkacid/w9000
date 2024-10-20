import { Route, Routes } from "react-router-dom";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { wagmiConfig, evmNetworks } from "@/constants";
import { ClientProvider } from "@/context";
import { Home } from "@/pages";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ClientProvider>
      <DynamicContextProvider
        settings={{
          environmentId: import.meta.env.VITE_DYNAMIC_ENVIRONMENT_ID ?? "",
          overrides: { evmNetworks },
          walletConnectors: [EthereumWalletConnectors],
          recommendedWallets: [
            { walletKey: "core" },
            { walletKey: "metamask" },
            { walletKey: "coinbase" },
            { walletKey: "walletconnect" },
          ],
        }}
      >
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </QueryClientProvider>
        </WagmiProvider>
      </DynamicContextProvider>
    </ClientProvider>
  );
};

export default App;
