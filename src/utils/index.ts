import { CheckoutData } from "../interfaces/Product";

export function countOccurrences(arr: number[]) {
  const counts: number[] = [];
  const total = arr.length;

  for (let i = 0; i < total; i++) {
    const num = arr[i];
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  for (let i = 0; i <= 5; i++) {
    if (!counts[i]) {
      counts[i] = 0;
    } else {
      counts[i] = (counts[i] / total) * 100;
    }
  }

  return counts;
}

export function fillStars(rating: number, index: number): "fill" | "regular" {
  if (index < rating) {
    return "fill";
  } else {
    return "regular";
  }
}

export function maskPhone(value: string) {
  value = value.replace(/\D/g, ""); // Remove tudo o que não é dígito
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses em volta dos dois primeiros dígitos
  value = value.replace(/(\d)(\d{4})$/, "$1-$2"); // Coloca hífen entre o quarto e o quinto dígitos
  return value;
}

export function validateCheckoutData(data: CheckoutData): any {
  const errors = {
    firstName: false,
    lastName: false,
    email: false,
    emailRegex: false,
    zipCode: false,
    zipRegex: false,
    logradouro: false,
    numberAddress: false,
    complemento: false,
    bairro: false,
    city: false,
    state: false,
    tel: false,
    paymentMethod: false,
    termsAgreed: false,
    createAccount: false,
    password: false,
    confirmPassword: false,
  };

  if (!data.firstName) {
    errors.firstName = true;
  }
  if (!data.lastName) {
    errors.lastName = true;
  }
  if (!data.email) {
    errors.email = true;
  }
  if (!data.zipCode) {
    errors.zipCode = true;
  }
  if (!data.logradouro) {
    errors.logradouro = true;
  }
  if (!data.city) {
    errors.city = true;
  }
  if (!data.state) {
    errors.state = true;
  }
  if (!data.numberAddress) {
    errors.numberAddress = true;
  }
  if (!data.bairro) {
    errors.bairro = true;
  }
  if (!data.tel) {
    errors.tel = true;
  }
  if (!data.paymentMethod) {
    errors.paymentMethod = true;
  }
  if (!data.termsAgreed) {
    errors.termsAgreed = true;
  }
  if (data.createAccount) {
    if (!data.password) {
      errors.password = true;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = true;
    }
  }

  // Valida o formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    errors.emailRegex = true;
  }

  // Valida o formato do CEP
  const zipRegex = /^\d{5}-?\d{3}$/;
  if (!zipRegex.test(data.zipCode)) {
    errors.zipRegex = true;
  }

  return errors;
}

export function hasTrueFields(obj: any) {
  for (let key in obj) {
    if (obj[key] === true) {
      return true;
    }
  }
  return false;
}

export function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
export const zipRegex = /^\d{5}-?\d{3}$/;
