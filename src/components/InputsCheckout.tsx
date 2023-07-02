import Input from "./Input";

type Props = {
  title: string;
  info: any;
  setInfo: any;
  errorInfo: any;
  errorEmailRegex: boolean;
  handleSubmitCep: any;
};

const InputsCheckout = ({
  title,
  info,
  setInfo,
  errorInfo,
  errorEmailRegex,
  handleSubmitCep,
}: Props) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Input
          id="first-name"
          label="Primeiro nome"
          type="text"
          placeholder="Primeiro nome"
          value={info.firstName}
          onChange={(e: any) => setInfo({ ...info, firstName: e.target.value })}
        />
        <Input
          id="last-name"
          type="text"
          label="Último nome"
          placeholder="Último nome"
          value={info.lastName}
          onChange={(e: any) => setInfo({ ...info, lastName: e.target.value })}
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Input
          id="email"
          type="email"
          label="E-mail"
          placeholder="exemplo@email.com"
          value={info.email}
          onChange={(e: any) => setInfo({ ...info, email: e.target.value })}
        />
        {errorEmailRegex && (
          <p className="text-red-500">Digite um e-mail válido.</p>
        )}
        <Input
          id="tel"
          type="text"
          label="Número do celular"
          placeholder="(12) 98765-4321"
          value={info.tel}
          onChange={(e: any) => setInfo({ ...info, tel: e.target.value })}
        />
      </div>
      <Input
        id="zip-code"
        type="text"
        label="CEP"
        placeholder="CEP"
        value={info.zipCode}
        onChange={(e: any) => {
          const newZipCode = e.target.value;
          setInfo({ ...info, zipCode: newZipCode });
          if (newZipCode.length === 8) {
            handleSubmitCep(e);
          }
        }}
      />
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Input
          id="logradouro"
          type="text"
          label="Endereço"
          placeholder="Endereço"
          value={info.logradouro}
          onChange={(e: any) =>
            setInfo({ ...info, logradouro: e.target.value })
          }
        />
        <Input
          id="address-number"
          type="number"
          label="Número"
          placeholder="Número"
          value={info.numberAddress}
          onChange={(e: any) =>
            setInfo({
              ...info,
              numberAddress: e.target.value,
            })
          }
        />
        <Input
          id="complement"
          type="text"
          label="Complemento"
          placeholder="Complemento"
          value={info.complemento}
          onChange={(e: any) =>
            setInfo({ ...info, complemento: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Input
          id="bairro"
          type="text"
          label="Bairro"
          placeholder="Bairro"
          value={info.bairro}
          onChange={(e: any) => setInfo({ ...info, bairro: e.target.value })}
        />
        <Input
          id="city"
          type="text"
          label="Cidade"
          placeholder="Cidade"
          value={info.city}
          onChange={(e: any) => setInfo({ ...info, city: e.target.value })}
        />
        <Input
          id="state"
          type="text"
          label="Estado"
          placeholder="Estado"
          value={info.state}
          onChange={(e: any) => setInfo({ ...info, state: e.target.value })}
        />
      </div>
    </div>
  );
};

export default InputsCheckout;
