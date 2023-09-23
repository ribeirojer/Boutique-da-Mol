import Button from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Stars from "@/components/Stars";
import ItemDescription from "@/components/ItemDescription";
import { productsData } from "@/utils/cardsData";
import Image from "next/image";
import { UserContext } from "@/pages/_app";
import {
  limitarDescricao,
  formatCurrency,
  traduzirCor,
  primeiraLetraMaiuscula,
} from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import { FacebookIcon, InstagramIcon, WhatsappIcon, CartIconPlus, CartIconBold } from "@/components/Icons";

type Props = {};

const Item = (props: Props) => {
  const { addToCart, cartItems } = useContext(UserContext);
  const router = useRouter();
  const index = parseInt(router.query.index as string);
  const itemToShow = productsData[index - 1];
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState("")
  const [quantity, setQuantity] = useState(1);
  const shareUrl = `${router.pathname}/produto?produtoId=${itemToShow}`;
  const limiteDescricao = 150; // Limite de caracteres para a descrição
  const isProductInCart = cartItems.some(
    (item: any) => item.id === itemToShow.id
  );
  const handleAddToCart = () => {
	        setError((prev)=>"");

	  if(itemToShow.sizes){
    if (selectedSize) {
      addToCart({
        id: itemToShow.id,
        quantity,
        size: selectedSize,
      });
    } else {
      setError("Selecione um tamanho antes de adicionar ao carrinho.");
	  }
	  } else {
      addToCart({
        id: itemToShow.id,
	  quantity,})
	  }
  };

  return (
    <>
      <Header></Header>
      <div className="container px-4 md:px-0 py-8 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            {itemToShow?.image && (
              <Image
                src={itemToShow.image}
                alt="Image1"
                width={500}
                height={500}
                className="border border-pink-200 rounded-lg"
              />
            )}
          </div>
          <div className="pb-8 w-full md:w-1/2">
            <h2 className="text-3xl font-bold my-4">{itemToShow?.name}</h2>
            <div className="flex gap-2 mb-4">
              <Stars rating={4}></Stars>
              <p>({itemToShow?.reviews.length} Avaliações)</p>
            </div>
			<div className="flex gap-2">
				<h3 className="text-xl text-pink-500 font-semibold mb-4">
				  {itemToShow?.price.toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				  })}
			    </h3>
				<h3 className="text-lg line-through text-gray-400 mb-4">
				  {itemToShow?.oldPrice.toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				  })}
				</h3>			
			</div>
            {/*<p className="mb-4">{limitarDescricao(itemToShow?.description, limiteDescricao)}</p>*/}
            <p className="mb-4">
              {itemToShow?.description.substring(0, limiteDescricao) + "..."}
            </p>
            <div className="flex flex-col mb-4">
			{itemToShow?.sizes && <p className="font-semibold mb-4">Tamanhos:</p>}
              <form className="flex flex-col gap-2">
              <div className="flex gap-4">
                {itemToShow?.sizes?.map(
                  (size: string, index: React.Key | null | undefined) => (
                    <div key={index} className="">
                      <input
                        type="radio"
                        className="hidden"
                        id={`size-${index}`}
                        name="size"
                        value={size}
                        checked={selectedSize === size}
                        onChange={(event) =>
                          setSelectedSize(event.target.value)
                        }
                      />
                      <label
                        className={`px-4 py-3 rounded-full cursor-pointer ${
                          selectedSize === size
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                        htmlFor={`size-${index}`}
                      >
                        {size}
                      </label>
                    </div>
                  )
                )}
				</div>
				{error && <p className="text-red-500 mt-2">{error}</p>}
              </form>
            </div>

            <div className="flex flex-col mb-4">
              <p className="font-semibold mb-2">Cores:</p>
              <form className="flex gap-4">
                {itemToShow?.color.map((color: string, index: any) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      className="hidden"
                      id={`color-${index}`}
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={(event) => setSelectedColor(event.target.value)}
                    />
                    <label
                      className={`border border-gray-200 px-4 py-2 rounded-full cursor-pointer ${
                        selectedColor === color
                          ? `bg-${color} text-black border-xl border-gray-500`
                          : "bg-gray-200 text-gray-700"
                      }`}
                      htmlFor={`color-${index}`}
                    >
                      {primeiraLetraMaiuscula(traduzirCor(color))}
                    </label>
                  </div>
                ))}
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pt-2">
              <div className="flex items-center mr-3 gap-2">
                <Button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={!quantity}
                >
                  -
                </Button>
                <input
                  type="text"
                  className="bg-gray-100 border-0 w-16 text-center focus:outline-none"
                  value={quantity}
                />
                <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
              </div>
              {!isProductInCart && (
                <Button onClick={handleAddToCart}>
                  <div className="flex gap-2 justify-center">
                    <CartIconPlus className="fill-white" />
                    <span>Adicionar ao carrinho</span>
                  </div>
                </Button>
              )}
              {isProductInCart && (
                <Button onClick={() => router.push("/confirmacao")}>
                  <div className="flex gap-2 justify-center">
                    <CartIconBold className="fill-white" />
                    <span>Finalizar compra</span>
                  </div>
                </Button>
              )}
            </div>
            <div className="flex items-center pt-2">
              <p className="font-semibold m-2">COMPARTILHAR:</p>
              <div className="flex gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={`https://instagram.com/p/${shareUrl}/?utm_source=ig_web_copy_link`}
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <a href={`https://www.whatsapp.com`} target="_blank">
                  <WhatsappIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <ItemDescription itemToShow={itemToShow}></ItemDescription>
      </div>
      <h2 className="py-8 text-2xl text-center font-semibold">
        Você pode gostar
      </h2>
      <div className="container px-4 md:px-0 py-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productsData.slice(0, 4).map((product) => (
          <CardProduct key={product.id} item={product} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Item;
