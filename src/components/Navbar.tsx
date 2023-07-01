import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { image: "/img/carousel-1.jpg", text: "10% de desconto" },
    { image: "/img/carousel-2.jpg", text: "30% de desconto" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [items]);

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const currentItem = items[currentIndex];
  return (
    <div className="container flex mx-auto">
      <aside>
        <button
          className="flex items-center justify-between bg-pink-500 text-white rounded-md px-4 py-2 mb-4"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
          >
            <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path>
          </svg>
          <span>Categorias</span>
        </button>
        {open && (
          <nav>
            <ul>
              <li>
                <Link href="/loja">Todos</Link>
              </li>
              <li>
                <Link href="/loja/masculinas">Masculinas</Link>
              </li>
              <li>
                <Link href="/loja/femininas">Femininas</Link>
              </li>
              <li>
                <Link href="/loja/infantil">Infantil</Link>
              </li>
              <li>
                <Link href="/loja/camisas">Camisas</Link>
              </li>
              <li>
                <Link href="/loja/calcas">Calças</Link>
              </li>
              <li>
                <Link href="/loja/blusas">Blusas</Link>
              </li>
              <li>
                <Link href="/loja/bermudas">Bermudas</Link>
              </li>
              <li>
                <Link href="/loja/shorts">Shorts</Link>
              </li>
              <li>
                <Link href="/loja/vestidos">Vestidos</Link>
              </li>
              <li>
                <Link href="/loja/bolsas">Bolsas</Link>
              </li>
              <li>
                <Link href="/loja/bones">Bonés</Link>
              </li>
              <li>
                <Link href="/loja/banho">Roupa de banho</Link>
              </li>
              <li>
                <Link href="/loja/esportivos">Roupa de esporte</Link>
              </li>
              <li>
                <Link href="/loja/pijamas">Pijamas</Link>
              </li>
              <li>
                <Link href="/lojas/jaquetas">Jaquetas</Link>
              </li>
              <li>
                <Link href="/lojas/calcados">Calçados</Link>
              </li>
            </ul>
          </nav>
        )}
      </aside>
      <div className="flex flex-col">
        <nav className="py-3 py-lg-0 px-0">
          <Link href="/">Início</Link>
          <Link href="/loja">Loja</Link>
          <Link href="/carrinho">Carrinho</Link>
          <Link href="/confirmacao">Pagamento</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/login">Entrar</Link>
          <Link href="/register">Registro</Link>
        </nav>
        <div id="slider">
          <button onClick={goToPrevSlide}>Anterior</button>
          <TransitionGroup>
            <CSSTransition key={currentIndex} timeout={500} classNames="slide">
              <img src={currentItem.image} alt="Image1" />
            </CSSTransition>
          </TransitionGroup>
          <button onClick={goToNextSlide}>Próximo</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
