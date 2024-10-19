import React from "react";
import {
  DynamicWidget,
  useDynamicContext,
  useIsLoggedIn,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { isEmpty } from "lodash";

import { IconLogin, IconUSDCBlue } from "@/components/icons";
import {
  TESTNET_USDC_ADDRESS,
  TOTAL_BALANCE,
  USDC_ABI,
  USDC_DECIMALS,
} from "@/constants";
import styles from "./styles.module.scss";
import { cn, formatPrice } from "@/lib/utils";
import { formatUnits } from "viem";

const avatarUrl = new URL("/assets/avatar.png", import.meta.url).href;

export const Header = () => {
  const isLoggedIn = useIsLoggedIn();
  const { primaryWallet } = useDynamicContext();
  const accountBtnRef = React.useRef<HTMLButtonElement | null>(null);

  // Mask/customize DynamicWidget-Settings button when Logged-in
  React.useEffect(() => {
    if (!isEmpty(primaryWallet)) {
      const widget = document.querySelector("#dynamic-widget");
      const shadowRoot = widget?.shadowRoot;
      const btn: HTMLButtonElement | null =
        shadowRoot?.querySelector?.("button.account-control__container") ??
        null;
      accountBtnRef.current = btn;
    } else {
      accountBtnRef.current = null;
    }
  }, [primaryWallet]);

  const getUSDCBalanceUnified = async () => {
    const balanceFuji = await getUSDCBalanceFuji();
    const balanceL1 = await getUSDCBalanceL1();
    // return formatUnits((balanceFuji + balanceL1), USDC_DECIMALS);
  };

  const getUSDCBalanceFuji = async () => {
    if (!primaryWallet) return;

    const publicClient = await primaryWallet?.getPublicClient();
    console.log(publicClient);

    try {
      const balance = await publicClient.readContract({
        address: TESTNET_USDC_ADDRESS,
        abi: USDC_ABI,
        functionName: "balanceOf",
        args: [primaryWallet.address],
      });
      console.log(balance);
      return formatUnits(balance, USDC_DECIMALS);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const getUSDCBalanceL1 = async () => {
    // use `useTokens` hook to fetch native balance from L1
    
  }

  React.useEffect(() => {
    (async () => {
      try {
        const balance = await getUSDCBalanceFuji();
        console.log({ mstatus: "balance", balance, primaryWallet });
      } catch (err) {
        console.log("Error occured when fetching getUSDCBalanceFuji");
      }
    })();
  }, [primaryWallet]);

  return (
    <div className={styles.header}>
      <div className={styles.balanceContainer}>
        <IconUSDCBlue />
        <div className={styles.funds}>
          <p>{isLoggedIn ? formatPrice(TOTAL_BALANCE) : "—"}</p>
        </div>
      </div>
      <div className={styles.login}>
        <div className={cn(isLoggedIn && styles.widget)}>
          <DynamicWagmiConnector>
            <DynamicWidget
              variant="dropdown"
              innerButtonComponent={<IconLogin />}
            />
          </DynamicWagmiConnector>
        </div>
        {isLoggedIn && (
          <div className={styles.accountInfo}>
            <p>{primaryWallet?.address?.substring(0, 6)}...</p>
            <button onClick={() => accountBtnRef.current?.click()}>
              <img src={avatarUrl} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
