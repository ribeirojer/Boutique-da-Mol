import { AuthService } from "@/services/AuthService";
import React, { useState } from "react";
import Loading from "./Loading";

type Props = {};

const Subscribe = (props: Props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setError("Campo de email vazio.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Formato de email inválido.");
      return;
    }

    setLoading(true);
    AuthService.newsletter(email)
      .then((response) => {
        setLoading(false);
        console.log(response);
        setEmail("");
        setError("");
        setSuccess("Inscrição realizada com sucesso!");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setSuccess("");
        setEmail("");
        setError("Erro ao realizar inscrição.");
      });
  };

  return (
    <section className="bg-gray-100 my-8 py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <h2 className="text-center text-2xl">Inscreva-se na NEWSLETTER</h2>
        <p>Te enviaremos as novidades da Moh Shopper e descontos exclusivos!</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              className=" border-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button className="px-8 py-4 bg-pink-500 text-white rounded-lg">
              Inscrever
            </button>
          </div>
          {loading && <Loading></Loading>}
          {error && <span className="text-red-500">{error}</span>}
          {success && <span className="text-green-500">{success}</span>}
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
