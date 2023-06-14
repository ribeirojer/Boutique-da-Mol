import Image from "next/image";
import React from "react";

type ProductItemProps = {
  title: string;
  price: string;
  imageUrl: string;
};

const ProductItem = ({ title, price, imageUrl }: ProductItemProps) => {
  return (
    <div className="item">
      <div className="thumb">
        <div className="hover-content">
          <ul>
            <li>
              <a href="single-product.html">
                <i className="fa fa-eye"></i>
              </a>
            </li>
            <li>
              <a href="single-product.html">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li>
              <a href="single-product.html">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <Image src={imageUrl} alt="" width={200} height={200} />
      </div>
      <div className="down-content">
        <h4>{title}</h4>
        <span>{price}</span>
        <ul className="stars">
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductItem;
