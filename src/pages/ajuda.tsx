import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import React from "react";

type Props = {};

const Ajuda = (props: Props) => {
  const [inputAjuda, setInputAjuda] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputAjuda);
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto my-8">
        <h1 className="text-4xl font-bold text-center">Ajuda</h1>
        <p className="text-center">
          Nosso chatbot é muito simples, vocé pode perguntar qualquer coisa e
          ele vai responder.
        </p>
        <Input
          id="password"
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          value={inputAjuda}
          onChange={(e: any) => {
            setInputAjuda(e.target.value);
          }}
        />
        <Button onClick={() => handleSubmit}>Enviar</Button>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Ajuda;
