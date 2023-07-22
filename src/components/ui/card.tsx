import * as React from "react";
import styles2 from "./Card.module.css";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }: CardProps) => {
  return (
    <div className={styles2.mainCard}>
      <img className={styles2.cardImg} src="/froyo_pauvre.png" alt="" />
      <div className={styles2.cardTitle}>{title ? title : ""}</div>
      <div className={styles2.cardPrice}>
        <div>122 $USDC</div>
      </div>
    </div>
  );
};
Card.displayName = "Card";

export default Card;
