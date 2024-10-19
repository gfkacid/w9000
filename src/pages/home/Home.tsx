import React from "react";

import { Card, Header, SearchInput } from "@/components";
import { NFT_LIST } from "@/constants";
import styles from "./styles.module.scss";

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.hero}>
        <h2>
          <span>Explore</span>
          <span>Collection</span>
        </h2>
        <h2>NFT</h2>
      </div>
      <div>
        <SearchInput className={styles.searchInput} />
      </div>
      {/* <MintingDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} /> */}
      <div className={styles.nftList}>
        {NFT_LIST.map((nftArgs, index) => (
          <Card
            key={index}
            {...nftArgs}
            onMint={() => {
              console.log({ mstatus: "onMint", nftArgs });
              setIsDialogOpen(true);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
