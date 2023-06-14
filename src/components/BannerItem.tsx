import Image from "next/image";
import React from "react";

type BannerItemProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const BannerItem = ({ title, subtitle, imageUrl }: BannerItemProps) => {
  return (
    <div className="relative bg-white">
      <div className="absolute bottom-0 left-0 p-4">
        <h4 className="text-2xl font-bold">{title}</h4>
        <span className="text-gray-600">{subtitle}</span>
      </div>
      <div className="absolute bottom-0 left-0 bg-gray-100 p-4 hover:bg-gray-200">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-gray-600">{subtitle}</p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Ver produtos
          </a>
        </div>
      </div>
      <Image
        src={imageUrl}
        alt=""
        className="w-full"
        width={500}
        height={300}
      />
    </div>
  );
};

export default BannerItem;
