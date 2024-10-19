import { Card, Header, SearchInput } from "@/components";
import { NFT_LIST } from "@/constants";
import styles from "./styles.module.scss";

const Home = () => {
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
        {NFT_LIST.map((nft, index) => (
          <Card key={index} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default Home;
