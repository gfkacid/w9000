import React from "react";

import { Card, Header, MintingDialog, SearchInput } from "@/components";
import styles from "./styles.module.scss";
import { ClientContext } from "@/context";

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [nftInProcess, setNftInProcess] = React.useState<number | null>(null);
  const { context, updateContext } = React.useContext(ClientContext);

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
      <div className={styles.nftList}>
        {context.nftList.map((nftArgs, index) => (
          <Card
            key={index}
            {...nftArgs}
            onMint={() => {
              setNftInProcess(nftArgs.id);
              setIsDialogOpen(true);
            }}
          />
        ))}
      </div>
      <MintingDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        onSuccess={() => {
          updateContext({
            ...context,
            nftList: context.nftList.map((nft) =>
              nft.id === nftInProcess ? { ...nft, owned: true } : nft
            ),
          });
        }}
      />
    </div>
  );
};

export default Home;
