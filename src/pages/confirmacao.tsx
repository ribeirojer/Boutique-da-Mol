import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import InputsCheckout from "@/components/InputsCheckout";
import { productsData } from "@/utils/cardsData";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./_app";
import { formatCurrency, hasTrueFields, validateCheckoutData } from "@/utils";
import Button from "@/components/Button";

type Props = {};

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  addressLine1: string;
  addressLine2: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  createAccount: boolean;
  shipToDifferentAddress: boolean;
}

const Confirmacao = (props: Props) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    address: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    mobileNo: "",
    addressLine1: "",
    addressLine2: "",
    createAccount: false,
    shipToDifferentAddress: false,
  });
  const { cartItems } = useContext(UserContext);
  const [paymentInfo, setPaymentInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    logradouro: "",
    numberAddress: "",
    complemento: "",
    bairro: "",
    city: "",
    state: "",
    tel: "",
  });
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    logradouro: "",
    numberAddress: "",
    complemento: "",
    bairro: "",
    city: "",
    state: "",
    tel: "",
  });
  const [errorPaymentInfo, setErrorPaymentInfo] = useState({
    firstName: false,
    lastName: false,
    email: false,
    zipCode: false,
    logradouro: false,
    numberAddress: false,
    complemento: false,
    bairro: false,
    city: false,
    state: false,
    tel: false,
    paymentMethod: false,
    termsAgreed: false,
  });
  const [errorShippingInfo, setErrorShippingInfo] = useState({
    firstName: false,
    lastName: false,
    email: false,
    zipCode: false,
    logradouro: false,
    numberAddress: false,
    complemento: false,
    bairro: false,
    city: false,
    state: false,
    tel: false,
  });
  const [errorEmailRegex, setErrorEmailRegex] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShippingAddress, setIsShippingAddress] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  async function handleSubmitCep(event: any) {
    event.preventDefault();
    const response = await fetch(
      `https://brasilapi.com.br/api/cep/v1/${event.target.value}`
    );
    const data = await response.json();
    setPaymentInfo({
      ...paymentInfo,
      zipCode: data.cep,
      logradouro: data.street,
      bairro: data.neighborhood,
      city: data.city,
      state: data.state,
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const data = {
      paymentInfo,
      createAccount,
      password,
      confirmPassword,
      isShippingAddress,
      shippingInfo,
      additionalInfo,
      paymentMethod,
      termsAgreed,
      shippingCost,
      totalPrice,
    };
    const errors = validateCheckoutData({
      ...data.paymentInfo,
      paymentMethod,
      termsAgreed,
      createAccount,
      password,
      confirmPassword,
    });
    setErrorPaymentInfo(errors);
    setErrorEmailRegex(errors.emailRegex);
    setErrorPassword(errors.password);
    setErrorConfirmPassword(errors.confirmPassword);
    const isValid = hasTrueFields(errors);
    console.log(isValid);
  }

  const sumCartItems = () => {
    let sum = 0;
    cartItems.forEach((item: any) => {
      sum += item.quantity * productsData[item.id - 1].price;
    });
    return sum;
  };
  const shipping = sumCartItems() > 100;

  return (
    <>
      <Header></Header>
      <main className="container mx-auto pt-8 flex flex-col md:flex-row gap-8 px-4 md:px-0">
        <div className="w-full md:w-2/3">
          <InputsCheckout
            title="Endereço de Cobrança"
            info={paymentInfo}
            setInfo={setPaymentInfo}
            errorInfo={errorPaymentInfo}
            errorEmailRegex={errorEmailRegex}
            handleSubmitCep={handleSubmitCep}
          ></InputsCheckout>
          <div className="checkbox mt-4 flex items-center">
            <input
              id="create-account"
              type="checkbox"
              checked={createAccount}
              onChange={(e: any) => setCreateAccount(e.target.checked)}
            />
            <label htmlFor="create-account" className="drac-text">
              Criar conta?
            </label>
          </div>
          {createAccount && (
            <div className="flex w-full flex-col md:flex-row gap-4">
              <Input
                id="password"
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <Input
                id="confirmpassword"
                label="Confirme a senha"
                type="password"
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e: any) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}
          <div className="checkbox mt-4 flex items-center">
            <input
              id="shiping-address"
              color="purple"
              type="checkbox"
              checked={isShippingAddress}
              onChange={(e: any) => setIsShippingAddress(e.target.checked)}
            />
            <label htmlFor="shiping-address" className="drac-text">
              Enviar para um endereço diferente?
            </label>
          </div>
          {isShippingAddress && (
            <>
              <div className="h-8 md:h-12"></div>
              <InputsCheckout
                title="Endereço para envio"
                info={shippingInfo}
                setInfo={setShippingInfo}
                errorInfo={errorShippingInfo}
                errorEmailRegex={errorEmailRegex}
                handleSubmitCep={handleSubmitCep}
              ></InputsCheckout>
            </>
          )}
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="" className="font-semibold">
              Informações adicionais (opcional)
            </label>
            <textarea
              placeholder="Digite aqui as informaçães adicionais"
              value={additionalInfo}
              rows={5}
              className="w-full border border-pink-300 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-gray-700 shadow-sm transition duration-150 ease-in-out rounded-lg p-2"
              onChange={(e: any) => setAdditionalInfo(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="w-full md:w-1/3 border border-pink-300 rounded-lg p-4 shadow-sm shadow-pink-500 bg-pink-50">
          <div className="mb-8">
            <h2 className="font-semibold text-2xl text-center mb-2">
              Seu Pedido
            </h2>
            <div className="card-body">
              <h5 className="font-semibold mb-4">Produtos</h5>
              {cartItems.map((product: any) => (
                <div className="flex justify-between">
                  <p>{productsData[product.id - 1].name}</p>
                  <p>{product.quantity}</p>
                  <p>{formatCurrency(productsData[product.id - 1].price)}</p>
                  <p>
                    {formatCurrency(
                      product.quantity * productsData[product.id - 1].price
                    )}
                  </p>
                </div>
              ))}
              <hr className="mt-0" />
              <div className="flex justify-between mb-3 pt-1">
                <h6 className="font-semibold">Subtotal</h6>
                <h6 className="font-semibold">
                  {formatCurrency(sumCartItems())}
                </h6>
              </div>
              <div className="flex justify-between">
                <h6 className="font-semibold">Envio</h6>
                <h6 className="font-semibold">
                  {shipping ? "Grátis" : formatCurrency(10)}
                </h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="flex justify-between mt-2">
                <h5 className="text-pink-500 text-2xl font-bold">Total</h5>
                <h5 className="text-pink-500 text-2xl font-bold">
                  {shipping
                    ? formatCurrency(sumCartItems())
                    : formatCurrency(sumCartItems() + 10)}
                </h5>
              </div>
            </div>
          </div>
          <div className="payment-method">
            <div className="radio">
              <input
                type="radio"
                id="payment-1"
                color="purple"
                checked={paymentMethod === "Transferência bancária direta"}
                onChange={() =>
                  setPaymentMethod("Transferência bancária direta")
                }
              />
              <label htmlFor="payment-1">Transferência bancária direta</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="payment-2"
                color="purple"
                checked={paymentMethod === "Pagamento por Pix"}
                onChange={() => setPaymentMethod("Pagamento por Pix")}
              />
              <label htmlFor="payment-2">Pagamento por Pix</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="payment-3"
                color="purple"
                checked={paymentMethod === "Sistema Paypal"}
                onChange={() => setPaymentMethod("Sistema Paypal")}
              />
              <label htmlFor="payment-3">Sistema Paypal</label>
            </div>
            {errorPaymentInfo.paymentMethod && (
              <p className="text-red-500">
                Selecione um método de pagamento.
              </p>
            )}
          </div>
          <div className="checkbox mt-4 flex items-center">
            <input
              id="terms"
              color="purple"
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
            />
            <label htmlFor="terms">
              Eu li e aceito os <a target={"_blank"}>termos e condições</a>
            </label>
            {errorPaymentInfo.termsAgreed && (
              <p className="text-red-500">
                É preciso aceitar os termos e condições.
              </p>
            )}
          </div>
          <form onSubmit={(e:any)=>handleSubmit(e)} className="my-4 flex w-full">
            <Button type="submit" className="w-full">
              Finalizar Pedido
            </Button>
          </form>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Confirmacao;
