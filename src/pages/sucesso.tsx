import React, { useContext } from "react";
import { UserContext } from "./_app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsData } from "@/utils/cardsData";
import { formatCurrency } from "@/utils";
import Button from "@/components/Button";
import Link from "next/link";

type Props = {};

const Sucesso = (props: Props) => {
  const { cartItems } = useContext(UserContext);
  const currentDate = new Date();
  const total = cartItems.reduce((acc: any, item: any) => {
    return acc + productsData[item.id - 1].price * item.quantity;
  }, 0);

  return (
    <>
      <Header></Header>
      <main className="container mx-auto py-10 px-4 md:px-0">
        <h1 className="text-4xl font-bold mb-6">
          Pedido realizado com sucesso!
        </h1>
        <p className="text-lg mb-6">
          Obrigado por sua compra. Seu pedido foi feito com sucesso.
        </p>
        <div className="border-t-2 border-gray-300 py-6">
          <h2 className="text-2xl font-bold mb-4">Detalhes da Ordem:</h2>
          <p>
            <strong>Número do pedido:</strong> #123456
          </p>
          <p>
            <strong>Data:</strong> {currentDate.toDateString()}
          </p>
        </div>
        <div className="border-t-2 border-gray-300 py-6">
          <h2 className="text-2xl font-bold mb-4">Resumo da Compra:</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="w-1/4 text-center py-2 px-2 bg-gray-100 font-medium text-gray-700 uppercase">
                  Produtos
                </th>
                <th className="w-1/4 text-center py-2 px-2 bg-gray-100 font-medium text-gray-700 uppercase">
                  Preço
                </th>
                <th className="w-1/4 text-center py-2 px-2 bg-gray-100 font-medium text-gray-700 uppercase">
                  Quantidade
                </th>
                <th className="w-1/4 text-center py-2 px-2 bg-gray-100 font-medium text-gray-700 uppercase">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item: any) => (
                <tr key={item.id} className="border-b border-gray-300">
                  <td className="w-1/4 text-center py-2 px-2">
                    {productsData[item.id - 1].name}
                  </td>
                  <td className="w-1/4 text-center py-2 px-2">
                    {formatCurrency(productsData[item.id - 1].price)}
                  </td>
                  <td className="w-1/4 text-center py-2 px-2">
                    {item.quantity}
                  </td>
                  <td className="w-1/4 text-center py-2 px-2">
                    {formatCurrency(
                      productsData[item.id - 1].price * item.quantity
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-300">
                <td className="py-3 px-6 font-bold uppercase">Total:</td>
                <td className="py-3 px-6 font-bold">{formatCurrency(total)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <Link href="/">
            <Button>Voltar para a página inicial</Button>
          </Link>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Sucesso;
