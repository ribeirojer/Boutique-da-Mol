import Button from "@/components/Button";
import Header from "@/components/Header";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { UserContext } from "./_app";
import Footer from "@/components/Footer";
import { productsData } from "@/utils/cardsData";
import { CartIcon, TrashIcon } from "@/components/Icons";
import { formatCurrency } from "@/utils";

type Props = {};

const Desejos = (props: Props) => {
  const { cartItems, wishlist, addToCart, removeFromWishlist } =
    useContext(UserContext);
  const selected = wishlist.map((objeto: any) => objeto.id);
  const [error, setError] = useState("")
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>(
    {}
  );

  const wishListItems = productsData.filter((product: any) =>
    selected.includes(product.id)
  );

  const handleSizeChange = (itemId: number, size: string) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [itemId]: size,
    }));
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {wishListItems.length > 0 ? (
            <div className="flex-1">
              <h1 className="text-4xl text-center font-bold mb-8">
                Lista de desejos
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishListItems.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex flex-col bg-white rounded-lg shadow-md shadow-pink-500 border border-pink-200"
                  >
                    <Link href={`/item/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full object-cover rounded-t-lg"
                      />
                    </Link>
                    <div className="p-4 flex flex-col">
                      <h2 className="text-xl text-center font-semibold">
                        {item.name}
                      </h2>
                      <p className="text-lg text-gray-500 text-center mb-4">
                        {formatCurrency(item.price)}
                      </p>
                      <div className="flex flex-col items-center justify-center my-2">
					  <p>Selecione um tamanho:</p>
					                        <div className="flex justify-center my-2">
                        {item.sizes && item.sizes.map((size: string) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(item.id, size)}
                            className={`${
                              selectedSizes[item.id] === size
                                ? "bg-pink-500 text-white"
                                : "bg-gray-200 text-gray-700"
                            } rounded-md px-3 py-1 m-1 cursor-pointer`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      </div>
                      {!item.sizes && <Button
                        onClick={() => {
                            addToCart({
                              id: item.id,
                              quantity: 1,
                              size: selectedSizes[item.id],
                            });
                            removeFromWishlist({ id: item.id });
                          
                        }}
                      >
                        <div className="flex justify-center gap-2">
                          <CartIcon className="fill-white" />
                          <span>Colocar no Carrinho</span>
                        </div>
				      </Button>}
                      {item.sizes && <Button
                        onClick={() => {
                          if (selectedSizes[item.id]) {
                            addToCart({
                              id: item.id,
                              quantity: 1,
                              size: selectedSizes[item.id],
                            });
                            removeFromWishlist({ id: item.id });
                          } else {
							setError("Selecione um tamanho antes de adicionar ao carrinho.");
                          }
                        }}
                      >
                        <div className="flex justify-center gap-2">
                          <CartIcon className="fill-white" />
                          <span>Colocar no Carrinho</span>
                        </div>
				      </Button>}
					  {item.sizes && error && <p className="text-red-500 text-center mt-1">{error}</p>}
                      <button
                        onClick={() => removeFromWishlist({ id: item.id })}
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
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Desejos;
