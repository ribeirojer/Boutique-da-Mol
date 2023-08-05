import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import React, { useState } from "react";

type Props = {};

const EsqueciMinhaSenha = (props: Props) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      // Aqui você deve fazer a requisição para a API para enviar o link de redefinição de senha ao email
      // Por ser um exemplo, simulamos o envio e a resposta da API
      const response = await fetch("/api/send-password-reset-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Erro ao enviar o email de redefinição de senha:", error);
      setMessage(
        "Ocorreu um erro ao enviar o email. Tente novamente mais tarde."
      );
    }
  };

  return (
    <>
      <Header></Header>
      <main className="container px-4 mx-auto my-8 md:my-16">
        <h1 className="text-center text-3xl font-semibold mb-4">
          Esqueci Minha Senha
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Insira seu email abaixo para receber um link de redefinição de senha.
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Seu e-mail"
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Enviar</Button>
        </form>
        {message && (
          <p className="mt-4 text-blue-500 font-semibold">{message}</p>
        )}
      </main>
      <Footer></Footer>
    </>
  );
};

export default EsqueciMinhaSenha;
