import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

type Props = {};

const Termos = (props: Props) => {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto">
        <h1>Termos</h1>
        <p>Termos de uso da Boutique da Moh</p>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Termos;
