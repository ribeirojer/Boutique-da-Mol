import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useContext, useRef, useState } from "react";
import { UserContext } from "./_app";
import { productsData } from "@/utils/cardsData";
import { formatCurrency } from "@/utils";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import axios from "axios";
import Loading from "@/components/Loading";
import CartProductTable from "@/components/CartProductTable";

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
            <CartProductTable />
            <div className="w-full md:w-1/3">
              <form onSubmit={handleSubmit} className="mb-5 w-full" action="">
                <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
                  <div className="w-full md:w-3/5">
                    <Input
                      type="text"
                      placeholder="Código do cupom"
                      value={cupomCode}
                      inputRef={cupomRef}
                      onChange={(e) => setCupomCode(e.target.value)}
                      id={"cupom"}
                    />
                  </div>
                  <Button type="submit" disabled={isApplying}>
                    {isApplying ? "Aplicando..." : "Aplicar Cupom"}
                  </Button>
                </div>
                {errorMessage && (
                  <p className="text-center md:text-left text-red-500 mt-1">
                    {errorMessage}
                  </p>
                )}
                {successMessage && (
                  <p className="text-center md:text-left text-green-500 mt-1">
                    {successMessage}
                  </p>
                )}
              </form>
              <div className="flex flex-col border border-gray-200 p-4 rounded-lg my-8">
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
                  {cupomValue > 0 && (
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
                </div>
                  <Link
                    href={"/confirmacao"}
className="w-full bg-green-500 mt-4 flex justify-center hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"

>
                    Fechar o Carrinho
                  </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="my-8 flex flex-col items-center justify-center w-full h-full gap-8">
            <h1 className="text-4xl font-bold">Carrinho vazio</h1>
            <p className="text-center">
              Adicione itens ao seu carrinho para prosseguir.
            </p>
            <Link href={"/loja"}>
              <Button>Ver produtos</Button>
            </Link>
          </div>
        )}
      </main>
      {isApplying && <Loading></Loading>}
      <Footer></Footer>
    </>
  );
};

export default Carrinho;
