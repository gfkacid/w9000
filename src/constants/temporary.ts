/* to remove everything in this file later */
export const TOTAL_BALANCE = 9420.69;
export const USDC_DECIMALS = 6;
export const TESTNET_USDC_ADDRESS =
  "0x5425890298aed601595a70AB815c96711a31Bc65";

export interface NftArgs {
  title: string;
  usdcPrice: number;
  owned: boolean;
  isFavorite?: boolean;
  imgUrl: string;
  colorTheme?: "light" | "dark";
}

export const NFT_LIST: NftArgs[] = [
  {
    title: "Landscapes of the third world",
    usdcPrice: 420,
    owned: false,
    imgUrl: new URL("/assets/nft-1.png", import.meta.url).href,
  },
  {
    title: "Avalanche 9000",
    usdcPrice: 9000,
    owned: false,
    imgUrl: new URL("/assets/nft-2.png", import.meta.url).href,
    colorTheme: "dark",
  },
];
