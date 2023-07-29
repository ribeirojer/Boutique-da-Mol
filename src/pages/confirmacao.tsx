import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import InputsCheckout from "@/components/InputsCheckout";
import { productsData } from "@/utils/cardsData";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "./_app";
import { formatCurrency, hasTrueFields, validateCheckoutData } from "@/utils";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { CheckoutService } from "@/services/CheckoutService";
import Loading from "@/components/Loading";

type Props = {};

const Confirmacao = (props: Props) => {
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
  const [isLoading, setIsLoading] = useState(false);
  const paymentInfoRefFirstName = useRef<HTMLInputElement | null>(null);
  const paymentInfoRefLastName = useRef<HTMLInputElement | null>(null);
  const paymentInfoRefEmail = useRef<HTMLInputElement | null>(null);
  const paymentInfoRefZipCode = useRef<HTMLInputElement | null>(null);
  const paymentInfoRefLogradouro = useRef<HTMLInputElement | null>(null);
  const paymentInfoRefNumberAddress = useRef<HTMLInputElement | null>(null);
  const paymentInfoRefComplemento = useRef<HTMLInputElement | null>(null);
  const paymentInfoRefBairro = useRef<HTMLInputElement | null>(null);
  const paymentInfoRefCity = useRef<HTMLInputElement | null>(null);
  const paymentInfoRefState = useRef<HTMLInputElement | null>(null);
  const paymentInfoRefTel = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefFirstName = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefLastName = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefEmail = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefZipCode = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefLogradouro = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefNumberAddress = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefComplemento = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefBairro = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefCity = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefState = useRef<HTMLInputElement | null>(null);
  const shippingInfoRefTel = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
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

  async function handleSubmit(event: any) {
    event.preventDefault();
    setErrorPaymentInfo((prev) => ({
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
    }));
    setErrorShippingInfo((prev) => ({
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
    }));
    setErrorEmailRegex(false);
    setErrorPassword(false);
    setErrorConfirmPassword(false);

    if (paymentInfo.firstName === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        firstName: true,
      }));
      paymentInfoRefFirstName.current?.focus();
      return;
    }
    if (paymentInfo.lastName === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        lastName: true,
      }));
      paymentInfoRefLastName.current?.focus();
      return;
    }
    if (paymentInfo.email === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        email: true,
      }));
      paymentInfoRefEmail.current?.focus();
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(paymentInfo.email)) {
      setErrorEmailRegex(true);
      paymentInfoRefEmail.current?.focus();
      return;
    }
    if (paymentInfo.tel === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        tel: true,
      }));
      paymentInfoRefTel.current?.focus();
      return;
    }
    if (paymentInfo.zipCode === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        zipCode: true,
      }));
      paymentInfoRefZipCode.current?.focus();
      return;
    }
    if (paymentInfo.logradouro === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        logradouro: true,
      }));
      paymentInfoRefLogradouro.current?.focus();
      return;
    }
    if (paymentInfo.numberAddress === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        numberAddress: true,
      }));
      paymentInfoRefNumberAddress.current?.focus();
      return;
    }
    if (paymentInfo.complemento === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        complemento: true,
      }));
      paymentInfoRefComplemento.current?.focus();
      return;
    }
    if (paymentInfo.bairro === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        bairro: true,
      }));
      paymentInfoRefBairro.current?.focus();
      return;
    }
    if (paymentInfo.city === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        city: true,
      }));
      paymentInfoRefCity.current?.focus();
      return;
    }
    if (paymentInfo.state === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        state: true,
      }));
      paymentInfoRefState.current?.focus();
      return;
    }
    if (createAccount) {
      if (password === "") {
        setErrorPassword(true);
        passwordRef.current?.focus();
        return;
      }
      if (confirmPassword === "") {
        setErrorConfirmPassword(true);
        confirmPasswordRef.current?.focus();
        return;
      }
      if (password !== confirmPassword) {
        confirmPasswordRef.current?.focus();
        return;
      }
    }
    if (isShippingAddress) {
      if (shippingInfo.firstName === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          firstName: true,
        }));
        shippingInfoRefFirstName.current?.focus();
        return;
      }
      if (shippingInfo.lastName === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          lastName: true,
        }));
        shippingInfoRefLastName.current?.focus();
        return;
      }
      if (shippingInfo.email === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          email: true,
        }));
        shippingInfoRefEmail.current?.focus();
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(shippingInfo.email)) {
        setErrorEmailRegex(true);
        shippingInfoRefEmail.current?.focus();
        return;
      }
      if (shippingInfo.tel === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          tel: true,
        }));
        shippingInfoRefTel.current?.focus();
        return;
      }
      if (shippingInfo.zipCode === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          zipCode: true,
        }));
        shippingInfoRefZipCode.current?.focus();
        return;
      }
      if (shippingInfo.logradouro === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          logradouro: true,
        }));
        shippingInfoRefLogradouro.current?.focus();
        return;
      }
      if (shippingInfo.numberAddress === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          numberAddress: true,
        }));
        shippingInfoRefNumberAddress.current?.focus();
        return;
      }
      if (shippingInfo.complemento === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          complemento: true,
        }));
        shippingInfoRefComplemento.current?.focus();
        return;
      }
      if (shippingInfo.bairro === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          bairro: true,
        }));
        shippingInfoRefBairro.current?.focus();
        return;
      }
      if (shippingInfo.city === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          city: true,
        }));
        shippingInfoRefCity.current?.focus();
        return;
      }
      if (shippingInfo.state === "") {
        setErrorShippingInfo((prev) => ({
          ...prev,
          state: true,
        }));
        shippingInfoRefState.current?.focus();
        return;
      }
    }
    if (paymentMethod === "") {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        paymentMethod: true,
      }));
      return;
    }
    if (!termsAgreed) {
      setErrorPaymentInfo((prev) => ({
        ...prev,
        termsAgreed: true,
      }));
      return;
    }

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
    };
    setIsLoading(true);
    CheckoutService.placeOrder(
      paymentInfo,
      shippingInfo,
      additionalInfo,
      createAccount,
      password,
      confirmPassword,
      paymentMethod,
      cartItems
    )
      .then((response) => {
        setIsLoading(false);
        if (response.link) {
          router.push("/sucesso", undefined, {
            shallow: true,
            locale: "pt-BR",
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        alert("Erro ao finalizar pedido");
      });
  }

  const sumCartItems = () => {
    let sum = 0;
    cartItems.forEach((item: any) => {
      sum += item.quantity * productsData[item.id - 1].price;
    });
    return sum;
  };
  const shipping = sumCartItems() > 100;
  const paymentInfoRefs = {
    firstName: paymentInfoRefFirstName,
    lastName: paymentInfoRefLastName,
    email: paymentInfoRefEmail,
    zipCode: paymentInfoRefZipCode,
    logradouro: paymentInfoRefLogradouro,
    numberAddress: paymentInfoRefNumberAddress,
    complemento: paymentInfoRefComplemento,
    bairro: paymentInfoRefBairro,
    city: paymentInfoRefCity,
    state: paymentInfoRefState,
    tel: paymentInfoRefTel,
  };
  const shippingInfoRefs = {
    firstName: shippingInfoRefFirstName,
    lastName: shippingInfoRefLastName,
    email: shippingInfoRefEmail,
    zipCode: shippingInfoRefZipCode,
    logradouro: shippingInfoRefLogradouro,
    numberAddress: shippingInfoRefNumberAddress,
    complemento: shippingInfoRefComplemento,
    bairro: shippingInfoRefBairro,
    city: shippingInfoRefCity,
    state: shippingInfoRefState,
    tel: shippingInfoRefTel,
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto pt-8 flex flex-col md:flex-row gap-8 px-4 md:px-0">
        <div className="relative w-full md:w-2/3">
          <InputsCheckout
            title="Endereço de Cobrança"
            info={paymentInfo}
            setInfo={setPaymentInfo}
            errorInfo={errorPaymentInfo}
            refsInfo={paymentInfoRefs}
            errorEmailRegex={errorEmailRegex}
            handleSubmitCep={handleSubmitCep}
          ></InputsCheckout>
          <div className="checkbox_confirmacao mt-4 flex items-center">
            <input
              id="create-account"
              type="checkbox"
              checked={createAccount}
              onChange={(e: any) => setCreateAccount(e.target.checked)}
            />
            <label htmlFor="create-account">Criar conta?</label>
          </div>
          {createAccount && (
            <>
              <div className="flex w-full flex-col md:flex-row gap-4">
                <Input
                  id="password"
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                  error={errorPassword}
                  inputRef={passwordRef}
                />
                <Input
                  id="confirmpassword"
                  label="Confirme a senha"
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e: any) => setConfirmPassword(e.target.value)}
                  error={errorConfirmPassword}
                  inputRef={confirmPasswordRef}
                />
              </div>
              {confirmPassword !== password && (
                <p className="text-red-500 mt-2">As senhas não conferem</p>
              )}
            </>
          )}
          <div className="checkbox_confirmacao mt-4 flex items-center">
            <input
              id="shiping-address"
              color="purple"
              type="checkbox"
              checked={isShippingAddress}
              onChange={(e: any) => setIsShippingAddress(e.target.checked)}
            />
            <label htmlFor="shiping-address">
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
                refsInfo={shippingInfoRefs}
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
              <p className="text-red-500">Selecione um método de pagamento.</p>
            )}
          </div>
          <div className="relative">
            <div className="checkbox_confirmacao mt-4 flex items-center">
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
            </div>
            {errorPaymentInfo.termsAgreed && (
              <p className="text-red-500 mt-2">
                É preciso aceitar os termos e condições.
              </p>
            )}
          </div>
          <form
            onSubmit={(e: any) => handleSubmit(e)}
            className="my-4 flex w-full"
          >
            <Button type="submit" className="w-full">
              Finalizar Pedido
            </Button>
          </form>
        </div>
      </main>
      {isLoading && <Loading></Loading>}
      <Footer></Footer>
    </>
  );
};

export default Confirmacao;
