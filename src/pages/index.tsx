import BackToTop from "@/components/BackToTop";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Products from "@/components/Products";
import Products2 from "@/components/Products2";
import Subscribe from "@/components/Subscribe";
import Vendor from "@/components/Vendor";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Navbar></Navbar>
      <Featured></Featured>
      <Categories></Categories>
      <Offer></Offer>
      <Products></Products>
      <Subscribe></Subscribe>
      {/* <Products2></Products2> */}
      <Vendor></Vendor>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </main>
  );
}
