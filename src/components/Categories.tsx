import React from "react";

type Props = {};

const Categories = (props: Props) => {
  const data = [
    {
      id: 1,
      title: "Men's dresses",
      image: "/img/cat-1.jpg",
      link: "/shop",
      quantity: 15,
    },
    {
      id: 2,
      title: "Women's dresses",
      image: "/img/cat-2.jpg",
      link: "/shop",
      quantity: 15,
    },
    {
      id: 3,
      title: "Women's dresses",
      image: "/img/cat-2.jpg",
      link: "/shop",
      quantity: 15,
    },
    {
      id: 4,
      title: "Women's dresses",
      image: "/img/cat-2.jpg",
      link: "/shop",
      quantity: 15,
    },
    {
      id: 5,
      title: "Women's dresses",
      image: "/img/cat-2.jpg",
      link: "/shop",
      quantity: 15,
    },
    {
      id: 6,
      title: "Women's dresses",
      image: "/img/cat-2.jpg",
      link: "/shop",
      quantity: 15,
    },
  ];

  return (
    <div className="container px-4 md:px-0 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg border p-4">
          <p className="text-right"> {item.quantity} Produtos</p>
          <a href={item.link} className="relative overflow-hidden">
            <img className="img-fluid" src={item.image} alt="" />
          </a>
          <h5 className="font-weight-semi-bold m-0">{item.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default Categories;
