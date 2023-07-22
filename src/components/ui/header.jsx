import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

import { cn } from "../../lib/utils";

const Header = React.forwardRef(({ className, title, ...props }, ref) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignInClick = () => {
    setIsSignedIn((prevState) => !prevState);
  };

  return (
    <div className={styles.mainHeader}>
      <Link href="/">
        <div className={styles.logoHeader}>One Chance</div>
      </Link>
      <div className={styles.searchAndAddHeader}>
        <div className={styles.searchDivHeader}>
          <Link href="/search">
            <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.8167 28L17.6792 19.6C17.0333 20.1333 16.2906 20.5556 15.451 20.8667C14.6115 21.1778 13.7181 21.3333 12.7708 21.3333C10.4243 21.3333 8.43858 20.4942 6.81367 18.816C5.18875 17.1378 4.37586 15.088 4.375 12.6667C4.375 10.2444 5.18789 8.19467 6.81367 6.51733C8.43944 4.84 10.4252 4.00089 12.7708 4C15.1174 4 17.1031 4.83911 18.728 6.51733C20.3529 8.19556 21.1658 10.2453 21.1667 12.6667C21.1667 13.6444 21.016 14.5667 20.7146 15.4333C20.4132 16.3 20.0042 17.0667 19.4875 17.7333L27.625 26.1333L25.8167 28ZM12.7708 18.6667C14.3854 18.6667 15.758 18.0831 16.8887 16.916C18.0193 15.7489 18.5842 14.3324 18.5833 12.6667C18.5833 11 18.018 9.58311 16.8874 8.416C15.7567 7.24889 14.3846 6.66578 12.7708 6.66667C11.1562 6.66667 9.78364 7.25022 8.653 8.41733C7.52236 9.58444 6.95747 11.0009 6.95833 12.6667C6.95833 14.3333 7.52365 15.7502 8.65429 16.9173C9.78493 18.0844 11.1571 18.6676 12.7708 18.6667Z"
                  fill="black"
                  fill-opacity="0.5"
                />
              </svg>
            </div>
          </Link>
          <input type="text" />
        </div>
        <Link href="/sell">
          <div className={styles.addBtnHeader}>+</div>
        </Link>
      </div>
      <div className={styles.connectHeader} onClick={handleSignInClick}>
        {isSignedIn && (
          <div className={styles.avatarNouns}>
            <img src="/nouns.png" alt="" />
          </div>
        )}
        {isSignedIn ? "David" : "Sign in"}
      </div>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
