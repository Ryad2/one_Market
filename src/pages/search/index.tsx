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

  {
    name: "Trek bicycle Marlin 4 second generation",
    img: "https://media.trekbikes.com/image/upload/w_1200/Marlin4_22_29759_A_Portrait",
    price: 600,
  },

  {
    name: "Tissot watch classic dream",
    img: "https://www.tissotwatches.com/media/catalog/product/T/1/T129.410.36.261.00_R_1.png?im=Resize=(1200,1200)",
    price: 200,
  },
  {
    name: "Sony Bravia X95k Mini LED TV",
    img: "https://cdn.mos.cms.futurecdn.net/jwT47j5SxowmzWVxbDBDUb-1200-80.jpg",
    price: 2180,
  },

  {
    name: "Triangle Wireless Speaker",
    img: "https://www.trianglehifi.fr/cdn/shop/products/ln01A-chestnut-packshot-shopify_1_1200x1200.jpg?v=1683719803",
    price: 250,
  },

  {
    name: "Dyson Vacuum Cleaner",
    img: "https://img3.semeubler.com/3185-large_default/aspirateur-dyson.jpg",
    price: 185,
  },
  {
    name: "EOS 90D Canon Camera",
    img: "https://cdn.lesnumeriques.com/optim/product/53/53485/d4a96b65-eos-90d__450_400.jpeg",
    price: 700,
  },
  {
    name: "Canondale Trail Mountain Bike SL 1",
    img: " https://d1mgeijqpfaspl.cloudfront.net/uploads/bike/image_side/thumbs/1272/641ec1c1-0d49-45ab-a7fd-3b1d6676a843.webp",
    price: 1500,
  },
  {
    name: "Schindelhauer Gustav Bike",
    img: "https://img.leboncoin.fr/api/v1/lbcpb1/images/b0/1f/65/b01f6574c228ece187be4bda05e8acd5975389ac.jpg?rule=classified-1200x800-webp",
    price: 900,
  },
  {
    name: "Peugeot city Bike",
    img: "https://img.leboncoin.fr/api/v1/lbcpb1/images/0d/18/44/0d1844987d8c2250ce39a8673e9762e74f81a583.jpg?rule=ad-large",
    price: 80,
  },
  {
    name: "Rockrider st 530s",
    img: "https://img.leboncoin.fr/api/v1/lbcpb1/images/de/aa/e4/deaae40c518f20ececff184def6a641be1af03bb.jpg?rule=ad-large",
    price: 600,
  },
  {
    name: "Very comfortable couch",
    img: "https://img.leboncoin.fr/api/v1/lbcpb1/images/eb/ac/c9/ebacc9677265d9eac7fcb3770b98b8b6c6718e1b.jpg?rule=ad-large  ",
    price: 400,
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
