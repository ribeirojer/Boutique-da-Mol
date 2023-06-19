import { ClothingCategory, ClothingItem, Gender } from "@/interfaces/Clothes";

export const productsData: ClothingItem[] = [
  {
    id: 1,
    name: "Cotton T-Shirt",
    brand: "ABC Apparel",
    price: 29.99,
    oldPrice: 123.0,
    sizes: [
      { label: "S", value: "s" },
      { label: "M", value: "m" },
      { label: "L", value: "l" },
    ],
    colors: ["Black", "White", "Gray"],
    category: ClothingCategory.Tops,
    gender: Gender.Unisex,
    inStock: true,
    description: "A comfortable cotton t-shirt for everyday wear.",
    image: "img/product-1.jpg",
    materials: ["Cotton"],
    careInstructions: ["Machine wash cold", "Tumble dry low"],
    reviews: [
      {
        id: 1,
        userId: 123,
        rating: 4.5,
        comment: "Great quality shirt!",
        createdAt: new Date(),
      },
      {
        id: 2,
        userId: 456,
        rating: 3.8,
        comment: "Runs slightly small.",
        createdAt: new Date(),
      },
    ],
    rating: 4.2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    brand: "XYZ Denim",
    price: 49.99,
    oldPrice: 123.0,
    image: "img/product-2.jpg",
    sizes: [
      { label: "28", value: "28" },
      { label: "30", value: "30" },
      { label: "32", value: "32" },
      { label: "34", value: "34" },
    ],
    colors: ["Blue", "Black"],
    category: ClothingCategory.Bottoms,
    gender: Gender.Male,
    inStock: true,
    description: "Classic slim fit jeans for a stylish look.",
    materials: ["Cotton", "Spandex"],
    careInstructions: ["Machine wash cold", "Do not bleach", "Iron low"],
    reviews: [
      {
        id: 3,
        userId: 789,
        rating: 4.7,
        comment: "Perfect fit!",
        createdAt: new Date(),
      },
      {
        id: 4,
        userId: 456,
        rating: 4.2,
        comment: "Nice quality denim.",
        createdAt: new Date(),
      },
    ],
    rating: 4.5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Canvas Sneakers",
    brand: "DEF Footwear",
    price: 39.99,
    oldPrice: 123.0,
    image: "img/product-3.jpg",
    sizes: [
      { label: "US 6", value: "6" },
      { label: "US 7", value: "7" },
      { label: "US 8", value: "8" },
      { label: "US 9", value: "9" },
    ],
    colors: ["White", "Black", "Red"],
    category: ClothingCategory.Shoes,
    gender: Gender.Unisex,
    inStock: true,
    description: "Casual canvas sneakers for everyday wear.",
    materials: ["Canvas", "Rubber"],
    careInstructions: ["Spot clean", "Air dry"],
    reviews: [
      {
        id: 5,
        userId: 123,
        rating: 4.9,
        comment: "Love these sneakers!",
        createdAt: new Date(),
      },
      {
        id: 6,
        userId: 789,
        rating: 4.5,
        comment: "Comfortable and stylish.",
        createdAt: new Date(),
      },
    ],
    rating: 4.7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: "Canvas Sneakers",
    brand: "DEF Footwear",
    price: 39.99,
    oldPrice: 123.0,
    image: "img/product-4.jpg",
    sizes: [
      { label: "US 6", value: "6" },
      { label: "US 7", value: "7" },
      { label: "US 8", value: "8" },
      { label: "US 9", value: "9" },
    ],
    colors: ["White", "Black", "Red"],
    category: ClothingCategory.Shoes,
    gender: Gender.Unisex,
    inStock: true,
    description: "Casual canvas sneakers for everyday wear.",
    materials: ["Canvas", "Rubber"],
    careInstructions: ["Spot clean", "Air dry"],
    reviews: [
      {
        id: 5,
        userId: 123,
        rating: 4.9,
        comment: "Love these sneakers!",
        createdAt: new Date(),
      },
      {
        id: 6,
        userId: 789,
        rating: 4.5,
        comment: "Comfortable and stylish.",
        createdAt: new Date(),
      },
    ],
    rating: 4.7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    brand: "XYZ Denim",
    price: 49.99,
    oldPrice: 123.0,
    image: "img/product-2.jpg",
    sizes: [
      { label: "28", value: "28" },
      { label: "30", value: "30" },
      { label: "32", value: "32" },
      { label: "34", value: "34" },
    ],
    colors: ["Blue", "Black"],
    category: ClothingCategory.Bottoms,
    gender: Gender.Male,
    inStock: true,
    description: "Classic slim fit jeans for a stylish look.",
    materials: ["Cotton", "Spandex"],
    careInstructions: ["Machine wash cold", "Do not bleach", "Iron low"],
    reviews: [
      {
        id: 3,
        userId: 789,
        rating: 4.7,
        comment: "Perfect fit!",
        createdAt: new Date(),
      },
      {
        id: 4,
        userId: 456,
        rating: 4.2,
        comment: "Nice quality denim.",
        createdAt: new Date(),
      },
    ],
    rating: 4.5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: "Canvas Sneakers",
    brand: "DEF Footwear",
    price: 39.99,
    oldPrice: 123.0,
    image: "img/product-3.jpg",
    sizes: [
      { label: "US 6", value: "6" },
      { label: "US 7", value: "7" },
      { label: "US 8", value: "8" },
      { label: "US 9", value: "9" },
    ],
    colors: ["White", "Black", "Red"],
    category: ClothingCategory.Shoes,
    gender: Gender.Unisex,
    inStock: true,
    description: "Casual canvas sneakers for everyday wear.",
    materials: ["Canvas", "Rubber"],
    careInstructions: ["Spot clean", "Air dry"],
    reviews: [
      {
        id: 5,
        userId: 123,
        rating: 4.9,
        comment: "Love these sneakers!",
        createdAt: new Date(),
      },
      {
        id: 6,
        userId: 789,
        rating: 4.5,
        comment: "Comfortable and stylish.",
        createdAt: new Date(),
      },
    ],
    rating: 4.7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    name: "Canvas Sneakers",
    brand: "DEF Footwear",
    price: 39.99,
    oldPrice: 123.0,
    image: "img/product-4.jpg",
    sizes: [
      { label: "US 6", value: "6" },
      { label: "US 7", value: "7" },
      { label: "US 8", value: "8" },
      { label: "US 9", value: "9" },
    ],
    colors: ["White", "Black", "Red"],
    category: ClothingCategory.Shoes,
    gender: Gender.Unisex,
    inStock: true,
    description: "Casual canvas sneakers for everyday wear.",
    materials: ["Canvas", "Rubber"],
    careInstructions: ["Spot clean", "Air dry"],
    reviews: [
      {
        id: 5,
        userId: 123,
        rating: 4.9,
        comment: "Love these sneakers!",
        createdAt: new Date(),
      },
      {
        id: 6,
        userId: 789,
        rating: 4.5,
        comment: "Comfortable and stylish.",
        createdAt: new Date(),
      },
    ],
    rating: 4.7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    name: "Cotton T-Shirt",
    brand: "ABC Apparel",
    price: 29.99,
    oldPrice: 123.0,
    sizes: [
      { label: "S", value: "s" },
      { label: "M", value: "m" },
      { label: "L", value: "l" },
    ],
    colors: ["Black", "White", "Gray"],
    category: ClothingCategory.Tops,
    gender: Gender.Unisex,
    inStock: true,
    description: "A comfortable cotton t-shirt for everyday wear.",
    image: "img/product-1.jpg",
    materials: ["Cotton"],
    careInstructions: ["Machine wash cold", "Tumble dry low"],
    reviews: [
      {
        id: 1,
        userId: 123,
        rating: 4.5,
        comment: "Great quality shirt!",
        createdAt: new Date(),
      },
      {
        id: 2,
        userId: 456,
        rating: 3.8,
        comment: "Runs slightly small.",
        createdAt: new Date(),
      },
    ],
    rating: 4.2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const dataList = [
  {
    text: "Laptops",
    link: "/shop?c=Laptops",
  },
  {
    text: "Smartphones",
    link: "/shop?c=Smartphones",
  },
  {
    text: "Câmeras",
    link: "/shop?c=Câmeras",
  },
  {
    text: "Acessórios",
    link: "/shop?c=Acessórios",
  },
];
