import React from "react";

type Props = {
  priceFilter: any;
  handlePriceFilter: any;
  colorFilter: any;
  handleColorFilter: any;
  sizeFilter: any;
  handleSizeFilter: any;
};

const Filters = ({
  priceFilter,
  handlePriceFilter,
  colorFilter,
  handleColorFilter,
  sizeFilter,
  handleSizeFilter,
}: Props) => {
  return (
    <>
      <div className="mb-4 pb-4">
        <h5 className="font-semibold mb-4">Filtrar pelo preço</h5>
        <form>
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between mb-3">
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
          <div className="checkbox_confirmacao flex items-center justify-between">
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
    </>
  );
};

export default Filters;
