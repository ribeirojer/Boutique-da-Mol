import React from "react";
import Link from "next/link";

type BannerItemProps = {
  imgSrc: string;
  title: string;
  info: string;
};

const BannerItemV2 = ({ imgSrc, title, info }: BannerItemProps) => {
  return (
    <div className="md:w-1/2 xl:w-1/3 p-4">
      <Link href="/loja">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-lg shadow-pink-200 transition-transform hover:scale-105">
          <img src={imgSrc} alt="IMG-BANNER" className="w-full" />
          <div className="absolute top-0 translate-y-1/2 p-4">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <h3 className="text-[#ab6e78] font-semibold">{info}</h3>
            <button className="dontshowsmall mt-4 text-pink-500 border border-pink-500 hover:text-white hover:bg-pink-500 rounded-lg py-2 px-4 text-center transition-colors duration-300">
              Ver produtos
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BannerItemV2;
