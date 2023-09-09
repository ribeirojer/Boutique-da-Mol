import Button from "@/components/Button";
import Header from "@/components/Header";
import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "./_app";
import Footer from "@/components/Footer";
import { productsData } from "@/utils/cardsData";
import { CartIcon, TrashIcon } from "@/components/Icons";
import { formatCurrency } from "@/utils";

type Props = {};

const desejos = (props: Props) => {
  const { cartItems, wishlist, addToCart, removeFromWishlist } = useContext(UserContext);
  const selected = wishlist.map((objeto) => objeto.id);

  const wishListItems = productsData.filter((product)=>
    selected.includes(product.id))

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {wishListItems.length > 0 ? (
            <div className="flex-1">
              <h1 className="text-4xl text-center font-bold mb-8">Lista de desejos</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishListItems.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex flex-col bg-white rounded-lg shadow-md shadow-pink-500 border border-pink-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full object-cover mb-4 rounded-t-lg"
                    />
					<div className="p-4 flex flex-col">
                    <h2 className="text-xl text-center font-semibold">{item.name}</h2>
                    <p className="text-lg text-gray-500 text-center mb-4">{formatCurrency(item.price)}</p>
                    <Button
                      onClick={() => {
                        addToCart(item); // Adicione o item ao carrinho
                        removeFromWishlist({id: item.id}); // Remova da lista de desejos
                      }}
                    ><div className="flex justify-center gap-2">
					  <CartIcon className="fill-white"/>
                      <span>Colocar no Carrinho</span></div>
                    </Button>
                    <button
                      onClick={() => removeFromWishlist({id: item.id})}
                      className="flex items-center justify-center group gap-2 transition-all mt-2 text-red-500 hover:text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
					  <TrashIcon className="fill-red-500 group-hover:fill-white" />
                      <span>Remover da Lista de Desejos</span>
                    </button>
					</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-center mb-4">
                Lista de desejos vazia
              </h1>
              <p className="text-center text-gray-500 mb-8">
                Você ainda não adicionou nenhum produto à sua lista de desejos.
              </p>
			  <div className="flex gap-4">
              <Link href={"/loja"}>
                <Button>Ver produtos</Button>
              </Link>
			  {cartItems.length > 0 && (
              <Link href={"/carrinho"}>
                <Button>Ver carrinho</Button>
              </Link>)}
			  </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default desejos;
