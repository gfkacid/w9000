import { defineChain } from "viem";

export const nft9000 = defineChain({
  id: 45770,
  name: "NFT9000 L1",
  network: "nft9000",
  nativeCurrency: {
    decimals: 18,
    name: "Usdc",
    symbol: "USDC",
  },
  rpcUrls: {
    default: {
      http: ["https://subnets.avax.network/quickbronz/testnet/rpc"],
    },
  },
  iconUrl: "/assets/chains/logos/45770.png",
  icm_registry: "0xE329B5Ff445E4976821FdCa99D6897EC43891A6c",
});
