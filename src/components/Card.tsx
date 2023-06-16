import { ClothingItem } from "@/Interfaces/Clothes";
import Image from "next/image";
import React from "react";

type Props = {
  item: ClothingItem;
};

const Card = ({ item }: Props) => {
  return (
    <div className="w-full pr-4 md:w-1/2 xl:w-1/4">
      <div className="mb-10 overflow-hidden rounded-lg bg-white">
        <Image
          src={item.imageUrl || ""}
          alt="image"
          className="w-full"
          width={500}
          height={300}
        />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href="javascript:void(0)"
              className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {item.name}
            </a>
          </h3>
          <p className="text-body-color mb-7 text-base leading-relaxed">
            {item.description}
          </p>
          <p className="text-body-color mb-7 text-base leading-relaxed">
            {item.price}
          </p>
          <a
            href="javascript:void(0)"
            className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
