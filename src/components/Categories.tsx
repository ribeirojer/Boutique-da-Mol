import Link from "next/link";
import React from "react";

type Props = {};

const Categories = (props: Props) => {
  const data = [
    {
      id: 1,
      title: "Roupas masculinas",
      image: "/img/cat-1.jpg",
      link: "/loja",
      quantity: 15,
    },
    {
      id: 2,
      title: "Roupas femininas",
      image: "/img/cat-2.jpg",
      link: "/loja",
      quantity: 15,
    },
    {
      id: 3,
      title: "Roupas infantil",
      image: "/img/cat-3.jpg",
      link: "/loja",
      quantity: 15,
    },
    {
      id: 4,
      title: "Acessórios",
      image: "/img/cat-4.jpg",
      link: "/loja",
      quantity: 15,
    },
    {
      id: 5,
      title: "Bolsas",
      image: "/img/cat-5.jpg",
      link: "/loja",
      quantity: 15,
    },
    {
      id: 6,
      title: "Sapatos",
      image: "/img/cat-6.jpg",
      link: "/loja",
      quantity: 15,
    },
  ];

  return (
    <div className="container px-4 md:px-0 mx-auto grid gap-4 grid-cols-2 md:grid-cols-3">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg hover:shadow-pink-500 border p-4">
          <p className="text-right"> {item.quantity} Produtos</p>
          <Link href={item.link} className="relative overflow-hidden">
            <img className="img-fluid" src={item.image} alt="" />
          </Link>
          <h5 className="font-weight-semi-bold m-0">{item.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default Categories;
