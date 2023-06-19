import React from "react";

type Props = {};

const Featured = (props: Props) => {
  const data = [
    {
      id: 1,
      title: "Men's Slim Fit Shirt",
      price: "€100",
      image: "https://i.ibb.co/Qfvn4z6/1.png",
    },
    {
      id: 2,
      title: "Men's Slim Fit Shirt",
      price: "€100",
      image: "https://i.ibb.co/Qfvn4z6/1.png",
    },
    {
      id: 3,
      title: "Men's Slim Fit Shirt",
      price: "€100",
      image: "https://i.ibb.co/Qfvn4z6/1.png",
    },
    {
      id: 4,
      title: "Men's Slim Fit Shirt",
      price: "€100",
      image: "https://i.ibb.co/Qfvn4z6/1.png",
    },
  ];
  return (
    <section className="container mx-auto px-4 md:px-0 py-16 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex items-center border border-pink-300 rounded-md mb-4 p-8 gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-pink-300 h-16 w-16"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path>
        </svg>
        <h2 className="font-semibold">Produtos de Qualidade</h2>
      </div>

      <div className="flex items-center border border-pink-300 rounded-md mb-4 p-8 gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-pink-500 h-16 w-16"
        >
          <path d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path>
        </svg>
        <h2 className="font-semibold">Frete Grátis</h2>
      </div>

      <div className="flex items-center border border-pink-300 rounded-md mb-4 p-8 gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-pink-500 h-16 w-16"
        >
          <path d="M18 6h2v12h-2zm-2 5H7.414l4.293-4.293-1.414-1.414L3.586 12l6.707 6.707 1.414-1.414L7.414 13H16z"></path>
        </svg>
        <h2 className="font-semibold">Devolução em 14 dias</h2>
      </div>

      <div className="flex items-center border border-pink-300 rounded-md mb-4 p-8 gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-pink-500 h-16 w-16"
        >
          <path d="M20 12v-1.707c0-4.442-3.479-8.161-7.755-8.29-2.204-.051-4.251.736-5.816 2.256A7.933 7.933 0 0 0 4 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 0 1 1.821-4.306 5.977 5.977 0 0 1 4.363-1.691C15.392 4.099 18 6.921 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2z"></path>
          <path d="M7 12h2v8H7zm8 0h2v8h-2z"></path>
        </svg>
        <h2 className="font-semibold">Suporte 24/7</h2>
      </div>
    </section>
  );
};

export default Featured;
