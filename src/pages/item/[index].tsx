import Button from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ItemDescription from "@/components/ItemDescription";
import { productsData } from "@/utils/cardsData";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

type Props = {};

const Item = (props: Props) => {
  const router = useRouter();
  const index = parseInt(router.query.index as string);
  const itemToShow = productsData[index - 1];
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const shareUrl = `${router.pathname}/produto?produtoId=${itemToShow}`;

  // useEffect(() => {
  //    const intervalId = setInterval(() => {
  //      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  //    }, 4000);
  //    return () => clearInterval(intervalId);
  // }, [items]);

  // const goToPrevSlide = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + items.length) % items.length
  //   );
  // };

  // const goToNextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  // };

  return (
    <>
      <Header></Header>
      <div className="container px-4 md:px-0 py-8 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <div id="slider" className="overflow-hidden">
              {/* <button onClick={goToPrevSlide}>Anterior</button> */}
              {/* <TransitionGroup>
                <CSSTransition
                  key={currentIndex}
                  timeout={500}
                  classNames="slide"
                > */}
              {itemToShow?.image && (
                <Image
                  src={itemToShow.image}
                  alt="Image1"
                  width={500}
                  height={500}
                />
              )}
              {/* </CSSTransition>
              </TransitionGroup> */}
              {/* <button onClick={goToNextSlide}>Próximo</button> */}
            </div>
          </div>
          <div className="pb-8 w-full md:w-1/2">
            <h3 className="font-weight-semi-bold">{itemToShow?.name}</h3>
            <div className="d-flex mb-3">
              <div className="text-primary mr-2">
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star-half-alt"></small>
                <small className="far fa-star"></small>
              </div>
              <small className="pt-1">
                ({itemToShow?.reviews.length} Avaliaçães)
              </small>
            </div>
            <h3 className="font-weight-semi-bold mb-4">{itemToShow?.price}</h3>
            <p className="mb-4">{itemToShow?.description}</p>
            <div className="d-flex mb-3">
              <p className="text-dark font-weight-medium mb-0 mr-3">
                Tamanhos:
              </p>
              <form className="flex gap-4">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-1"
                    name="size"
                    value="XS"
                    checked={selectedSize === "XS"}
                    onChange={(event) => setSelectedSize(event.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="size-1">
                    XS
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-2"
                    name="size"
                    value="S"
                    checked={selectedSize === "S"}
                    onChange={(event) => setSelectedSize(event.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="size-2">
                    S
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-3"
                    name="size"
                    value="M"
                    checked={selectedSize === "M"}
                    onChange={(event) => setSelectedSize(event.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="size-3">
                    M
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-4"
                    name="size"
                    value="G"
                    checked={selectedSize === "G"}
                    onChange={(event) => setSelectedSize(event.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="size-4">
                    G
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-5"
                    name="size"
                    value="GG"
                    checked={selectedSize === "GG"}
                    onChange={(event) => setSelectedSize(event.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="size-5">
                    GG
                  </label>
                </div>
              </form>
            </div>
            <div className="d-flex mb-4">
              <p className="text-dark font-weight-medium mb-0 mr-3">Cores:</p>
              <form className="flex gap-4">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-1"
                    name="color"
                    value="Preto"
                    checked={selectedColor === "Preto"}
                    onChange={(event) => setSelectedColor(event.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="color-1">
                    Preto
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-2"
                    name="color"
                    value="Branco"
                    checked={selectedColor === "Branco"}
                    onChange={(event) => setSelectedColor(event.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="color-2">
                    Branco
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-3"
                    name="color"
                    value="Vermelho"
                    checked={selectedColor === "Vermelho"}
                    onChange={(event) => setSelectedColor(event.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="color-3">
                    Vermelho
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-4"
                    name="color"
                    value="Azul"
                    checked={selectedColor === "Azul"}
                    onChange={(event) => setSelectedColor(event.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="color-4">
                    Azul
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-5"
                    name="color"
                    value="Verde"
                    checked={selectedColor === "Verde"}
                    onChange={(event) => setSelectedColor(event.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="color-5">
                    Verde
                  </label>
                </div>
              </form>
            </div>
            <div className="flex items-center mb-4 pt-2">
              <div className="flex flex-row justify-center items-center mr-3 gap-2">
                <Button>-</Button>
                <input
                  type="text"
                  className="bg-gray-100 border-0 w-16 text-center focus:outline-none"
                  placeholder="1"
                  readOnly
                  // onChange={handleQuantityChange}
                  // value={quantity}
                />
                <Button>+</Button>
              </div>
              <Button>
                <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
              </Button>
            </div>
            <div className="d-flex pt-2">
              <p className="text-dark font-weight-medium mb-0 mr-2">
                COMPARTILHAR:
              </p>
              <div className="flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                  >
                    <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareUrl}`}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
                  // &title=${/*title*/}&summary=${/*description*/}&source`}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                  >
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                  </svg>
                </a>
                <a
                  href={`https://instagram.com/p/${shareUrl}/?utm_source=ig_web_copy_link`}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ItemDescription itemToShow={itemToShow}></ItemDescription>
      </div>
      <h2 className="py-8 text-2xl text-center font-semibold">Você pode gostar</h2>
      <div className="container px-4 md:px-0 py-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productsData.slice(0, 4).map((product) => (
          <CardProduct key={product.id} item={product} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Item;
