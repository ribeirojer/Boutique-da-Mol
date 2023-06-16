import React from "react";
import ProductItem from "./ProductItem";
import Card from "./Card";
import { jeans } from "@/utils/data";

type Props = {};

const MenArea = (props: Props) => {
  return (
    <section className="container mx-auto" id="men">
      <div className="section-heading">
        <h2>Men's Latest</h2>
        <span>
          Details to details is what makes Hexashop different from the other
          themes.
        </span>
      </div>
      <div className="flex flex-wrap mx-auto">
        <Card item={jeans} />
        <Card item={jeans} />
        <Card item={jeans} />
        <Card item={jeans} />
      </div>
    </section>
  );
};

export default MenArea;
