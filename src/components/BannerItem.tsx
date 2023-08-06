import Image from "next/image";
import Link from "next/link";
import React from "react";

type BannerItemProps = {
  title: string;
  imageUrl: string;
};

const BannerItem = ({ title, imageUrl }: BannerItemProps) => {
  return (
    <Link href="/loja" aria-label="Ver produtos">
      <div className="banner-item-wrapper relative bg-white">
        <div className="banner-item-content absolute bottom-0 left-0 p-4 flex flex-col items-center justify-center w-full h-full gap-2">
          <h4 className="text-2xl font-bold text-pink-200">{title}</h4>
          <Link
            href="/loja"
            aria-label="Ver produtos"
            className="hidden md:block px-6 py-3 bg-[#00000000] text-pink-200  hover:bg-pink-200 hover:text-black border border-pink-200 rounded-lg"
          >
            Ver produtos
          </Link>
        </div>
        <Image
          src={imageUrl}
          alt="imagem banner item"
          className="w-full rounded-lg"
          width={500}
          height={300}
        />
      </div>
    </Link>
  );
};

export default BannerItem;
