import * as React from "react";
import styles from "./card.module.css";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }: CardProps) => {
  return (
    <div className={styles.mainCard}>
      <img className={styles.cardImg} src="/froyo_pauvre.png" alt="" />
      <div className={styles.cardTitle}>{title ? title : ""}</div>
      <div className={styles.cardPrice}>
        <div>122 $USDC</div>
      </div>
    </div>
  );
};
Card.displayName = "Card";

export default Card;
