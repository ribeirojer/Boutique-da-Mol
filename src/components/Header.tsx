import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" passHref>
          <Image
            src="/assets/images/logo.png"
            alt={"logo"}
            width={150}
            height={50}
          />
        </Link>
        <nav className="hidden lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0">
          <ul className={`flex space-x-4 ${isMenuOpen ? "flex-col" : ""}`}>
            <li>
              <a href="#top" className="text-gray-800 hover:text-gray-600">
                Início
              </a>
            </li>
            <li>
              <a href="#men" className="text-gray-800 hover:text-gray-600">
                Masculino
              </a>
            </li>
            <li>
              <a href="#women" className="text-gray-800 hover:text-gray-600">
                Feminino
              </a>
            </li>
            <li>
              <a href="#kids" className="text-gray-800 hover:text-gray-600">
                Infantil
              </a>
            </li>
            <li>
              <Link href="/sobre" className="text-gray-800 hover:text-gray-600">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="/produtos"
                className="text-gray-800 hover:text-gray-600"
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-gray-800 hover:text-gray-600"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="#explore"
                className="text-gray-800 hover:text-gray-600"
              >
                Explorar
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative block lg:hidden">
          <button
            type="button"
            className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-600 hover:border-gray-600"
            onClick={toggleMenu}
          >
            <svg
              className={`h-4 w-4 ${isMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 4.5A1.5 1.5 0 0 1 4.5 3h11A1.5 1.5 0 0 1 17 4.5v0a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 4.5v0zM3 9.5A1.5 1.5 0 0 1 4.5 8h11A1.5 1.5 0 0 1 17 9.5v0a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 9.5v0zM3 14.5A1.5 1.5 0 0 1 4.5 13h11A1.5 1.5 0 0 1 17 14.5v0a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5v0z"
              />
              <path
                fillRule="evenodd"
                d="M0 4.5A3.5 3.5 0 0 1 3.5 1h13A3.5 3.5 0 0 1 20 4.5v11a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 0 15.5v-11zM3.5 2A2.5 2.5 0 0 0 1 4.5v11A2.5 2.5 0 0 0 3.5 18h13A2.5 2.5 0 0 0 19 15.5v-11A2.5 2.5 0 0 0 16.5 2h-13zM7 6.5A1.5 1.5 0 0 1 8.5 5h3A1.5 1.5 0 0 1 13 6.5v3A1.5 1.5 0 0 1 11.5 11h-3A1.5 1.5 0 0 1 7 9.5v-3zM8.5 6A.5.5 0 0 0 8 6.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
              />
            </svg>
            <svg
              className={`h-4 w-4 ${isMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.293 10l3.646-3.646a.5.5 0 1 1 .708.708L10.707 10l3.647 3.646a.5.5 0 0 1-.708.708L10 10.707l-3.646 3.647a.5.5 0 0 1-.708-.708L9.293 10z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute mt-4 top-4 bg-white border border-gray-200 shadow-md  p-4 right-0 z-10">
              <ul className="flex flex-col items-center gap-2 w-[90px]">
                <li>
                  <a
                    href="#top"
                    className="block text-gray-800 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#men"
                    className="block text-gray-800 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Masculino
                  </a>
                </li>
                <li>
                  <a
                    href="#women"
                    className="block text-gray-800 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Feminino
                  </a>
                </li>
                <li>
                  <a
                    href="#kids"
                    className="block text-gray-800 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Infantil
                  </a>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className="block text-gray-800 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="/produtos"
                    className="block text-gray-800 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className="block text-gray-800 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="#explore"
                    className="block text-gray-800 hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Explorar
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
