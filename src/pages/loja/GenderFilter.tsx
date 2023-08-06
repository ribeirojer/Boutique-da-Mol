import React, { useState } from "react";

type Props = { genders: any; onChange: any };

const GenderFilter = ({ genders, onChange }: Props) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender: null) => {
    setSelectedGender(gender);
    onChange(gender);
  };

  return (
    <div className="flex flex-wrap items-center space-x-4">
      <button
        onClick={() => handleGenderChange(null)}
        className={`px-4 py-2 rounded-md border ${
          selectedGender === null
            ? "bg-pink-500 text-white border-pink-500"
            : "bg-gray-200 text-black border-gray-300"
        } focus:outline-none`}
      >
        Todos
      </button>
      {genders.map((gender: any) => (
        <button
          key={gender}
          onClick={() => handleGenderChange(gender)}
          className={`px-4 py-2 rounded-md border ${
            selectedGender === gender
              ? "bg-pink-500 text-white border-pink-500"
              : "bg-gray-200 text-black border-gray-300"
          } focus:outline-none`}
        >
          {gender}
        </button>
      ))}
    </div>
  );
};

export default GenderFilter;
