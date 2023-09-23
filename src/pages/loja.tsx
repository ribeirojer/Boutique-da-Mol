import CardProduct from "@/components/CardProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Pagination from "@/components/Pagination";
import { productsData } from "@/utils/cardsData";
import React, { useEffect, useState } from "react";
import GenderFilter from "@/components/GenderFilter";
import PriceFilter from "@/components/PriceFilter";
import SizeFilter from "@/components/SizeFilter";
import ColorFilter from "@/components/ColorFilter";
import { useRouter } from "next/router";

type Props = {};

const Loja = (props: Props) => {
  const router = useRouter();
  const { category, search } = router.query;
  const [products, setProducts] = useState(productsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [productsPerPage, setProductsPerPage] = useState(6);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);
  let filtersQuantidy = 0; //priceFilter.priceAll ? 1 : 0;
  /*filtersQuantidy = colorFilter.colorAll
    ? filtersQuantidy + 1
    : filtersQuantidy;
  filtersQuantidy = sizeFilter.sizeAll ? filtersQuantidy + 1 : filtersQuantidy;
  */const colors = ["red", "blue", "green", "black", "yellow", "purple"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const genders = ["M", "F", "Unisex"];

  const handleChangePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = ({ min, max }: any) => {
    const filtered = productsData.filter(
      (product) => product.price >= min && product.price <= max
    );
    setProducts(filtered);
  };

  const handleColorChange = (selectedColors: string | any[]) => {
    const filtered = products.filter((product) =>
      selectedColors.includes(product.color)
    );
    setProducts(filtered);
  };

  const handleSizeChange = (selectedSizes: string | any[]) => {
    const filtered = products.filter((product) =>
      selectedSizes.includes(product.size)
    );
    setProducts(filtered);
  };

  const handleGenderChange = (selectedGender: any) => {
    const filtered =
      selectedGender === null
        ? products
        : products.filter((product) => product.gender === selectedGender);
    setProducts(filtered);
  };

  useEffect(() => {
    setProducts(
      productsData.filter((product: any) => {
        if (product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return product;
        }
      })
    );
  }, [searchQuery]);

  useEffect(() => {
	  if(search) {
	  setSearchQuery(search as string)
	  }
  }, []);

  return (
    <>
      <Header></Header>
      <main className="container mx-auto pt-8 flex px-4 md:px-0">
        <div className="hidden md:block w-full lg:w-1/4">
          <h5 className="font-semibold mb-4">Filtrar pelo preço</h5>
          <PriceFilter
            minPrice={0}
            maxPrice={100}
            onChange={handleFilterChange}
          />
		  
                  <div className="flex flex-col gap-2">
                    <p>Filtrar por genero:</p>
                    <GenderFilter
                      genders={genders}
                      onChange={handleGenderChange}
                    />
                  </div>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="flex w-full md:hidden items-center justify-between gap-4 mb-4">
            <form action="" className="relative flex w-4/5">
              <Input
                id="search"
                type="text"
                placeholder="Pesquisar pelo nome"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-gray-400 absolute top-2 right-2 z-10"
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
            </form>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center border border-gray-500 p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700 transition duration-150 ease-in-out"
            >
              {filtersQuantidy > 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-gray-500"
                >
                  <path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"></path>
                </svg>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-gray-500"
                  >
                    <path d="M13 20v-4.586L20.414 8c.375-.375.586-.884.586-1.415V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.585c0 .531.211 1.04.586 1.415L11 15.414V22l2-2z"></path>
                  </svg>
                  <span>{ filtersQuantidy }</span>
                </>
			  )}
            </button>
            {isModalOpen && (
              <>
                <div
                  className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-75 z-40"
                  onClick={() => setIsModalOpen(false)}
                ></div>
                <div className="text-sm w-11/12 fixed top-4 flex flex-col gap-5 justify-center z-50 bg-white rounded-lg p-4">
                  <span
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-gray-800"
                    >
                      <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                    </svg>
                  </span>
                  <h2 className="text-xl text-center font-bold">Filtros</h2>
                  <div className="flex flex-col gap-2">
                    <p>Ordenar por:</p>
                    <select
                      className="w- flex bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 ring-pink-500"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="Latest">Mais recente</option>
                      <option value="Popularity">Popularidade</option>
                      <option value="BestRating">Melhor avaliação</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Filtrar por preço:</p>
                    <PriceFilter
                      minPrice={0}
                      maxPrice={200}
                      onChange={handleFilterChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Filtrar por genero:</p>
                    <GenderFilter
                      genders={genders}
                      onChange={handleGenderChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Filtrar por tamanho:</p>
                    <SizeFilter sizes={sizes} onChange={handleSizeChange} />
                  </div>
                </div>
              </>
            )}
          </div>
          <section>
            {search && <p className="mb-4">Você pesquisou por: {search}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentProducts.map((item) => (
                <CardProduct key={item.id} item={item} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handleChangePage}
            ></Pagination>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Loja;
