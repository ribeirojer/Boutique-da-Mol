import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./_app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsData } from "@/utils/cardsData";
import { formatCurrency, formatDateTime } from "@/utils";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { CheckoutService } from "@/services/CheckoutService";

type Props = {};

type OrderItem = {
  name: string;
  qty: number;
  _id: string;
};

type ShippingAddress = {
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

type OrderDetails = {
  shippingAddress: ShippingAddress;
  _id: string;
  user: string;
  orderItems: OrderItem[];
  paymentMethod: string;
  taxPrice: number | null;
  shippingPrice: number | null;
  totalPrice: number | null;
  isPaid: boolean | null;
  paidAt: Date | null;
  isDelivered: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

const Sucesso = (props: Props) => {
  const { orderLink, linkMeli } = useContext(UserContext);
  const [orderDetails, setOrderDetails] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    async function fetchOrderDetails() {
      if (!orderLink) {
        console.error("Order link is null or empty.");
        return;
      }

      try {
        const response = await CheckoutService.getOrderById(orderLink);
        setOrderDetails(response);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    }

    fetchOrderDetails();
  }, []);

  if (!orderDetails) {
    return <p className="text-center mt-8">Aguarde...</p>;
  }
  const currentDate = new Date();

  return (
    <>
      <Header />
      <main className="container mx-auto py-10 px-4 md:px-0">
        {orderLink ? (
          <>
            <h1 className="text-4xl font-bold mb-6">
              Pedido realizado com sucesso!
            </h1>
            <p className="text-lg mb-6">
              Obrigado por sua compra. Enviaremos um e-mail quando o pedido for
              aprovado.
            </p>
            <p className="text-lg mb-6">
              Link para pagamento pelo Mercado Livre:{" "}
              <a
                href={linkMeli}
                target="_black"
                className="text-blue-500 underline hover:text-pink-500 transition-all"
              >
                Clique aqui
              </a>
            </p>
            <div className="border-t-2 border-gray-300 py-6">
              <h2 className="text-2xl font-bold mb-4">Detalhes da Ordem:</h2>
              <div className="md:flex md:flex-wrap">
                <div className="mb-2 md:w-1/2">
                  <p>
                    <strong className="font-semibold">Número do pedido:</strong>{" "}
                    {orderLink}
                  </p>
                  <p>
                    <strong className="font-semibold">Data:</strong>{" "}
                    {
                      formatDateTime(
                        currentDate
                      ) /*orderLink.createdAt as Date*/
                    }
                  </p>
                  <p>
                    <strong className="font-semibold">
                      Endereço de Entrega:
                    </strong>{" "}
                    {orderDetails.shippingAddress?.address}
                  </p>
                </div>
                <div className="mb-2 md:w-1/2">
                  <p>
                    <strong className="font-semibold">Cidade:</strong>{" "}
                    {orderDetails.shippingAddress?.city}
                  </p>
                  <p>
                    <strong className="font-semibold">CEP:</strong>{" "}
                    {orderDetails.shippingAddress?.postalCode}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      Método de Pagamento:
                    </strong>{" "}
                    {orderDetails.paymentMethod}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-gray-300 py-6">
              <h2 className="text-2xl font-bold mb-4">Resumo da Compra:</h2>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-left border-b border-gray-300">
                      <th className="px-4 py-2 font-medium text-gray-700 uppercase">
                        Produtos
                      </th>
                      <th className="px-4 py-2 font-medium text-gray-700 uppercase">
                        Preço
                      </th>
                      <th className="px-4 py-2 font-medium text-gray-700 uppercase">
                        Quantidade
                      </th>
                      <th className="px-4 py-2 font-medium text-gray-700 uppercase">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails?.orderItems?.map((item: any) => (
                      <tr key={item.id} className="border-b border-gray-300">
                        <td className="px-4 py-2">
                          {productsData[item.name].name}
                        </td>
                        <td className="px-4 py-2">
                          {productsData[item.name].price}
                        </td>
                        <td className="px-4 py-2">{item.qty}</td>
                        <td className="px-4 py-2">
                          {productsData[item.name].price * item.qty}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-gray-300">
                      <td className="py-3 px-6 font-bold uppercase">Total:</td>
                      <td className="py-3 px-6 font-bold">
                        {orderDetails?.total}
                      </td>
                      <td className="py-3 px-6" colSpan={2}></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/">
                <Button>Voltar para a página inicial</Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center mt-8">
            <p>Houve um problema ao carregar os detalhes do pedido.</p>
            <p className="mb-4">
              Por favor, tente novamente mais tarde ou entre em contato conosco.
            </p>
            <Link href="/">
              <Button>Voltar para a página inicial</Button>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Sucesso;
