import React, { useRef } from "react";
import { useContext, useState } from "react";
import { AuthService } from "../services/AuthService";
import { emailRegex, hasTrueFields, passwordRegex } from "../utils";
import { UserContext } from "./_app";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {};

const Entrar = (props: Props) => {
  const { saveUserToContext } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({
    password: "",
    email: "",
    remember: false,
  });
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [loginError, setLoginError] = useState({
    email: false,
    password: false,
    emailRegex: false,
    passwordStrong: false,
    general: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoginError((prev) => ({
      email: false,
      emailRegex: false,
      password: false,
      passwordStrong: false,
      general: false,
    }));

    if (!loginInfo.email) {
      setLoginError((prev) => ({ ...prev, email: true }));
      emailRef.current?.focus();
      return;
    }
    if (!emailRegex.test(loginInfo.email)) {
      setLoginError((prev) => ({ ...prev, emailRegex: true }));
      emailRef.current?.focus();
      return;
    }
    if (!loginInfo.password) {
      setLoginError((prev) => ({ ...prev, password: true }));
      passwordRef.current?.focus();
      return;
    }
    if (!passwordRegex.test(loginInfo.password)) {
      setLoginError((prev) => ({ ...prev, passwordStrong: true }));
      passwordRef.current?.focus();
      return;
    }

    setIsLoading(true);
    AuthService.login(loginInfo)
      .then((data) => {
        saveUserToContext(data);
        setIsLoading(false);
        router.push("/");
      })
      .catch((error) => {
        setIsLoading(false);
        setLoginError((prev) => ({
          ...prev,
          general: true,
        }));

        console.log(error);
      });
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto px-4 md:px-0 my-16">
        <h1 className="text-4xl text-center font-bold">Entrar</h1>
        <p className="text-center text-gray-500 my-4">
          Faça login na sua conta para um checkout mais rápido.{" "}
        </p>
        <div className="flex gap-4 justify-center items-center">
          <Button outline={true}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_59_460)">
                <path
                  d="M20.2522 10.7169C20.264 10.0466 20.1934 9.37738 20.0419 8.72363H10.7012V12.3419H16.1841C16.0802 12.9763 15.8465 13.5836 15.497 14.1272C15.1474 14.6708 14.6893 15.1396 14.1501 15.5052L14.131 15.6264L17.0846 17.8686L17.2891 17.8886C19.1682 16.1878 20.2518 13.6852 20.2518 10.7169"
                  fill="#4285F4"
                ></path>
                <path
                  d="M10.7012 20.2507C13.3874 20.2507 15.6425 19.384 17.2897 17.889L14.1502 15.5055C13.3101 16.0798 12.1826 16.4807 10.7012 16.4807C9.44313 16.4735 8.21929 16.0782 7.20334 15.3509C6.1874 14.6236 5.43095 13.6013 5.0413 12.429L4.92471 12.4387L1.85362 14.7678L1.81348 14.8772C2.6406 16.4927 3.90995 17.8508 5.4796 18.7998C7.04925 19.7487 8.85731 20.2511 10.7016 20.2507"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.04097 12.4291C4.82336 11.8084 4.71107 11.157 4.70857 10.5008C4.71258 9.84561 4.82072 9.19505 5.02912 8.57251L5.02357 8.44326L1.91483 6.07666L1.81314 6.12405C1.1154 7.48166 0.751953 8.9806 0.751953 10.5007C0.751953 12.0208 1.1154 13.5197 1.81314 14.8773L5.04097 12.4291Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M10.7011 4.52068C12.1267 4.49899 13.5055 5.01929 14.5481 5.97241L17.356 3.28568C15.5551 1.63002 13.1702 0.721576 10.7011 0.750678C8.85685 0.750248 7.0488 1.25258 5.47915 2.2015C3.9095 3.15042 2.64013 4.50853 1.81299 6.12395L5.03011 8.57241C5.42359 7.40027 6.18255 6.37872 7.2 5.6518C8.21744 4.92487 9.44203 4.52924 10.7011 4.52068Z"
                  fill="#EB4335"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_59_460">
                  <rect
                    width="19.5"
                    height="19.5"
                    fill="white"
                    transform="translate(0.751953 0.750732)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </Button>
          <Button outline={true}>
            <svg
              width="10"
              height="21"
              viewBox="0 0 10 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_59_456)">
                <path
                  d="M6.32902 20.2481V11.3552H9.20362L9.63399 7.88957H6.32902V5.67683C6.32902 4.67346 6.59737 3.9896 7.98313 3.9896L9.75049 3.98875V0.889099C9.44469 0.847017 8.39564 0.752686 7.17516 0.752686C4.62703 0.752686 2.88252 2.36771 2.88252 5.33377V7.88966H0.000488281V11.3553H2.88243V20.2482L6.32902 20.2481Z"
                  fill="#0080FF"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_59_456">
                  <rect
                    width="9.75"
                    height="19.5"
                    fill="white"
                    transform="translate(0.000488281 0.749512)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </Button>
          <Button outline={true}>
            <svg
              width="26"
              height="21"
              viewBox="0 0 26 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_59_452)">
                <path
                  d="M25.249 3.05699C24.318 3.45078 23.3334 3.7125 22.3254 3.8341C23.3877 3.22292 24.1819 2.25512 24.5574 1.11408C23.5631 1.68596 22.4752 2.08873 21.3408 2.30497C20.6451 1.58418 19.7419 1.08302 18.7485 0.866664C17.7551 0.650309 16.7176 0.728762 15.7709 1.09182C14.8241 1.45488 14.0119 2.08576 13.4398 2.90242C12.8678 3.71908 12.5623 4.68375 12.5632 5.67101C12.5593 6.04774 12.5987 6.42372 12.6808 6.79197C10.6622 6.696 8.68727 6.188 6.88505 5.30117C5.08283 4.41435 3.49392 3.16866 2.22219 1.64556C1.56927 2.72792 1.36694 4.0111 1.65648 5.23321C1.94603 6.45531 2.70563 7.52418 3.78024 8.22167C2.97741 8.20064 2.19156 7.99278 1.48889 7.61563V7.66924C1.49021 8.80546 1.89517 9.90655 2.6356 10.7872C3.37603 11.6678 4.40671 12.2742 5.55417 12.5042C5.12007 12.6152 4.67269 12.6697 4.22379 12.6663C3.90145 12.6718 3.57943 12.6436 3.26332 12.5822C3.59125 13.5587 4.22327 14.4126 5.07236 15.0264C5.92145 15.6402 6.94586 15.9837 8.00459 16.0096C6.20857 17.3716 3.99357 18.1105 1.71355 18.1083C1.30763 18.1109 0.90196 18.0882 0.499023 18.0405C2.81914 19.4903 5.5227 20.2572 8.28278 20.2486C17.6196 20.2486 22.7245 12.7486 22.7245 6.24757C22.7245 6.02996 22.7167 5.82015 22.7059 5.61155C23.7067 4.91703 24.5685 4.05134 25.249 3.05699Z"
                  fill="#03A9F4"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_59_452">
                  <rect
                    width="24.75"
                    height="19.5"
                    fill="white"
                    transform="translate(0.499023 0.749512)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>
        <p className="text-center text-gray-500 my-4">
          Ou entre com seu e-mail
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mx-auto border border-pink-300 rounded-lg px-4 pb-4 max-w-[50%]"
        >
          <Input
            id="email"
            error={loginError.email}
            type="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={loginInfo.email}
            onChange={(e: any) => {
              setLoginInfo({ ...loginInfo, email: e.target.value });
            }}
            inputRef={emailRef}
          />
          {loginError.emailRegex && (
            <p className="text-red-500 mt-1">E-mail inválido</p>
          )}
          <Input
            id="password"
            error={loginError.password}
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            value={loginInfo.password}
            onChange={(e: any) => {
              setLoginInfo({ ...loginInfo, password: e.target.value });
            }}
            inputRef={passwordRef}
          />
          {loginError.passwordStrong && (
            <p className="text-red-500 mt-1">Digite uma senha forte</p>
          )}
          <div className="flex justify-between items-center my-4">
            <div className="checkbox">
              <input
                checked={loginInfo.remember}
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, remember: e.target.checked })
                }
                id="remember"
                type="checkbox"
              ></input>
              <label className="remember" htmlFor="remember">
                Lembrar de mim
              </label>
            </div>
            <Link
              href={"/esqueci-senha"}
              className="text-pink-500 underline hover:text-pink-700"
            >
              Esqueceu sua senha?
            </Link>
          </div>
          <Button type="submit">Entrar</Button>
        </form>
        <p className="text-center text-gray-500 my-4">
          Você não tem uma conta?{" "}
          <Link
            href={"/cadastrar"}
            className="text-pink-500 underline hover:text-pink-700"
          >
            Cadastre-se
          </Link>
        </p>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Entrar;
