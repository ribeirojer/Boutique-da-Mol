import BackToTop from "@/components/BackToTop";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
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
