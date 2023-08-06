import React, { useState } from "react";

type Props = {
  genders: string[];
  onChange: any;
};

const GenderFilter = ({ genders, onChange }: Props) => {
  const [selectedGender, setSelectedGender] = useState("");

  function handleGenderChange(gender: string) {
    setSelectedGender(gender);
    onChange(gender);
  }

  return (
    <div className="flex flex-wrap items-center space-x-4">
      <button
        onClick={() => handleGenderChange("")}
        className={`px-4 py-2 rounded-md border ${
          selectedGender === ""
            ? "bg-pink-500 text-white border-pink-500"
            : "bg-gray-200 text-black border-gray-300"
        } focus:outline-none`}
      >
        Todos
      </button>
      {genders.map((gender: string) => (
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
