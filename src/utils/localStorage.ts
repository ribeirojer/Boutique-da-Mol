// import { any, any } from "../interfaces/Product";

export const saveProductToCart = (item: any) => {
  const existingCart = localStorage.getItem("cart");

  if (existingCart) {
    const parsedCart: any[] = JSON.parse(existingCart);
    parsedCart.push(item);
    localStorage.setItem("cart", JSON.stringify(parsedCart));
  } else {
    const newCart: any[] = [item];
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
};

export const removeProductFromCart = (productId: number) => {
  const existingCart = localStorage.getItem("cart");

  if (existingCart) {
    const parsedCart: any[] = JSON.parse(existingCart);
    const updatedCart = parsedCart.filter((p) => p.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
};

export const saveProductToCompare = (product: any) => {
  const existingCompare = localStorage.getItem("compare");

  if (existingCompare) {
    const parsedCompare: any[] = JSON.parse(existingCompare);
    parsedCompare.push(product);
    localStorage.setItem("compare", JSON.stringify(parsedCompare));
  } else {
    const newCompare: any[] = [product];
    localStorage.setItem("compare", JSON.stringify(newCompare));
  }
};

export const removeProductFromCompare = (productId: number) => {
  const existingCompare = localStorage.getItem("compare");

  if (existingCompare) {
    const parsedCompare: any[] = JSON.parse(existingCompare);
    const filteredCompare: any[] = parsedCompare.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("compare", JSON.stringify(filteredCompare));
  }
};

export const saveProductToWishlist = (product: any) => {
  const existingWishlist = localStorage.getItem("wishlist");

  if (existingWishlist) {
    const parsedWishlist: any[] = JSON.parse(existingWishlist);
    parsedWishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(parsedWishlist));
  } else {
    const newWishlist: any[] = [product];
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  }
};

export const removeProductFromWishlist = (product: any) => {
  const existingWishlist = localStorage.getItem("wishlist");

  if (existingWishlist) {
    const parsedWishlist: any[] = JSON.parse(existingWishlist);
    const updatedWishlist = parsedWishlist.filter((p) => p.id !== product.id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  }
};
