import { CartExtract, ProductExtract } from "../interfaces/Product";

export const saveProductToCart = (item: CartExtract) => {
  const existingCart = localStorage.getItem("cart");

  if (existingCart) {
    const parsedCart: CartExtract[] = JSON.parse(existingCart);
    parsedCart.push(item);
    localStorage.setItem("cart", JSON.stringify(parsedCart));
  } else {
    const newCart: CartExtract[] = [item];
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
};

export const removeProductFromCart = (productId: number) => {
  const existingCart = localStorage.getItem("cart");

  if (existingCart) {
    const parsedCart: CartExtract[] = JSON.parse(existingCart);
    const updatedCart = parsedCart.filter((p) => p.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
};

export const saveProductToCompare = (product: ProductExtract) => {
  const existingCompare = localStorage.getItem("compare");

  if (existingCompare) {
    const parsedCompare: ProductExtract[] = JSON.parse(existingCompare);
    parsedCompare.push(product);
    localStorage.setItem("compare", JSON.stringify(parsedCompare));
  } else {
    const newCompare: ProductExtract[] = [product];
    localStorage.setItem("compare", JSON.stringify(newCompare));
  }
};

export const removeProductFromCompare = (productId: number) => {
  const existingCompare = localStorage.getItem("compare");

  if (existingCompare) {
    const parsedCompare: ProductExtract[] = JSON.parse(existingCompare);
    const filteredCompare: ProductExtract[] = parsedCompare.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("compare", JSON.stringify(filteredCompare));
  }
};

export const saveProductToWishlist = (product: ProductExtract) => {
  const existingWishlist = localStorage.getItem("wishlist");

  if (existingWishlist) {
    const parsedWishlist: ProductExtract[] = JSON.parse(existingWishlist);
    parsedWishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(parsedWishlist));
  } else {
    const newWishlist: ProductExtract[] = [product];
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  }
};

export const removeProductFromWishlist = (product: ProductExtract) => {
  const existingWishlist = localStorage.getItem("wishlist");

  if (existingWishlist) {
    const parsedWishlist: ProductExtract[] = JSON.parse(existingWishlist);
    const updatedWishlist = parsedWishlist.filter((p) => p.id !== product.id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  }
};
