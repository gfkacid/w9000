/* to remove everything in this file later */
import { CardProps } from "@/components";

export const TOTAL_BALANCE = 9420.69;

export const NFT_LIST: CardProps[] = [
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
