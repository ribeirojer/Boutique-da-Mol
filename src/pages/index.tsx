import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainBanner from "@/components/MainBanner";
import MenArea from "@/components/MenArea";
import WomenArea from "@/components/WomenArea";
import KidsArea from "@/components/KidsArea";
import ExploreArea from "@/components/ExploreArea";
import SocialArea from "@/components/SocialArea";
import Subscribe from "@/components/Subscribe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <MainBanner></MainBanner>
        <MenArea></MenArea>
        <WomenArea></WomenArea>
        <KidsArea></KidsArea>
        <ExploreArea></ExploreArea>
        <SocialArea></SocialArea>
        <Subscribe></Subscribe>
      </main>
      <Footer></Footer>
    </>
  );
}
