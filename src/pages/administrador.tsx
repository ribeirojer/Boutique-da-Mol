import Header from "@/components/Header";
import useFetch from "@/hooks/useFetch";
import React, { useContext, useState } from "react";
import { UserContext } from "./_app";
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

type Props = {};

const Administrador = (props: Props) => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <Header></Header>
      {!user ? (
        <main className="container mx-auto px-4 md:px-0 my-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Painel administrativo
          </h1>
          <div>
            <h2>Gerenciar Produtos</h2>
            <div>
              <Button >Cadastrar</Button>
              <Button>Ver</Button>
              <Button>Editar</Button>
              <Button>Excluir</Button>
            </div>
          </div>
          <p>Esta es la pagina de administrador</p>
        </main>
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <svg
            className="animate-spin h-12 w-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-50 text-white"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="text-pink-500 opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7."
            ></path>
          </svg>
        </div>
      )}
      {isShowModal && (
        <Modal
          closeModal={null}
          functionToExecute={null}
          title="Deletar"
          description="Tem certeza que dese"
        ></Modal>
      )}
      {isLoading && <Loading></Loading>}
      <Footer></Footer>
    </>
  );
};

export default Administrador;
