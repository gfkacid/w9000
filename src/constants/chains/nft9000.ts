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
  //   blockExplorers: {
  //     default: {
  //       name: "Explorer",
  //       url: "https://subnets-test.avax.network/echo",
  //     },
  //   },
  iconUrl: "/assets/chains/logos/45770.png",
  //   icm_registry: "0xF86Cb19Ad8405AEFa7d09C778215D2Cb6eBfB228",
});
