import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useContext, useRef, useState } from "react";
import { UserContext } from "./_app";
import { productsData } from "@/utils/cardsData";
import Image from "next/image";
import { formatCurrency } from "@/utils";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import axios from "axios";

type Props = {};

const Carrinho = (props: Props) => {
  const [cupomCode, setCupomCode] = useState("");
  const [cupomValue, setCupomValue] = useState(0);
  const cupomRef = useRef<HTMLInputElement | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { cartItems, addToCart, removeFromCart } = useContext(UserContext);

  const sumCartItems = () => {
    let sum = 0;
    cartItems.forEach((item: any) => {
      sum += item.quantity * productsData[item.id - 1].price;
    });
    return sum;
  };

  const closeSuccessMessage = () => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const shipping = sumCartItems() > 100;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsApplying(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (cartItems.length === 0) {
      setErrorMessage("O carrinho está vazio.");
      cupomRef.current?.focus();
      setIsApplying(false);
      return;
    }
    if (cupomCode.length === 0) {
      setErrorMessage("Informe o código do cupom.");
      cupomRef.current?.focus();
      setIsApplying(false);
      return;
    }
    if (cupomCode.length > 10) {
      setErrorMessage("O código do cupom deve ter até 10 caracteres.");
      cupomRef.current?.focus();
      setIsApplying(false);
      return;
    }
    if (cupomCode.length < 10) {
      setErrorMessage("O código do cupom deve ter 10 caracteres.");
      cupomRef.current?.focus();
      setIsApplying(false);
      return;
    }

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/cupom",
        { code: cupomCode }
      );

      if (response.status === 200) {
        setSuccessMessage("Cupom aplicado!");
        setCupomValue(response.data.discount);
        closeSuccessMessage();
      } else {
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      setErrorMessage("Ocorreu um erro ao processar a requisição.");
    }

    setIsApplying(false);
    setCupomCode("");
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto flex gap-8 px-4 md:px-0 flex-col md:flex-row mt-8">
        {cartItems.length > 0 ? (
          <>
            <div className="w-full md:w-2/3 mb-5">
              <table className="text-sm md:text-base table-fixed w-full bg-white border border-gray-200">
                <thead className="bg-secondary text-dark">
                  <tr>
                    <th className="w-1/4 md:w-1/5 py-2 px-4">Produto</th>
                    <th className="w-1/4 md:w-1/5 py-2 px-4">Preço</th>
                    <th className="w-1/4 md:w-1/5 py-2 px-4">Quantidade</th>
                    <th className="hidden md:block w-1/5 py-2 px-4">Total</th>
                    <th className="w-1/4 md:w-1/5 py-2 px-4">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item: any) => {
                    return (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="w-1/5 py-2 px-4 flex items-center">
                          <Image
                            src={productsData[item.id - 1].image}
                            alt="imagem do produto"
                            width={100}
                            height={100}
                            className="mr-2"
                          />
                          <span>{productsData[item.id - 1].name}</span>
                        </td>
                        <td className="w-1/5 py-2 px-4 text-center">
                          {formatCurrency(productsData[item.id - 1].price)}
                        </td>
                        <td className="w-1/5 py-2 px-4 flex">
                          <div className="hidden md:block">
                            <Button
                              disabled={item.quantity === 0}
                              onClick={() =>
                                addToCart({ id: item.id, quantity: -1 })
                              }
                            >
                              -
                            </Button>
                          </div>
                          <input
                            className="w-12 text-center text-black bg-gray-200 rounded-md mx-2"
                            id="quantity"
                            type="number"
                            value={item.quantity}
                            disabled
                          />
                          <div className="hidden md:block">
                            <Button
                              onClick={() =>
                                addToCart({ id: item.id, quantity: 1 })
                              }
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td className="hidden md:block w-1/5 py-2 px-4 text-center">
                          {formatCurrency(
                            productsData[item.id - 1].price * item.quantity
                          )}
                        </td>
                        <td className="w-1/5 py-2 px-4">
                          <Button
                            onClick={() => removeFromCart(item.id)}
                            disabled={isApplying}
                            type="button"
                            title="Excluir item do carrinho"
                            aria-label="Excluir item do carrinho"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="fill-white"
                            >
                              <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                              <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                            </svg>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="w-full md:w-1/3">
              <form onSubmit={handleSubmit} className="mb-5 w-full" action="">
                <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
                  <div className="w-full md:w-3/5">
                    <Input
                      type="text"
                      placeholder="Código do cupom"
                      value={cupomCode}
                      onChange={(e) => setCupomCode(e.target.value)}
                      id={"cupom"}
                    />
                  </div>
                  <Button type="submit" disabled={isApplying}>
                    {isApplying ? "Aplicando..." : "Aplicar Cupom"}
                  </Button>
                </div>
                {errorMessage && (
                  <p className="text-center md:text-left text-red-500 mt-1">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="text-center md:text-left text-green-500 mt-1">{successMessage}</p>
                )}
              </form>
              <div className="border border-gray-200 p-4 rounded-lg my-8">
                <h4 className="text-xl text-center font-semibold mb-4">
                  Resumo do carrinho
                </h4>
                <div className="card-body">
                  <div className="flex justify-between mb-3 pt-1">
                    <h6 className="font-base">Subtotal</h6>
                    <h6 className="font-base">
                      {formatCurrency(sumCartItems())}
                    </h6>
                  </div>
                  <div className="flex justify-between">
                    <h6 className="font-semibold">Envio</h6>
                    <h6 className="font-semibold">
                      {shipping ? "Grátis" : formatCurrency(10)}
                    </h6>
                  </div>
                  {cupomValue && (
                    <div className="flex justify-between">
                      <h6 className="font-semibold">Cupom</h6>
                      <h6 className="font-semibold">
                        -{formatCurrency(cupomValue)}
                      </h6>
                    </div>
                  )}
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <div className="flex justify-between mt-2">
                    <h5 className="text-2xl text-pink-500 font-bold">Total</h5>
                    <h5 className="text-2xl text-pink-500 font-bold">
                      {shipping
                        ? formatCurrency(sumCartItems() - cupomValue)
                        : formatCurrency(sumCartItems() + 10 - cupomValue)}
                    </h5>
                  </div>
                  <Link
                    href={"/confirmacao"}
                    className="flex justify-center mt-4"
                  >
                    <Button>Prosseguir para o Checkout</Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="my-8 flex flex-col items-center justify-center w-full h-full gap-8">
            <h1 className="text-4xl font-bold">Carrinho vazio</h1>
            <p>Adicione itens ao seu carrinho para prosseguir.</p>
            <Link href={"/loja"}>
              <Button>Voltar para a loja</Button>
            </Link>
          </div>
        )}
      </main>
      <Footer></Footer>
    </>
  );
};

export default Carrinho;
