import Input from "./Input";

type Props = {
  title: string;
  info: any;
  setInfo: any;
  errorInfo: any;
  refsInfo: any;
  errorEmailRegex: boolean;
  handleSubmitCep: any;
};

const InputsCheckout = ({
  title,
  info,
  setInfo,
  errorInfo,
  refsInfo,
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
          error={errorInfo.firstName}
          inputRef={refsInfo.firstName}
        />
        <Input
          id="last-name"
          type="text"
          label="Último nome"
          placeholder="Último nome"
          value={info.lastName}
          onChange={(e: any) => setInfo({ ...info, lastName: e.target.value })}
          error={errorInfo.lastName}
          inputRef={refsInfo.lastName}
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex flex-col w-full md:w-1/2">
          <Input
            id="email"
            type="email"
            label="E-mail"
            placeholder="exemplo@email.com"
            value={info.email}
            onChange={(e: any) => setInfo({ ...info, email: e.target.value })}
            error={errorInfo.email}
            inputRef={refsInfo.email}
          />
          {errorEmailRegex && (
            <p className="text-red-500 mt-1">Digite um e-mail válido.</p>
          )}
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <Input
            id="tel"
            type="text"
            label="Número do celular"
            placeholder="(12) 98765-4321"
            value={info.tel}
            onChange={(e: any) => setInfo({ ...info, tel: e.target.value })}
            error={errorInfo.tel}
            inputRef={refsInfo.tel}
          />
        </div>
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
        error={errorInfo.zipCode}
        inputRef={refsInfo.zipCode}
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
          error={errorInfo.logradouro}
          inputRef={refsInfo.logradouro}
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
          error={errorInfo.numberAddress}
          inputRef={refsInfo.numberAddress}
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
          error={errorInfo.complemento}
          inputRef={refsInfo.complemento}
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
          error={errorInfo.bairro}
          inputRef={refsInfo.bairro}
        />
        <Input
          id="city"
          type="text"
          label="Cidade"
          placeholder="Cidade"
          value={info.city}
          onChange={(e: any) => setInfo({ ...info, city: e.target.value })}
          error={errorInfo.city}
          inputRef={refsInfo.city}
        />
        <Input
          id="state"
          type="text"
          label="Estado"
          placeholder="Estado"
          value={info.state}
          onChange={(e: any) => setInfo({ ...info, state: e.target.value })}
          error={errorInfo.state}
          inputRef={refsInfo.state}
        />
      </div>
    </div>
  );
};

export default InputsCheckout;
