import { http } from "viem";
import { avalancheFuji } from "viem/chains";
import { createConfig } from "wagmi";

export const wagmiConfig = createConfig({
  chains: [avalancheFuji],
  multiInjectedProviderDiscovery: false,
  transports: {
    [avalancheFuji.id]: http(),
  },
});
