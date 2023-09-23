import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserContext } from "@/pages/_app";
import {
  HeartEyesIconRegular,
  HeartIconBold,
  CartIcon,
  CartIconPlus,
  CartIconBold,
} from "@/components/Icons";
import { formatCurrency } from "@/utils";

type Props = {
  item: any;
};

const CardProduct = ({ item }: Props) => {
  const { cartItems, addToCart, wishlist, addToWishlist } = useContext(
    UserContext
  );
  const router = useRouter();
  const isProductInWishList = wishlist.some(
    (itemToShow: any) => itemToShow.id === item.id
  );
  const isProductInCart = cartItems.some(
    (itemToShow: any) => itemToShow.id === item.id
  );

  return (
    <div className="border border-pink-200 rounded-lg overflow-hidden shadow-lg mb-4 hover:shadow-pink-300">
      <Link href={`/item/${item.id}`}>
        <img
          className="w-100"
          src={item.image}
          alt={item.name}
        />
      </Link>
      <div className="flex justify-between items-center p-4">
        <div>
          <Link
            href={`/item/${item.id}`}
            className="transition-all hover:text-pink-500"
          >
            <h3 className="font-semibold mb-2">{item.name}</h3>
          </Link>
          <div className="flex justify-center">
            <Link
              href={`/item/${item.id}`}
              className="transition-all hover:text-pink-300"
            >
              <h4>{formatCurrency(item.price)}</h4>
            </Link>
            {item.oldPrice && (
              <h4 className="text-gray-500 ml-2">
                {formatCurrency(item.oldPrice)}
              </h4>
            )}
          </div>
        </div>
        <div className="flex gap-4">
          {isProductInWishList ? (
            <button
              onClick={() => router.push("/desejos")}
              className="group bg-pink-200 hover:bg-pink-500 rounded-lg p-2"
            >
              <HeartIconBold className="fill-pink-500 group-hover:fill-white" />
            </button>
          ) : (
            <button
              onClick={() => addToWishlist({ id: item.id })}
              className="group bg-pink-200 hover:bg-pink-500 rounded-lg p-2"
            >
              <HeartEyesIconRegular className="fill-pink-500 group-hover:fill-white" />
            </button>
          )}
          {/*isProductInCart ? (
            <button
              onClick={() => router.push("/carrinho")}
              className="group product-cart-link bg-pink-200 hover:bg-pink-500 text-white rounded-lg p-2"
            >
              <CartIconBold className="fill-pink-500 group-hover:fill-white"/>
            </button>
          ) : (
            <button
              onClick={() =>
                addToCart({
                  id: item.id,
                  quantity: 1,
                })
              }
              className="group product-cart-link bg-pink-200 hover:bg-pink-500 text-white rounded-lg p-2"
            >
              <CartIconPlus className="svg-icon-3 fill-pink-500" />
              <CartIcon className="svg-icon-4 fill-white" />
            </button>
          )*/}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
