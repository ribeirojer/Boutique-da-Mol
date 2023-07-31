import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { AuthService } from "@/services/AuthService";
import Loading from "./Loading";

type Props = {};

const Footer = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    emailRegex: "",
    general: "",
  });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const closeSuccess = () => {
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name) {
      setError({ ...error, name: "Por favor digite seu nome." });
      nameRef.current?.focus();
      return;
    }
    if (formData.name.length < 3 || formData.name.length > 50) {
      setError({ ...error, name: "Por favor digite entre 3 e 50 caracteres." });
      nameRef.current?.focus();
      return;
    }
    if (!formData.email) {
      setError({ ...error, email: "Por favor digite seu email." });
      emailRef.current?.focus();
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError({ ...error, email: "Formato de email inválido." });
      emailRef.current?.focus();
      return;
    }

    setLoading(true);
    AuthService.newsletter(formData)
      .then((response) => {
        setLoading(false);
        console.log(response);
        setFormData({ name: "", email: "" });
        setError({ ...error, general: "" });
        setSuccess("Inscrição realizada com sucesso!");
        closeSuccess();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setSuccess("");
        setError({
          ...error,
          general: "Ocorreu um erro ao realizar a inscrição.",
        });
      });
  };

  return (
    <footer className="bg-gray-100 mt-8 pt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="mb-5 pr-3">
          <Link href="/" className="flex items-center">
            <Image
              src={"/logo-sem-bg.png"}
              alt="logo"
              width={100}
              height={100}
            ></Image>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">Boutique</h1>
              <h2 className="logo_text text-3xl font-extrabold text-[#884447]">
                da MOH
              </h2>
            </div>
          </Link>
          <div className="flex flex-col justify-start gap-2 mt-2">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center hover:text-pink-500 hover:fill-pink-500 hover:font-semibold transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
                <path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
              </svg>
              <span>XV de Novembro, nº 000, Glória, Joinville, SC</span>
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center hover:text-pink-500 hover:fill-pink-500 hover:font-semibold transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8v1c0 .692-.313 2-1.5 2-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0 0 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621.524.89 1.408 1.621 2.838 1.621 2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"></path>
              </svg>
              <span>contato@boutiquedamoh.com</span>
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center hover:text-pink-500 hover:fill-pink-500 hover:font-semibold transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
              </svg>
              <span>(47) 98765-4321</span>
            </a>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="mb-4 ml-4">
            <h5 className="font-bold mb-4">Links Rápidos</h5>
            <div className="flex flex-col justify-start">
              <Link href="/loja">Roupas</Link>
              <Link href="/loja/calcados">Calçados</Link>
              <Link href="/loja/banho">Roupas de Banho</Link>
              <Link href="/loja/acessorios">Acessörios</Link>
              <Link href="/loja/masculino">Masculino</Link>
              <Link href="/loja/feminino">Feminino</Link>
              <Link href="/loja/infantil">Infantil</Link>
            </div>
          </div>
          <div className="mb-4 ml-4">
            <h5 className="font-bold mb-4">Links Rápidos</h5>
            <div className="flex flex-col justify-start">
              <Link href="/">Início</Link>
              <Link href="/loja">Loja</Link>
              <Link href="/contato">Contato</Link>
              <Link href="/carrinho">Carrinho</Link>
              <Link href="/checkout">Checkout</Link>
              <Link href="/login">Login</Link>
              <Link href="/cadastro">Cadastro</Link>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h5 className="text-center font-bold mb-4">Newsletter</h5>
          <form onSubmit={handleSubmit} className="flex flex-col w-4/5 items-end gap-4">
            <div className="flex flex-col justify-center gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  className=" border-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Seu nome"
                  ref={nameRef}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setError({ ...error, name: "" });
                  }}
                />
                {error.name && (
                  <span className="text-red-500 mt-1">{error.name}</span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className=" border-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  ref={emailRef}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setError({ ...error, email: "" });
                  }}
                />
                {error.email && (
                  <span className="text-red-500 mt-1">{error.email}</span>
                )}
                {error.emailRegex && (
                  <span className="text-red-500 mt-1">{error.emailRegex}</span>
                )}
              </div>
              <button className="px-8 py-4 bg-pink-500 hover:bg-pink-400 text-white rounded-lg">
                Inscrever
              </button>
            </div>
            {loading && <Loading></Loading>}
            {error.general && (
              <span className="text-red-500 mt-1 text-center">
                {error.general}
              </span>
            )}
            {success && (
              <span className="text-green-500 text-center">{success}</span>
            )}
          </form>
        </div>
      </div>
      <p className="text-center pb-8">
        &copy; Boutique da Moh - Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
