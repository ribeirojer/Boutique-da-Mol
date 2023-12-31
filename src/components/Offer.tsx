import Link from "next/link";
import React from "react";
import Button from "./Button";

type Props = {};

const Offer = (props: Props) => {
  return (
    <section className="container mx-auto px-4 md:px-0 my-8 md:my-16 flex flex-col md:flex-row gap-8">
      <div className="w-full relative bg-[#F2F2F2] shadow-lg mb-2 py-5 px-5 rounded-lg border">
        <img src="img/offer-1.png" alt="" />
        <div className="absolute w-3/4 top-0 right-8 flex flex-col items-end justify-center h-full">
          <h5 className="text-end md:text-start text-uppercase text-pink-500 mb-3 font-bold">
            20% DE DESCONTO EM TODO O PEDIDO
          </h5>
          <h1 className="mb-4 font-semibold text-2xl">Coleção de primavera</h1>
          <Link href="/loja">
            <Button>Comprar agora</Button>
          </Link>
        </div>
      </div>
      <div className="w-full relative bg-[#F2F2F2] shadow-lg mb-2 py-5 px-5 rounded-lg border flex md:block justify-end">
        <img
          src="img/offer-2.png"
          alt=""
          className=" md:absolute md:top-4 md:right-4"
        />
        <div className="absolute top-0 left-8 flex flex-col items-start justify-center md:w-full h-full">
          <h5 className="text-uppercase text-pink-500 mb-3 font-bold">
            20% DE DESCONTO EM TODO O PEDIDO
          </h5>
          <h1 className="mb-4 font-semibold text-2xl">Coleção de inverno</h1>
          <Link href="/loja">
            <Button>Comprar agora</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offer;
