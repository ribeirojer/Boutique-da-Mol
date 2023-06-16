import React from "react";
import BannerItem from "./BannerItem";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const MainBanner = (props: Props) => {
  return (
    <div id="top" className="container mx-auto pt-[166px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="banner-wrapper relative">
          <div className="banner-item absolute p-4 flex flex-col items-center justify-center w-full h-full gap-4">
            <h4 className="text-3xl font-bold text-white">Boutique da Moh</h4>
            <span className="text-white">
              Awesome, clean &amp; creative HTML5 Template
            </span>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-[#00000000] text-[#ffffff]  hover:bg-white hover:text-black border border-white"
            >
              Ver Produtos
            </Link>
          </div>
          <Image
            src="/assets/images/left-banner-image.jpg"
            alt=""
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <BannerItem
            title="Women"
            subtitle="Best Clothes For Women"
            imageUrl="/assets/images/baner-right-image-01.jpg"
          />
          <BannerItem
            title="Men"
            subtitle="Best Clothes For Men"
            imageUrl="/assets/images/baner-right-image-02.jpg"
          />
          <BannerItem
            title="Kids"
            subtitle="Best Clothes For Kids"
            imageUrl="/assets/images/baner-right-image-03.jpg"
          />
          <BannerItem
            title="Accessories"
            subtitle="Best Trend Accessories"
            imageUrl="/assets/images/baner-right-image-04.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
