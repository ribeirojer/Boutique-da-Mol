import axios from "axios";
// import { any } from "../interfaces/Product";
// import { any } from "../interfaces/User";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class CheckoutService {
  static async placeOrder(
    paymentInfo: any,
    shippingInfo: any,
    additionalInfo: string,
    createAccount: boolean,
    password: string,
    confirmPassword: string,
    paymentMethod: string,
    cartItems: any[]
  ): Promise<{ link: string; order: any }> {
    const accessToken = localStorage.getItem("accessToken") || null;
    try {
      const response = await axios.post<{ link: string; order: any }>(
        BASE_URL + "/api/orders",
        {
          paymentInfo,
          shippingInfo,
          additionalInfo,
          createAccount,
          password,
          confirmPassword,
          paymentMethod,
          cartItems,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return { link: "" + error, order: null };
    }
  }

  static async getOrderById(id: string): Promise<any> {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      throw new Error("Token not found");
    }

    const response = await axios.get<any>(
      `http://localhost:3000/api/orders/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  }

  static async getOrders(): Promise<any[]> {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      throw new Error("Token not found");
    }

    const response = await axios.get<any[]>(BASE_URL + "/api/orders", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  }

  static async trackOrder(orderId: string): Promise<string> {
    try {
      const response = await axios.get<string>(
        `http://localhost:3000/api/orders/${orderId}/status`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to track order");
    }
  }

  static async cancelOrder(orderId: string): Promise<boolean> {
    try {
      const response = await axios.delete<boolean>(
        `http://localhost:3000/api/orders/${orderId}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to cancel order");
    }
  }
}
