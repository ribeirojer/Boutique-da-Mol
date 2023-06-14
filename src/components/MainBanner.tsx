import React from "react";
import BannerItem from "./BannerItem";
import Image from "next/image";

type Props = {};

const MainBanner = (props: Props) => {
  return (
    <div id="top" className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative bg-white">
          <div className="absolute p-4">
            <h4 className="text-2xl font-bold">We Are Hexashop</h4>
            <span className="text-gray-600">
              Awesome, clean &amp; creative HTML5 Template
            </span>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Purchase Now!
              </a>
            </div>
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
