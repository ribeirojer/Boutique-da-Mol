import React, { useContext } from "react";
import { UserContext } from "../pages/_app";
import { productsData } from "@/utils/cardsData";
import { formatCurrency } from "@/utils";
import Button from "@/components/Button";
import { TrashIcon } from "@/components/Icons";
import Image from "next/image";

type Props = {};

const CartProductTable = (props: Props) => {
  const { cartItems, addToCart, removeFromCart } = useContext(UserContext);

  return (
    <div className="overflow-x-auto">
      <table className="w-[150%] md:full">
        <thead>
          <tr>
            <th className="px-4 py-2">Produto</th>
            <th className="px-4 py-2">Preço</th>
            <th className="px-4 py-2">Quantidade</th>
            <th className="px-4 py-2 hidden md:table-cell">Total</th>{" "}
            {/* Mostra apenas em telas médias e maiores */}
            <th className="px-4 py-2">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: any) => {
            return (
              <tr key={item.id} className="border-t h-24 border-gray-200">
                <td className="px-4 py-2 flex items-center space-x-2">
                  <div className="w-16 h-16 rounded-md">
                    <Image
                      src={productsData[item.id - 1].image}
                      alt="imagem do produto"
                      width={100}
                      height={100}
                      className="object-cover border border-pink-200 rounded-md"
                    />
                  </div>
                  <span className="text-gray-700">
                    {productsData[item.id - 1].name}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {formatCurrency(productsData[item.id - 1].price)}
                </td>
                <td className="px-4 py-2 space-x-2">
                  <Button
                    disabled={item.quantity === 0}
                    onClick={() => addToCart({ id: item.id, quantity: -1 })}
                  >
                    -
                  </Button>
                  <input
                    className="w-12 text-center text-black bg-gray-200 rounded-md"
                    id="quantity"
                    type="number"
                    value={item.quantity}
                    disabled
                  />
                  <Button
                    onClick={() => addToCart({ id: item.id, quantity: 1 })}
                  >
                    +
                  </Button>
                </td>
                <td className="px-4 py-2 hidden md:table-cell">
                  {formatCurrency(
                    productsData[item.id - 1].price * item.quantity
                  )}
                </td>
                <td className="px-4 py-2">
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    type="button"
                    title="Excluir item do carrinho"
                    aria-label="Excluir item do carrinho"
                  >
                    <TrashIcon className="fill-white" />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartProductTable;
