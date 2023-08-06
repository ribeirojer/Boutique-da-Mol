import React, { useState } from "react";

type Props = { colors: string[]; onChange: any };

const ColorFilter = ({ colors, onChange }: Props) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleColorChange = (color: string) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(updatedColors);
    onChange(updatedColors);
  };

  return (
    <div className="flex items-center space-x-4">
      {colors.map((color: any) => (
        <button
          key={color}
          onClick={() => handleColorChange(color)}
          className={`w-8 h-8 rounded-full border ${
            selectedColors.includes(color)
              ? `bg-${color === "black" ? "black" : color + "-500"} border-${
                  color === "black" ? "black" : color + "-500"
                } `
              : "bg-gray-200 border-gray-300"
          } focus:outline-none`}
        />
      ))}
    </div>
  );
};

export default ColorFilter;
