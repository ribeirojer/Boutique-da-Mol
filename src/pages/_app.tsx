//import { CartExtract, ProductExtract } from "@/interfaces/Product";
//import { IUser } from "@/interfaces/User";
import "@/styles/globals.css";
import {
  saveProductToCart,
  removeProductFromCart,
  saveProductToWishlist,
  removeProductFromWishlist,
  saveProductToCompare,
  removeProductFromCompare,
} from "@/utils/localStorage";
import type { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext<any>({});

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<any>();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [compare, setCompare] = useState<any[]>([]);
  const [cupomMain, setCupomMain] = useState<number>(0);
  const [orderLink, setOrderLink] = useState<string>("");
  const [linkMeli, setLinkMeli] = useState<string>("");

  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    if (existingCart) {
      const parsedCart: any[] = JSON.parse(existingCart);
      setCartItems(parsedCart);
    }

    const existingWishlist = localStorage.getItem("wishlist");
    if (existingWishlist) {
      const parsedWishlist: any[] = JSON.parse(existingWishlist);
      setWishlist(parsedWishlist);
    }

    const existingCompare = localStorage.getItem("compare");
    if (existingCompare) {
      const parsedCompare: any[] = JSON.parse(existingCompare);
      setCompare(parsedCompare);
    }
  }, []);

  const saveUserToContext = (user: any) => {
    setUser(user);
  };
  const removeUserFromContext = () => {
    setUser(null);
  };

  const addToCart = (item: any) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
      saveProductToCart({
        id: item.id,
        quantity: item.quantity,
      });
    } else {
      setCartItems([...cartItems, item]);
      saveProductToCart({
        id: item.id,
        quantity: item.quantity,
      });
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    removeProductFromCart(itemId);
  };

  const addToWishlist = (item: any) => {
    const existingItem = wishlist.find(
      (wishlistItem) => wishlistItem.id === item.id
    );
    if (!existingItem) {
      saveProductToWishlist(item);
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (product: any) => {
    removeProductFromWishlist(product);
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  };

  const addToCompare = (item: any) => {
    const existingItem = compare.find(
      (compareItem) => compareItem.id === item.id
    );
    if (!existingItem) {
      saveProductToCompare(item);
      setCompare([...compare, item]);
    }
  };

  const removeFromCompare = (productId: number) => {
    removeProductFromCompare(productId);
    setCompare(compare.filter((item) => item.id !== productId));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        saveUserToContext,
        removeUserFromContext,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        compare,
        addToCompare,
        removeFromCompare,
        cupomMain,
        setCupomMain,
        orderLink,
        setOrderLink,
        linkMeli,
        setLinkMeli,
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
