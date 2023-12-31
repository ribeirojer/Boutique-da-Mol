import axios, { AxiosRequestConfig } from "axios";

interface OrderResponse {
  link: string;
  resultMeli: any;
}

export class CheckoutService {
  private static BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  private static getAccessToken(): string | null {
    return localStorage.getItem("accessToken");
  }

  private static getRequestConfig(): AxiosRequestConfig {
    const accessToken = this.getAccessToken();
    if (!accessToken) {
      throw new Error("Token not found");
    }
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }

  static async placeOrder(
    paymentInfo: any,
    shippingInfo: any,
    additionalInfo: string,
    createAccount: boolean,
    password: string,
    confirmPassword: string,
    cartItems: any[]
  ): Promise<OrderResponse> {
    try {
      const response = await axios.post<OrderResponse>(
        `${this.BASE_URL}/orders`,
        {
          paymentInfo,
          shippingInfo,
          additionalInfo,
          createAccount,
          password,
          confirmPassword,
          cartItems,
        },
        this.getRequestConfig()
      );
      return response.data;
    } catch (error) {
      console.error("Error placing order:", error);
      throw new Error("Failed to place order");
    }
  }

  static async getOrderById(id: string): Promise<any> {
    try {
      const response = await axios.get<any>(
        `${this.BASE_URL}/orders/${id}`,
        this.getRequestConfig()
      );
      return response.data;
    } catch (error) {
      console.error("Error getting order by ID:", error);
      throw new Error("Failed to get order by ID");
    }
  }

  static async getOrders(): Promise<any[]> {
    try {
      const response = await axios.get<any[]>(
        `${this.BASE_URL}/orders`,
        this.getRequestConfig()
      );
      return response.data;
    } catch (error) {
      console.error("Error getting orders:", error);
      throw new Error("Failed to get orders");
    }
  }

  static async trackOrder(orderId: string): Promise<string> {
    try {
      const response = await axios.get<string>(
        `${this.BASE_URL}/orders/${orderId}/status`
      );
      return response.data;
    } catch (error) {
      console.error("Error tracking order:", error);
      throw new Error("Failed to track order");
    }
  }

  static async cancelOrder(orderId: string): Promise<boolean> {
    try {
      const response = await axios.delete<boolean>(
        `${this.BASE_URL}/orders/${orderId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error canceling order:", error);
      throw new Error("Failed to cancel order");
    }
  }

  static async applyCoupon(
    couponCode: string
  ): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      console.log(this.BASE_URL);

      const response = await axios.post(
        `${this.BASE_URL}/cupom`,
        { code: couponCode },
        this.getRequestConfig()
      );

      if (response.status === 200) {
        return { success: true, data: response.data };
      } else {
        return { success: false, error: response.data.error };
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      return { success: false, error: "Failed to apply coupon" };
    }
  }
}
