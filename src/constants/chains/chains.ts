import { fuji } from "./fuji";
import { nft9000 } from "./nft9000";

export const CHAINS = [fuji, nft9000];

export const FUJI_USDC_ADDRESS = "0x1022669eB793f5E394bb805B36BA56Af113a1883";

export const TOKENS = [
  {
    chain_id: nft9000.id,
    address: "native",
    name: "Usdc",
    symbol: "USDC",
    decimals: 18,
  },
  {
    chain_id: fuji.id,
    address: FUJI_USDC_ADDRESS, // to check if it's correct or not
    name: "Usdc",
    symbol: "USDC",
    decimals: 18,
  },
];
