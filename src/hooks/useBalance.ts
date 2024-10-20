import React from "react";
import { formatUnits } from "viem";
import { TESTNET_USDC_ADDRESS, USDC_ABI, USDC_DECIMALS } from "@/constants";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { isEmpty } from "lodash";
import { useTokens } from "@0xstt/builderkit";

import { nft9000 } from "@/constants/chains";

export const useBalance = () => {
  const { primaryWallet } = useDynamicContext();
  const [fujiBalance, setFujiBalance] = React.useState<number>(0);
  const [nft9000Balance, setNft9000Balance] = React.useState<number>(0);
  const { getBalance } = useTokens();

  const getUSDCBalance = async () => {
    if (isEmpty(primaryWallet)) return [0, 0];

    const publicClient = await primaryWallet?.getPublicClient();

    try {
      const balanceFuji = await publicClient.readContract({
        address: TESTNET_USDC_ADDRESS,
        abi: USDC_ABI,
        functionName: "balanceOf",
        args: [primaryWallet.address],
      });
      const balanceL1 = await getBalance(
        nft9000.id,
        "native",
        primaryWallet.address
      );
      return [
        formatUnits(balanceFuji, USDC_DECIMALS),
        formatUnits(balanceL1, 18),
      ];
    } catch (error) {
      console.error("Error fetching balance:", error);
      return [0, 0];
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        const [balanceFuji, balanceL1] = await getUSDCBalance();
        setFujiBalance(Number(balanceFuji));
        setNft9000Balance(Number(balanceL1));
      } catch (err) {
        console.error("Error on getUSDCBalance()", err);
      }
    })();
    // eslint-disable-next-line
  }, [primaryWallet]);

  return {
    fujiBalance,
    nft9000Balance,
    totalBalance: fujiBalance + nft9000Balance,
  };
};
