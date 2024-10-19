import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import { wagmiConfig, evmNetworks } from "@/constants";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages";

const queryClient = new QueryClient();

const App = () => {
  return (
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
  );
};

export default App;
