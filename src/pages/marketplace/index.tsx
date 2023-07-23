import { Plus } from "lucide-react";
import { Inter } from "next/font/google";
import { useAccount } from "wagmi";
import styles from "./Index.module.css";
import Accordeons from "~/components/ui/accordeons";
import Header from "~/components/ui/header";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const categ = [
  { name: "Clothes", img: "/vetements.jpg" },
  {
    name: "Furnitures",
    img: "https://img.leboncoin.fr/api/v1/lbcpb1/images/f5/ec/97/f5ec977b0945beb35a828b1cc69bfe008e104970.jpg?rule=ad-large",
  },
  { name: "Cars", img: "/cars.jpeg" },
];

const questions = [
  {
    question: "What can I sell on One Chance?",
    answer:
      "Everything it can be cars, clothes, computers, furnitures and so on...",
  },
  {
    question: "What is the process to buy something?",
    answer:
      "You select the item you want, then you buy it in the whatever coin you want and chain, then once the seller received ethe money he sends the item throught the post.",
  },
  {
    question: "What is the difference with a normal marketplace?",
    answer:
      "The main benefits of one chance marketplace over the average Marketplace is that it is bot free and scammer free thanks to worldcoin. The Worldcoin sign in that we implemented in our marketplace assure you that no bot can be present on the app so it prevents from scalping bots. Also which one of you have never been scammed on a marketplace ? You know when you order something and it never arrives or it’s an imitation With one chance Marketplace this can not happen. If you get caught scamming your worldcoin account is banned and you cannot access the marketplace anymore because you will need a new Worldcoin account which is impossible to recreate thanks to proof of personhood.",
  },
  {
    question: "What happen when a scammer gets caught?",
    answer:
      "We send him a warning called strike once you get 3 strikes you are definitively banned from the marketplace.",
  },
  {
    question: "How can I pay on the marketplace?",
    answer:
      "You can pay using your crypto wallet either Walletconnect or Metamask on several blockchains.",
  },
];

export default function Marketplace() {
  const account = useAccount();
  return (
    <main className={styles.containerIndex}>
      <Header />
      <div className={styles.mainIndex}>
        <div className={styles.firstIndex}>
          <div className={styles.leftIndex}>
            <div className={styles.titleIndex}>
              One Chance, trustworthy and decentralized marketplace
            </div>
            <div className={styles.descIndex}>
              One Chance Marketplace delivers a scam-free, bot-free platform,
              ensuring secure and private transactions through Worldcoin and
              Zkbob. Enjoy encrypted negotiations with XMTP, all in a
              decentralized environment.
            </div>
            <Link href="/account" className="mt-8 h-12 w-32">
              <div className="flex h-12 w-32 items-center justify-center rounded-lg bg-blue-400">
                <h1 className="text-bold text-white">Get Started !</h1>
              </div>
            </Link>
          </div>
          <div className={styles.rightIndex}>
            <img src="/imageLanding.png" alt="" />
          </div>
        </div>
        <div className={styles.secondIndex}>
          <div>Trending categories 🔥</div>
          <div className={styles.categoriesIndex}>
            {categ.map((e, index) => (
              <Link href="/account">
                <div key={index}>
                  <img src={e.img} alt="" />
                  <div>{e.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Accordeons questions={questions} />
        </div>
        <div></div>
      </div>
    </main>
  );
}
