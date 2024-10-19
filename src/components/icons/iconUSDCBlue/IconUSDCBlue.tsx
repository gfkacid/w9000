import React from "react";
import { IconUSDC } from "../IconUSDC";
import styles from "./styles.module.scss";

interface IconUSDCBlueProps {
  containerSize?: number;
  iconSize?: number;
}

const DEFAULT_CONTAINER_SIZE = 48;
const DEFAULT_ICON_SIZE = 24;

export const IconUSDCBlue: React.FC<IconUSDCBlueProps> = ({
  containerSize = DEFAULT_CONTAINER_SIZE,
  iconSize = DEFAULT_ICON_SIZE,
}) => (
  <div
    className={styles.tokenContainer}
    style={{ width: containerSize, height: containerSize }}
  >
    <IconUSDC width={iconSize} height={iconSize} />
  </div>
);
