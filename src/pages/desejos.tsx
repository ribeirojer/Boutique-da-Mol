import Button from "@/components/Button";
import Header from "@/components/Header";
import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "./_app";
import Footer from "@/components/Footer";

type Props = {};

const desejos = (props: Props) => {
  const { wishlist } = useContext(UserContext);

  return (
    <>
      <Header></Header>
      <main className="container mx-auto flex gap-8 px-4 md:px-0 flex-col md:flex-row mt-8">
        {wishlist.length > 0 ? (
          <>
            <div className="my-8 flex flex-col items-center justify-center w-full h-full gap-8">
              <h1 className="text-4xl font-bold">Carrinho de desejos</h1>
              <div>
                {wishlist.map((item: any) => {
                  return (
                    <div key={item.id}>
                      {item.name}
                      {item.price}
                      {item.image}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="my-8 flex flex-col items-center justify-center w-full h-full gap-8">
            <h1 className="text-4xl font-bold">Lista de desejos vazia</h1>
            <p>Selecione produtos para adicionar aos seus desejos</p>
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

export default desejos;
