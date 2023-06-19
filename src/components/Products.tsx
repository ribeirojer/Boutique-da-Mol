import { CartExtract } from "@/interfaces/Product";
import { UserContext } from "@/pages/_app";
import { formatCurrency } from "@/utils";
import { productsData } from "@/utils/cardsData";
import Link from "next/link";
import React, { useContext } from "react";
import CardProduct from "./CardProduct";

type Props = {};

const Products = (props: Props) => {
  return (
    <section className="container mx-auto px-4 md:px-0 pt-8">
      <h2 className="section-title px-5">Produtos da moda</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsData.map((item) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
