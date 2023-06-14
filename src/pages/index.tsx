import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainBanner from "@/components/MainBanner";
import MenArea from "@/components/MenArea";
import WomenArea from "@/components/WomenArea";
import KidsArea from "@/components/KidsArea";
import ExploreArea from "@/components/ExploreArea";
import SocialArea from "@/components/SocialArea";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Header></Header>
      <MainBanner></MainBanner>
      <MenArea></MenArea>
      <WomenArea></WomenArea>
      <KidsArea></KidsArea>
      <ExploreArea></ExploreArea>
      <SocialArea></SocialArea>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}
