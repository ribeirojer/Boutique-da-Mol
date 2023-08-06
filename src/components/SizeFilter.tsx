import React, { useState } from "react";

type Props = {
  sizes: string[];
  onChange: any;
};

const SizeFilter = ({ sizes, onChange }: Props) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  function handleSizeChange(size: string) {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s: string) => s !== size)
      : [...selectedSizes, size];

    setSelectedSizes(updatedSizes);
    onChange(updatedSizes);
  }

  return (
    <div className="flex items-center space-x-4">
      {sizes.map((size: string) => (
        <button
          key={size}
          onClick={() => handleSizeChange(size)}
          className={`px-4 py-2 rounded-md border ${
            selectedSizes.includes(size)
              ? "bg-pink-500 text-white border-pink-500"
              : "bg-gray-200 text-black border-gray-300"
          } focus:outline-none`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeFilter;
