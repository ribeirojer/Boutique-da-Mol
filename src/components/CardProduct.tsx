import { UserContext } from "@/pages/_app";
import { formatCurrency } from "@/utils";
import Link from "next/link";
import React, { useContext } from "react";

type Props = {
  item: any;
};

const CardProduct = ({ item }: Props) => {
  const { addToCart } = useContext(UserContext);

  return (
    <div className="border border-pink-200 rounded-lg overflow-hidden shadow-lg mb-4 p-4">
      <img className="w-100" src={item.image} alt={item.name} />
      <div className="text-center py-4">
        <h6 className="text-truncate mb-3">{item.name}</h6>
        <div className="flex justify-center">
          <h6>{formatCurrency(item.price)}</h6>
          <h6 className="text-gray-500  ml-2">
            {formatCurrency(item.oldPrice)}
          </h6>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <Link
          href={`/item/${item.id}`}
          className="group product-detais-link flex flex-col items-center justify-center bg-pink-200 hover:bg-pink-500 rounded-lg p-2 gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="svg-icon-1 fill-pink-500"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="M14.829 14.828a4.055 4.055 0 0 1-1.272.858 4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62 5.963 5.963 0 0 0 2.148.903 6.042 6.042 0 0 0 2.415 0 5.972 5.972 0 0 0 2.148-.903c.313-.212.612-.458.886-.731.272-.271.52-.571.734-.889l-1.658-1.119a4.017 4.017 0 0 1-.489.592z"></path>
            <circle cx="8.5" cy="10.5" r="1.5"></circle>
            <circle cx="15.493" cy="10.493" r="1.493"></circle>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="svg-icon-2 fill-white"
          >
            <path d="M12 18c4 0 5-4 5-4H7s1 4 5 4z"></path>
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="m13 12 2 .012c.012-.462.194-1.012 1-1.012s.988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3zm-5-1c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z"></path>
          </svg>
          <span className="text-pink-500 group-hover:text-white  text-center">
            Ver mais
          </span>
        </Link>
        <button
          onClick={() => addToCart(item)}
          className=" group product-cart-link flex flex-col items-center justify-center bg-pink-200 hover:bg-pink-500 text-white rounded-lg p-2 gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="svg-icon-3 fill-pink-500"
          >
            <circle cx="10.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
            <path d="m14 13.99 4-5h-3v-4h-2v4h-3l4 5z"></path>
            <path d="M17.31 15h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="svg-icon-4 fill-white"
          >
            <circle cx="10.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
            <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path>
            <path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path>
          </svg>
          <span className="text-pink-500 group-hover:text-white text-center">
            Pôr no carrinho
          </span>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
