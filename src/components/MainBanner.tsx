import React from "react";
import BannerItem from "./BannerItem";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const MainBanner = (props: Props) => {
  return (
    <div id="top" className="container mx-auto px-4 md:px-0 pt-4 md:pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="banner-wrapper relative">
          <div className="banner-item absolute p-4 flex flex-col items-center justify-center w-full h-full gap-4">
            <span className="text-pink-200 text-center">
              Exclusividade de boutique, precinho camarada
            </span>
            <Link
              href="/loja"
              className="inline-block px-6 py-3 bg-[#00000000] text-pink-200  hover:bg-pink-200 hover:text-black border border-pink-200 rounded-lg"
            >
              Ver Produtos
            </Link>
          </div>
          <Image
            src="/assets/images/left-banner-image.jpg"
            alt=""
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <BannerItem
            title="Feminino"
            imageUrl="/assets/images/baner-right-image-01.jpg"
          />
          <BannerItem
            title="Masculino"
            imageUrl="/assets/images/baner-right-image-02.jpg"
          />
          <BannerItem
            title="Infantil"
            imageUrl="/assets/images/baner-right-image-03.jpg"
          />
          <BannerItem
            title="Acessórios"
            imageUrl="/assets/images/baner-right-image-04.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
