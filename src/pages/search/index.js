import Link from "next/link";
import Header from "../../components/ui/header";
import Card from "../../components/ui/card";

import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.containerSearch}>
      <Header />
      <div className={styles.mainSearch}>
        <div className="font-bold"> Here are the products for“ Bicycles” </div>{" "}
        <div className={styles.mosaicSearch}>
          <Link href="/product/5452547354">
            <Card title="Bicycle" img="./ee.png" />
          </Link>
          <Card title="Bicycle 2" />
          <Card title="Bicycle 3" />
          <Card title="Bicycle 4" />
          <Card title="Bicycle 5" />
          <Card title="Bicycle 6" />
          <Card title="Bicycle 7" />
          <Card title="Bicycle 8" />
          <Card title="Bicycle 9" />
          <Card title="Bicycle 10" />
          <Card title="Bicycle 11" />
        </div>
      </div>
    </div>
  );
}
