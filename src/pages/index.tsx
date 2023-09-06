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
        <Products></Products>
        <Subscribe></Subscribe>
        {/* <Products2></Products2> */}
        {/*<Vendor></Vendor>*/}
        <BackToTop></BackToTop>
      </main>
      <Footer></Footer>
    </>
  );
}
