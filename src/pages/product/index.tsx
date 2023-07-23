/* eslint-disable */
import { useSession } from "next-auth/react";
import styles from "../search/Search.module.css";
import Image from "next/image";
import Header from "~/components/ui/header";

export default function Product() {
  const session = useSession().data;
  return (
    <div className={styles.containerProduct}>
      <Header />
      <div className={styles.mainProduct}>
        <div className={styles.leftProduct}>
          <Image
            height={400}
            width={300}
            className={styles.imgProduct}
            src="/froyo_pauvre.png"
            alt=""
          />
          <div className={styles.titleProduct}>Bicycle</div>
          <div className={styles.descProduct}>
            Seize the city streets with this sleek Bicycle Mad Urbain 2 in a
            classic white finish, available for just €1200.
            <br />
            <br /> This top-performance urban bike combines style, comfort, and
            durability, making it ideal for commuting or leisure rides. With its
            lightweight frame, broad gear range, and responsive brakes, it
            ensures a dynamic ride in any terrain. <br />
            <br />
            Well-maintained and in excellent condition, this bike is ready to
            provide you with endless cycling adventures. Don&apos;t miss out on
            this fantastic deal! Contact me today for more details or to arrange
            a viewing. Hurry, this won&apos;t last long!
          </div>
        </div>
        <div className={styles.rightProduct}>
          <div className={styles.topRightProduct}>
            <div>Seller</div>
            <div className={styles.sellerInfo}>
              {session?.user.email ?? session?.user.name ?? "David.eth"}
            </div>
            <div className={styles.contactBtn}>Send a message</div>
          </div>
          <div className={styles.boxPay}>
            <div className={styles.balance}>balance: 1521 $USDC</div>
            <div className={styles.valueToPay}>1200 $USDC</div>
            <div className={styles.buyBtn}>Buy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
