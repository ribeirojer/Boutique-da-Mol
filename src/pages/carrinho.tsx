import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useContext } from "react";
import { UserContext } from "./_app";
import { productsData } from "@/utils/cardsData";
import Image from "next/image";

type Props = {};

const Carrinho = (props: Props) => {
  const { cartItems, removeFromCart } = useContext(UserContext);
  console.log(cartItems);

  return (
    <>
      <Header></Header>
      <main className="container mx-auto flex flex-col md:flex-row mt-8">
        <div className="w-full md:w-2/3 mb-5">
          <table className="table table-bordered text-center mb-0">
            <thead className="bg-secondary text-dark">
              <tr>
                <th className="w-1/3">Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {cartItems.map((item: any) => {
                return (
                  <tr key={item.id} className="w-full">
                    <td className="w-1/3 flex">
                      <Image
                        src={productsData[item.id - 1].image}
                        alt="imagem do produto"
                        width={100}
                        height={100}
                      />
                      {productsData[item.id - 1].name}
                    </td>
                    <td className="align-middle">
                      {productsData[item.id - 1].price}
                    </td>
                    <td className="align-middle">
                      <button className="btn btn-sm btn-primary btn-minus">
                        <i className="fa fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-secondary text-center"
                        value={productsData[item.id - 1].quantidy}
                      />
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-sm btn-primary btn-plus"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-1/3">
          <form className="mb-5" action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="Coupon Code"
              />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form>
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium">$150</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$10</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">$160</h5>
              </div>
              <button className="btn btn-block btn-primary my-3 py-3">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Carrinho;
