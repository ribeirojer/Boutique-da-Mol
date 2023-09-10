import BackToTop from "@/components/BackToTop";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import BannerItemV2 from "@/components/BannerItemV2";
import Offer from "@/components/Offer";
import Products from "@/components/Products";
import Subscribe from "@/components/Subscribe";
import Vendor from "@/components/Vendor";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <MainBanner></MainBanner>
        {/* <Navbar></Navbar> */}
  <section className="container flex mx-auto">
      <BannerItemV2
        imgSrc="images/banner-01.jpg"
        title="Roupas Femininas"
        info="Primavera 2023"
      />
      <BannerItemV2
        imgSrc="images/banner-02.jpg"
        title="Masculino"
        info="Primavera 2023"
      />
      <BannerItemV2
        imgSrc="images/banner-03.jpg"
        title="Acessorios"
        info="Novos items"
      />
  </section>
        <Featured></Featured>
        <Categories></Categories>
        <Offer></Offer>
        <Products start={0} title={"Produtos recentes"}></Products>
        <Subscribe></Subscribe>
        <Products start={4} title={"Produtos da moda"}></Products>
        {/* <Products2></Products2> */}
        {/*<Vendor></Vendor>*/}
        <BackToTop></BackToTop>
      </main>
      <Footer></Footer>
    </>
  );
}
