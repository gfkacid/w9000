import React from "react";
import styles from "./styles.module.scss";
import {
  IconArrowUpRight,
  IconCheckBadge,
  IconHeart,
  IconUSDCBlue,
} from "../icons";
import { cn, formatPrice } from "@/lib/utils";
import { NftArgs } from "@/constants";

export interface CardProps extends NftArgs {
  onMint: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  usdcPrice,
  owned,
  // isFavorite = false,
  imgUrl,
  colorTheme = "light",
  onMint,
}) => {
  let bgColor = colorTheme === "light" ? "#0f172a" : "#fff";
  let txtColor = colorTheme === "light" ? "#fff" : "#0f172a";

  if (owned) {
    bgColor = "#6366F180";
    txtColor = "#fff";
  }

  return (
    <div
      className={cn(styles.card, {
        [styles.cardOwned]: owned,
      })}
    >
      <div className={styles.header}>
        <span style={{ backgroundColor: bgColor, color: txtColor }}>
          <p>{title}</p>
        </span>
        <button style={{ backgroundColor: bgColor }}>
          <IconHeart strokeColor={txtColor} />
        </button>
      </div>
      {!owned ? (
        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <IconUSDCBlue containerSize={38} iconSize={22} />
            <div className={styles.priceInfo}>
              <span>{formatPrice(usdcPrice)}</span>
              <span>Current price</span>
            </div>
          </div>
          <button className={styles.cta} onClick={onMint}>
            <span>Mint</span>
            <IconArrowUpRight />
          </button>
        </div>
      ) : (
        <div className={styles.footerOwned}>
          <span>Owned</span>
          <IconCheckBadge />
        </div>
      )}
      <img src={imgUrl} alt="NFT art" />
    </div>
  );
};
