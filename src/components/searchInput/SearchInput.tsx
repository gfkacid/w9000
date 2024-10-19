import React from "react";

import { Input as ShadcnInput } from "@/components/ui/input";
import { IconSearch } from "@/components/icons";
import { cn } from "@/lib/utils";
import styles from "./styles.module.scss";

interface InputProps {
  className?: string;
}

export const SearchInput: React.FC<InputProps> = ({ className }) => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={cn(styles.searchBar, className)}>
        <IconSearch />
        <ShadcnInput
          type="text"
          className={styles.searchInput}
          placeholder="Search NFT or artist name..."
        />
      </div>
    </div>
  );
};
