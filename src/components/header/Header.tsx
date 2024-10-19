import React from "react";
import {
  DynamicWidget,
  useDynamicContext,
  useIsLoggedIn,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { isEmpty } from "lodash";
import clsx from "clsx";

import { IconLogin, IconUSDC } from "@/components/icons";
import { TOTAL_BALANCE } from "@/constants";
import styles from "./styles.module.scss";

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

  return (
    <div className={styles.header}>
      <div className={styles.balanceContainer}>
        <div className={styles.tokenContainer}>
          <IconUSDC />
        </div>
        <div className={styles.funds}>
          <p>{isLoggedIn ? TOTAL_BALANCE : "—"}</p>
        </div>
      </div>
      <div className={styles.login}>
        <div className={clsx(isLoggedIn && styles.widget)}>
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
