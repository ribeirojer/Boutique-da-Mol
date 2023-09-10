import BackToTop from "@/components/BackToTop";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import BannerItemV2 from "@/components/BannerItemV2";
import Offer from "@/components/Offer";
import Products from "@/components/Products";
import Subscribe from "@/components/Subscribe";
import Vendor from "@/components/Vendor";

export default function Home() {
const resourcesLinks = [
  { title: "SaaS Development", url: "/saas-development" },
  { title: "Our Products", url: "/our-products" },
];

const companyLinks = [
  { title: "About TailGrids", url: "/about-us" },
  { title: "Contact & Support", url: "/contact" },
];

const quickLinks = [
  { title: "Premium Support", url: "/premium-support" },
  { title: "Our Services", url: "/services" },
];

  return (
    <>
      <Header></Header>
      <main>
        <MainBanner></MainBanner>
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
        <Products start={0} title={"Produtos recentes"}></Products>
        <Subscribe></Subscribe>
        <Products start={4} title={"Produtos da moda"}></Products>
        <BackToTop></BackToTop>
      </main>
      <Footer></Footer>
<Footer2
        logoSrc="/images/logo.png"
        description="Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam."
        phoneNumber="+012 (345) 678 99"
        resourcesLinks={resourcesLinks}
        companyLinks={companyLinks}
        quickLinks={quickLinks}
      />    </>
  );
}
