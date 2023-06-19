import CardProduct from "@/components/CardProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import { productsData } from "@/utils/cardsData";
import React, { useState } from "react";

type Props = {};

const Loja = (props: Props) => {
  const [products, setProducts] = useState(productsData);
  const [priceFilter, setPriceFilter] = useState({
    priceAll: true,
    price1: false,
    price2: false,
    price3: false,
    price4: false,
    price5: false,
  });

  const [colorFilter, setColorFilter] = useState({
    colorAll: true,
    color1: false,
    color2: false,
    color3: false,
    color4: false,
    color5: false,
  });

  const [sizeFilter, setSizeFilter] = useState({
    sizeAll: true,
    size1: false,
    size2: false,
    size3: false,
    size4: false,
    size5: false,
  });
  const [currentPage, setCurrentPage] = useState(1); // página atual
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [productsPerPage, setProductsPerPage] = useState(6);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const handleSearch2 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  const handleSortBy = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSortBy(event.target.value);
  };

  const handlePriceFilter = (event: {
    target: { name: any; checked: any };
  }) => {
    const { name, checked } = event.target;
    setPriceFilter((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleColorFilter = (event: {
    target: { name: any; checked: any };
  }) => {
    const { name, checked } = event.target;
    setColorFilter((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSizeFilter = (event: { target: { name: any; checked: any } }) => {
    const { name, checked } = event.target;
    setSizeFilter((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleChangePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto pt-8 flex ">
        <div className="w-full lg:w-1/4">
          <div className="mb-4 pb-4">
            <h5 className="font-semibold mb-4">Filtrar pelo preço</h5>
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={priceFilter.priceAll}
                  id="price-all"
                  onChange={handlePriceFilter}
                  value="price-all"
                  name="priceAll"
                />
                <label className="custom-control-label" htmlFor="price-all">
                  Todos Preços
                </label>
                <span className="badge border font-weight-normal">1000</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={priceFilter.price1}
                  id="price-1"
                  onChange={handlePriceFilter}
                  value="price-1"
                  name="price1"
                />
                <label className="custom-control-label" htmlFor="price-1">
                  $0 - $100
                </label>
                <span className="badge border font-weight-normal">150</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={priceFilter.price2}
                  id="price-2"
                  onChange={handlePriceFilter}
                  value="price-2"
                  name="price2"
                />
                <label className="custom-control-label" htmlFor="price-2">
                  $100 - $200
                </label>
                <span className="badge border font-weight-normal">295</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={priceFilter.price3}
                  id="price-3"
                  onChange={handlePriceFilter}
                  value="price-3"
                  name="price3"
                />
                <label className="custom-control-label" htmlFor="price-3">
                  $200 - $300
                </label>
                <span className="badge border font-weight-normal">246</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={priceFilter.price4}
                  id="price-4"
                  onChange={handlePriceFilter}
                  value="price-4"
                  name="price4"
                />
                <label className="custom-control-label" htmlFor="price-4">
                  $300 - $400
                </label>
                <span className="badge border font-weight-normal">145</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={priceFilter.price5}
                  id="price-5"
                  onChange={handlePriceFilter}
                  value="price-5"
                  name="price5"
                />
                <label className="custom-control-label" htmlFor="price-5">
                  $400 - $500
                </label>
                <span className="badge border font-weight-normal">168</span>
              </div>
            </form>
          </div>
          <div className="border-bottom mb-4 pb-4">
            <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={colorFilter.colorAll}
                  id="color-all"
                  onChange={handleColorFilter}
                  value="color-all"
                  name="colorAll"
                />
                <label className="custom-control-label" htmlFor="color-all">
                  All Color
                </label>
                <span className="badge border font-weight-normal">1000</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={colorFilter.color1}
                  id="color-1"
                  onChange={handleColorFilter}
                  value="color-1"
                  name="color1"
                />
                <label className="custom-control-label" htmlFor="color-1">
                  Black
                </label>
                <span className="badge border font-weight-normal">150</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={colorFilter.color2}
                  id="color-2"
                  onChange={handleColorFilter}
                  value="color-2"
                  name="color2"
                />
                <label className="custom-control-label" htmlFor="color-2">
                  White
                </label>
                <span className="badge border font-weight-normal">295</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={colorFilter.color3}
                  id="color-3"
                  onChange={handleColorFilter}
                  value="color-3"
                  name="color3"
                />
                <label className="custom-control-label" htmlFor="color-3">
                  Red
                </label>
                <span className="badge border font-weight-normal">246</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={colorFilter.color4}
                  id="color-4"
                  onChange={handleColorFilter}
                  value="color-4"
                  name="color4"
                />
                <label className="custom-control-label" htmlFor="color-4">
                  Blue
                </label>
                <span className="badge border font-weight-normal">145</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={colorFilter.color5}
                  id="color-5"
                  onChange={handleColorFilter}
                  value="color-5"
                  name="color5"
                />
                <label className="custom-control-label" htmlFor="color-5">
                  Green
                </label>
                <span className="badge border font-weight-normal">168</span>
              </div>
            </form>
          </div>
          <div className="mb-5">
            <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={sizeFilter.sizeAll}
                  id="size-all"
                  onChange={handleSizeFilter}
                  value="size-all"
                  name="sizeAll"
                />
                <label className="custom-control-label" htmlFor="size-all">
                  All Size
                </label>
                <span className="badge border font-weight-normal">1000</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={sizeFilter.size1}
                  id="size-1"
                  onChange={handleSizeFilter}
                  value="size-1"
                  name="size1"
                />
                <label className="custom-control-label" htmlFor="size-1">
                  XS
                </label>
                <span className="badge border font-weight-normal">150</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={sizeFilter.size2}
                  id="size-2"
                  onChange={handleSizeFilter}
                  value="size-2"
                  name="size2"
                />
                <label className="custom-control-label" htmlFor="size-2">
                  S
                </label>
                <span className="badge border font-weight-normal">295</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={sizeFilter.size3}
                  id="size-3"
                  onChange={handleSizeFilter}
                  value="size-3"
                  name="size3"
                />
                <label className="custom-control-label" htmlFor="size-3">
                  M
                </label>
                <span className="badge border font-weight-normal">246</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={sizeFilter.size4}
                  id="size-4"
                  onChange={handleSizeFilter}
                  value="size-4"
                  name="size4"
                />
                <label className="custom-control-label" htmlFor="size-4">
                  L
                </label>
                <span className="badge border font-weight-normal">145</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={sizeFilter.size5}
                  id="size-5"
                  onChange={handleSizeFilter}
                  value="size-5"
                  name="size5"
                />
                <label className="custom-control-label" htmlFor="size-5">
                  XL
                </label>
                <span className="badge border font-weight-normal">168</span>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <form action="" className="relative flex">
              <input
                type="text"
                className="flex w-full bg-gray-100 rounded-lg px-4 py-2"
                placeholder="Pesquisar pelo nome"
                value={searchQuery}
                onChange={handleSearch2}
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
            <select
              className="flex bg-gray-100 rounded-lg px-4 py-2"
              value={sortBy}
              onChange={handleSortBy}
            >
              <option value="Latest">Mais recente</option>
              <option value="Popularity">Popularidade</option>
              <option value="BestRating">Melhor avaliação</option>
            </select>
          </div>
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
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Loja;
