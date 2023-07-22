import * as React from "react";
import styles from "./Card.module.css";

import { cn } from "../../lib/utils";

const Card = React.forwardRef(({ className, title, ...props }, ref) => {
  return (
    <div className={styles.mainCard}>
      <img className={styles.cardImg} src="/froyo_pauvre.png" alt="" />
      <div className={styles.cardTitle}>{title ? title : ""}</div>
      <div className={styles.cardPrice}>
        <div>122 $USDC</div>
      </div>
    </div>
  );
});
Card.displayName = "Card";

export default Card;
