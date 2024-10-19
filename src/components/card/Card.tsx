import React from "react";
import styles from "./styles.module.scss";
import { IconArrowUpRight, IconHeart, IconUSDC, IconUSDCBlue } from "../icons";
import { formatPrice } from "@/lib/utils";

export interface CardProps {
  title: string;
  usdcPrice: number;
  owned: boolean;
  isFavorite?: boolean;
  imgUrl: string;
  colorTheme?: "light" | "dark";
}

export const Card: React.FC<CardProps> = ({
  title,
  usdcPrice,
  owned,
  isFavorite = false,
  imgUrl,
  colorTheme = "light",
}) => {
  const bgColor = colorTheme === "light" ? "#0f172a" : "#fff";
  const txtColor = colorTheme === "light" ? "#fff" : "#0f172a";

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span style={{ backgroundColor: bgColor, color: txtColor }}>
          <p>{title}</p>
        </span>
        <button style={{ backgroundColor: bgColor }}>
          <IconHeart strokeColor={txtColor} />
        </button>
      </div>
      <div className={styles.footer}>
        <div className={styles.priceContainer}>
          <IconUSDCBlue containerSize={38} iconSize={22} />
          <div className={styles.priceInfo}>
            <span>{formatPrice(usdcPrice)}</span>
            <span>Current price</span>
          </div>
        </div>
        <button className={styles.cta}>
          <span>Mint</span>
          <IconArrowUpRight />
        </button>
      </div>
      <img src={imgUrl} />
    </div>
  );
};
