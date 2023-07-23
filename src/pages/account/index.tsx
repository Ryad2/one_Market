/* eslint-disable */
import Link from "next/link";

import Header from "../../components/ui/header";
import Card from "../../components/ui/card";

import styles from "./Account.module.css";
import { useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";

export default function Account() {
  const session = useSession().data;

  return (
    <div className={styles.containerAccount}>
      <Header />
      <div className={styles.mainAccount}>
        <div className={styles.leftAccount}>
          <div className={styles.divImgAccount}>
            <div>
              <img src="/nouns.png" alt="" className={styles.imgAccount} />
            </div>
            <div className={styles.nameAccount}>
              {session?.user.email ?? session?.user.name ?? "David.eth"}
            </div>
          </div>
          <div className={styles.msgAccount}>Messages</div>
          <div className={styles.settingAccount}>Setting</div>
          <div className={styles.sellAccount}>Sell a product</div>
        </div>
        <div className={styles.rightAccount}>
          <div>
            <div className={styles.nameCategAccount}>Last products boughts</div>
            <div className={styles.carouselAccount}>
              <div>
                <Link href="/product/4RREH34JZ">
                  <Card title="Very very cool bike" />
                </Link>
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
              </div>
            </div>
            <div className={styles.nameCategAccount}>Last products seen</div>
            <div className={styles.carouselAccount}>
              <div>
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return { redirect: { destination: "/auth", permanent: false } };
  } else {
    return { props: {} };
  }
}
