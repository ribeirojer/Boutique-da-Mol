import React from "react";
import ProductItem from "./ProductItem";

type Props = {};

const MenArea = (props: Props) => {
  return (
    <section className="section" id="men">
      <div className="section-heading">
        <h2>Men's Latest</h2>
        <span>
          Details to details is what makes Hexashop different from the other
          themes.
        </span>
      </div>
      <div className="flex flex-wrap mx-auto">
        <ProductItem
          title="Classic Spring"
          price="$120.00"
          imageUrl="/assets/images/men-01.jpg"
        />
        <ProductItem
          title="Air Force 1 X"
          price="$90.00"
          imageUrl="/assets/images/men-02.jpg"
        />
        <ProductItem
          title="Love Nana ‘20"
          price="$150.00"
          imageUrl="/assets/images/men-03.jpg"
        />
        <ProductItem
          title="Classic Spring"
          price="$120.00"
          imageUrl="/assets/images/men-01.jpg"
        />
      </div>
    </section>
  );
};

export default MenArea;
