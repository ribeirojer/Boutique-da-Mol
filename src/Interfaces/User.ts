export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  billingInfo?: {
    cardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    cvv: string;
  };
  orders?: IOrder[];
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: IUser;
}

export interface IRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface IOrder {
  id: number;
  date: Date;
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  status: "pending" | "processing" | "delivered" | "canceled";
  total: number;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
}

export interface IAddress {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}
export interface IAddress2 {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
}
