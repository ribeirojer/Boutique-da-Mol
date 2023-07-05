import useFetch from "@/hooks/useFetch";
import React from "react";

type Props = {};

const Administrador = (props: Props) => {
  const url = "http://localhost:3000/api/administrador";
  const { data, error, isLoading } = useFetch(url);

  if (isLoading) return <h1>Carregando...</h1>;

  if (error) return <h1>Error</h1>;

  console.log(data);

  return (
    <main>
      <h1>Administrador</h1>
      <p>{data.toString()}</p>
      <p>Esta es la pagina de administrador</p>
    </main>
  );
};

export default Administrador;
