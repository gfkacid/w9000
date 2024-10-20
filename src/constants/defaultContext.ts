export interface NftArgs {
  id: number;
  title: string;
  usdcPrice: number;
  owned: boolean;
  isFavorite?: boolean;
  imgUrl: string;
  colorTheme?: "light" | "dark";
}

export const NFT_LIST: NftArgs[] = [
  {
    id: 0,
    title: "Landscapes of the third world",
    usdcPrice: 420,
    owned: false,
    imgUrl: new URL("/assets/nft-1.png", import.meta.url).href,
  },
  {
    id: 1,
    title: "Avalanche 9000",
    usdcPrice: 9000,
    owned: false,
    imgUrl: new URL("/assets/nft-2.png", import.meta.url).href,
    colorTheme: "dark",
  },
  {
    id: 2,
    title: "Landscapes of the third world",
    usdcPrice: 729.34,
    owned: false,
    imgUrl: new URL("/assets/nft-1.png", import.meta.url).href,
  },
];

export interface Context {
  nftList: NftArgs[];
}

export const DEFAULT_CLIENT_CONTEXT = {
  nftList: NFT_LIST,
};
