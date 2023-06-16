export interface ClothingItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  sizes: ClothingSize[];
  colors: string[];
  category: ClothingCategory;
  gender: Gender;
  inStock: boolean;
  description?: string;
  imageUrl?: string;
  materials?: string[];
  careInstructions?: string[];
  reviews?: ClothingReview[];
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClothingSize {
  label: string;
  value: string;
}

export interface ClothingReview {
  id: number;
  userId: number;
  rating: number;
  comment: string;
  createdAt: Date;
}

export enum ClothingCategory {
  Tops = "Tops",
  Bottoms = "Bottoms",
  Shoes = "Shoes",
  Accessories = "Accessories",
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Unisex = "Unisex",
}
