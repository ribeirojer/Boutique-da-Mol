import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InputsCheckout from "@/components/InputsCheckout";
import useFetch from "@/hooks/useFetch";
import React, { use, useContext, useEffect } from "react";
import { UserContext } from "./_app";
import { useRouter } from "next/router";

type Props = {};

const Usuario = (props: Props) => {
  const { user } = useContext(UserContext);
  const url = "https://api.github.com/users/ribeirojer";
  const { data, isLoading, error } = useFetch(url);
  const router = useRouter();

  useEffect(() => {
    if (user === undefined || user === null || user.length === 0) {
      router.push("/entrar");
    }
  }, []);

  return (
    <>
      <Header></Header>
      <main className="container mx-auto">
        <h1>Usuario</h1>
        <p>Nome: {JSON.stringify(user)}</p>
        {/* <InputsCheckout
          title={"Seus dados"}
          info={undefined}
          setInfo={undefined}
          errorInfo={undefined}
          refsInfo={undefined}
          errorEmailRegex={false}
          handleSubmitCep={undefined}
        ></InputsCheckout> */}
      </main>
      <Footer></Footer>
    </>
  );
};

export default Usuario;
