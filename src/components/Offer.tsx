import Link from "next/link";
import React from "react";
import Button from "./Button";

type Props = {};

const Offer = (props: Props) => {
  return (
    <section className="container mx-auto px-4 md:px-0 my-8 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative bg-[#F2F2F2] shadow-lg mb-2 py-5 px-5 rounded-lg border">
        <img src="img/offer-1.png" alt="" />
        <div className="absolute top-0 right-8 flex flex-col items-end justify-center w-full h-full">
          <h5 className="text-uppercase text-pink-500 mb-3 font-bold">
            20% DE DESCONTO EM TODO O PEDIDO
          </h5>
          <h1 className="mb-4 font-semibold text-2xl">Coleção de primavera</h1>
          <Link href="/loja">
            <Button>
              Comprar agora
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative bg-[#F2F2F2] shadow-lg mb-2 py-5 px-5 rounded-lg border">
        <img src="img/offer-2.png" alt="" className="absolute top-4 right-4" />
        <div className="absolute top-0 left-8 flex flex-col items-start justify-center w-full h-full">
        <h5 className="text-uppercase text-pink-500 mb-3 font-bold">
            20% DE DESCONTO EM TODO O PEDIDO
          </h5>
          <h1 className="mb-4 font-semibold text-2xl">Coleção de inverno</h1>
          <Link href="/loja">
            <Button>
              Comprar agora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offer;
