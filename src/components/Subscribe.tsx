import { AuthService } from "@/services/AuthService";
import React, { useRef, useState } from "react";
import Loading from "./Loading";
import Input from "./Input";
import Button from "./Button";

type Props = {};

const Subscribe = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    emailRegex: "",
    general: "",
  });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const closeSuccess = () => {
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name) {
      setError({ ...error, name: "Por favor digite seu nome." });
      nameRef.current?.focus();
      return;
    }
    if (formData.name.length < 3 || formData.name.length > 50) {
      setError({ ...error, name: "Por favor digite entre 3 e 50 caracteres." });
      nameRef.current?.focus();
      return;
    }
    if (!formData.email) {
      setError({ ...error, email: "Por favor digite seu email." });
      emailRef.current?.focus();
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError({ ...error, email: "Formato de email inválido." });
      emailRef.current?.focus();
      return;
    }

    setLoading(true);
    AuthService.newsletter(formData)
      .then((response) => {
        setLoading(false);
        console.log(response);
        setFormData({ name: "", email: "" });
        setError({ ...error, general: "" });
        setSuccess("Inscrição realizada com sucesso!");
        closeSuccess();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setSuccess("");
        setError({
          ...error,
          general: "Ocorreu um erro ao realizar a inscrição.",
        });
      });
  };

  return (
    <section className="bg-gray-100 my-8 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
        <h2 className="text-center font-semibold text-2xl">
          Inscreva-se na NEWSLETTER
        </h2>
        <p className="text-center text-gray-500">
          Te enviaremos as novidades da Boutique da Moh e descontos exclusivos!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col">
              <Input
                id="subscribe-name"
                type="text"
                placeholder="Seu nome"
                inputRef={nameRef}
                value={formData.name}
                onChange={(e: any) => {
                  setFormData({ ...formData, name: e.target.value });
                  setError({ ...error, name: "" });
                }}
              />
              {error.name && (
                <span className="text-red-500 mt-1">{error.name}</span>
              )}
            </div>
            <div className="flex flex-col">
              <Input
                id="subscribe-email"
                type="text"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                inputRef={emailRef}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setError({ ...error, email: "" });
                }}
              />
              {error.email && (
                <span className="text-red-500 mt-1">{error.email}</span>
              )}
              {error.emailRegex && (
                <span className="text-red-500 mt-1">{error.emailRegex}</span>
              )}
            </div>
            <Button type="submit">Inscrever</Button>
          </div>
          {loading && <Loading></Loading>}
          {error.general && (
            <span className="text-red-500 mt-1 text-center">
              {error.general}
            </span>
          )}
          {success && (
            <span className="text-green-500 text-center">{success}</span>
          )}
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
