import { productsData } from "@/utils/cardsData";
import React, { useContext } from "react";
import CardProduct from "./CardProduct";

type Props = {
  start: number;
  title: string;
};

const Products = ({ start, title }: Props) => {
  return (
    <section className="container mx-auto px-4 md:px-0 pt-8">
      <h2 className="text-2xl font-bold text-center mb-4 px-5">{ title }</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsData.slice(start, start + 4).map((item) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
