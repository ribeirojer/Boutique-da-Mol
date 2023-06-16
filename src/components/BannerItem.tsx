import Image from "next/image";
import Link from "next/link";
import React from "react";

type BannerItemProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const BannerItem = ({ title, subtitle, imageUrl }: BannerItemProps) => {
  return (
    <div className="banner-item-wrapper relative bg-white">
      <div className="banner-item-content absolute bottom-0 left-0 p-4 flex flex-col items-center justify-center w-full h-full">
        <h4 className="text-2xl font-bold text-white">{title}</h4>
        <p className="text-white">{subtitle}</p>
        <Link
          href="/products"
          aria-label="Ver produtos"
          className="inline-block px-6 py-3 bg-[#00000000] text-[#ffffff]  hover:bg-white hover:text-black border border-white"
        >
          Ver produtos
        </Link>
      </div>
      <Image
        src={imageUrl}
        alt="imagem banner item"
        className="w-full"
        width={500}
        height={300}
      />
    </div>
  );
};

export default BannerItem;
