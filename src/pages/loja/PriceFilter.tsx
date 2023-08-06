import Button from "@/components/Button";
import React, { useState } from "react";

type Props = { minPrice: number; maxPrice: number; onChange: any };

const PriceFilter = ({ minPrice, maxPrice, onChange }: Props) => {
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  return (
    <div className="flex items-center space-x-4">
      <input
        type="number"
        min={minPrice}
        max={maxPrice}
        value={minValue}
        onChange={(e) => setMinValue(parseFloat(e.target.value))}
        className="w-16 px-4 py-2 rounded-md border focus:outline-none focus:border-pink-500"
      />
      <span className="text-gray-600">até</span>
      <input
        type="number"
        min={minPrice}
        max={maxPrice}
        value={maxValue}
        onChange={(e) => setMaxValue(parseFloat(e.target.value))}
        className="w-16 px-4 py-2 rounded-md border focus:outline-none focus:border-pink-500"
      />
      <Button onClick={() => onChange({ min: minValue, max: maxValue })}>
        Filtrar
      </Button>
    </div>
  );
};

export default PriceFilter;
