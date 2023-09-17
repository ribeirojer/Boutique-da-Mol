import Header from "@/components/Header";
import SliderSectionMain from "@/components/SliderSectionMain";
import BannerItemV2 from "@/components/BannerItemV2";
import Products from "@/components/Products";
import Subscribe from "@/components/Subscribe";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <SliderSectionMain />
        <section className="container flex flex-col md:flex-row items-center justify-center md mx-auto">
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
        <Products start={0} title={"Produtos recentes"}></Products>
        <Subscribe></Subscribe>
        <Products start={4} title={"Produtos da moda"}></Products>
        <BackToTop></BackToTop>
      </main>
      <Footer></Footer>
    </>
  );
}
