import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

type Props = {};

const Faq = (props: Props) => {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto my-8">
        <h1 className="text-4xl font-bold text-center">Perguntas Frequentes</h1>
        <p className="text-center">
          Aqui estão algumas perguntas mais frequentes sobre a empresa.
        </p>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Faq;
