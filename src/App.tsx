import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  createConfig,
  WagmiProvider,
} from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { avalancheFuji } from 'viem/chains';

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const config = createConfig({
  chains: [avalancheFuji],
  multiInjectedProviderDiscovery: false,
  transports: {
    [avalancheFuji.id]: http(),
  },
});

const evmNetworks = [
  {
    blockExplorerUrls: ["https://testnet.snowtrace.io/"],
    chainId: 43113,
    chainName: "Avalanche Fuji",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/avax.svg"],
    name: "Avalanche Fuji",
    nativeCurrency: {
      decimals: 18,
      name: "Avax",
      symbol: "AVAX",
    },
    networkId: 43113,
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    vanityName: "Avalanche Fuji",
  },
];
  
const queryClient = new QueryClient();
  
export default function App() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.VITE_DYNAMIC_ENVIRONMENT_ID,
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
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <DynamicWidget />
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider> 
    </DynamicContextProvider>
  );
};