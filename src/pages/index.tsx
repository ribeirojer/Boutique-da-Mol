import Header from "@/components/Header";
import SliderSectionMain from "@/components/SliderSectionMain";
import BannerItemV2 from "@/components/BannerItemV2";
import Products from "@/components/Products";
import Subscribe from "@/components/Subscribe";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Image from "next/image";

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
			link="f"
          />
          <BannerItemV2
            imgSrc="images/banner-02.jpg"
            title="Masculino"
            info="Primavera 2023"
			link="m"
          />
          <BannerItemV2
            imgSrc="images/banner-03.jpg"
            title="Acessórios"
            info="Novos items"
			link="Unisex"
          />
        </section>
        <Products start={0} title={"Produtos recentes"}></Products>
        <Subscribe></Subscribe>
        <Products start={4} title={"Produtos da moda"}></Products>
        <BackToTop></BackToTop>
        <a
          target="_blank"
          rel="external"
          className="whats"
          href="https://api.whatsapp.com/send?phone=554797868892&amp;text=Olá,%20tudo%20bem?%20eu%20tenho%20interesse%20em%20um%20produto%20da%20Boutique"
        >
          <Image
            src={"/WhatsApp.png"}
            className="logo"
            alt="WhatsApp-logo"
            width={50}
            height={50}
          />
        </a>
      </main>
      <Footer></Footer>
    </>
  );
}
