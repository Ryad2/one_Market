import Link from "next/link";
import Header from "../../components/ui/header";
import Card from "../../components/ui/card";

import styles from "./Search.module.css";

const products = [
  {
    name: "Magnifique Fiat multipla",
    img: " https://images.caradisiac.com/images/3/2/2/8/183228/S1-fiat-multipla-un-ovni-genial-des-1-500-eur-630382.jpg",
    price: 4000,
  },
  {
    name: "LG fridge",
    img: " https://discountshop-online.com/632-medium_default/lg-refrigerateur-americain-601-l-total-no-frost-a-77-x-968-x-1891-cm-carbone.jpg",
    price: 800,
  },
  {
    name: "Solid Suar Wooden Table",
    img: "https://img.leboncoin.fr/api/v1/lbcpb1/images/75/26/97/75269753b6ee22bce50faee0397cea857cdb390c.jpg?rule=classified-1200x800-webp",
    price: 2000,
  },
  {
    name: "Greatest Album ever (because it’s never gonna give you up)",
    img: " https://upload.wikimedia.org/wikipedia/en/1/1c/Rick_Astley_-_Whenever_You_Need_Somebody.png",
    price: 10,
  },
  {
    name: "Unused Playstation 5",
    img: " https://images.immediate.co.uk/production/volatile/sites/3/2020/08/playstation-5-77d37a0.jpg",
    price: 390,
  },
];

export default function Search() {
  return (
    <div className={styles.containerSearch}>
      <Header />
      <div className={styles.mainSearch}>
        <div className="font-bold">
          Here are some recommendations of products
        </div>
        <div className={styles.mosaicSearch}>
          {products.map((e, index) => (
            <Link href="/product/5452547354" key={index}>
              <Card title={e.name} img={e.img} price={e.price} />
            </Link>
          ))}
          <Link href="/product/5452547354">
            <Card title="Bicycle" img="./froyo_pauvre.png" />
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
