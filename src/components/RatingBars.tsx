import React from "react";

type Props = {
  ratings: { stars: number; count: number }[];
};

const RatingBars = ({ ratings }: Props) => {
  function calcularSomaDeCount(arr: any[]) {
    // Use reduce para somar todos os valores 'count'
    const soma = arr.reduce((total, item) => total + item.count, 0);
    return soma;
  }
  const soma = calcularSomaDeCount(ratings);

  return (
    <section>
      {ratings.map((rating, index) => (
        <div key={index} className="mb-4">
          <div>
            <div className="flex mb-1">
              <span className="font-bold mr-1">{rating.stars}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-gray-500"
              >
                <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
              </svg>

              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                {rating.count} Avaliações
              </span>
            </div>
          </div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between"></div>
            <div className="w-full bg-gray-200 rounded">
              <div
                style={{ width: `${(rating.count / soma) * 100}%` }}
                className="h-2 bg-teal-500 rounded"
              ></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RatingBars;
