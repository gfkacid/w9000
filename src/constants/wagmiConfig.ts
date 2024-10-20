import { http } from "viem";
import { avalancheFuji } from "viem/chains";
import { createConfig } from "wagmi";
import { fuji, nft9000 } from "./chains";

export const wagmiConfig = createConfig({
  chains: [avalancheFuji, fuji, nft9000],
  multiInjectedProviderDiscovery: false,
  transports: {
    [avalancheFuji.id]: http(),
    [nft9000.id]: http(),
  },
});
