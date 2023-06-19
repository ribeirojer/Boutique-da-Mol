import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-100 mt-8 pt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <Link href="/" className="text-decoration-none">
            <h1 className="mb-4 display-5 font-weight-semi-bold">
              <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                E
              </span>
              Shopper
            </h1>
          </Link>
          <p>Exclusividade de boutique, precinho camarada </p>
          <p className="mb-2">XV de Novembro, Joinville, SC</p>
          <p className="mb-2">contato@boutiquedamoh.com</p>
          <p className="mb-0">(47) 98765-4321 </p>
        </div>
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
        <div className="col-md-4 mb-5">
          <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control border-0 py-4"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control border-0 py-4"
                placeholder="Seu email"
                required
              />
            </div>
            <div>
              <button
                className="btn btn-primary btn-block border-0 py-3"
                type="submit"
              >
                Inscreva-se
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row border-top border-light mx-xl-5 py-4">
        <p className="mb-md-0 text-center text-md-left text-dark">
          &copy; Boutique da Moh - Todos os direitos reservados
          <br />
          Desenvolvido com <span className="text-blue-700">
            &hearts;
          </span> por{" "}
          <a className="" href="https://ferratagroup.com.br.com">
            F3rrata Group
          </a>
        </p>
        <img className="img-fluid" src="img/payments.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
