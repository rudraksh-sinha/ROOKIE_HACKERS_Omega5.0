import { Product } from "@/types/product";
import dalImage from "@/assets/dal.jpg";
import breadImage from "@/assets/bread.jpg";
import riceImage from "@/assets/rice.jpg";
import jamImage from "@/assets/jam.jpg";
import butterImage from "@/assets/butter.jpg";
import eggsImage from "@/assets/eggs.jpg";
import cheeseImage from "@/assets/cheese.jpg";
import chickenImage from "@/assets/chicken.jpg";
import saltImage from "@/assets/salt.jpg";

export const products: Product[] = [
  {
    id: "dal",
    name: "Toor Dal",
    price: 120,
    category: "Pulses & Grains",
    image: dalImage,
    unit: "1kg",
    description: "Premium quality toor dal, rich in protein",
    relatedProducts: ["rice", "salt"]
  },
  {
    id: "bread",
    name: "Whole Wheat Bread",
    price: 45,
    category: "Bakery",
    image: breadImage,
    unit: "400g",
    description: "Fresh whole wheat bread, perfect for breakfast",
    relatedProducts: ["butter", "jam", "eggs"]
  },
  {
    id: "rice",
    name: "Basmati Rice",
    price: 200,
    category: "Pulses & Grains",
    image: riceImage,
    unit: "1kg",
    description: "Premium long grain basmati rice",
    relatedProducts: ["dal", "salt"]
  },
  {
    id: "jam",
    name: "Mixed Fruit Jam",
    price: 85,
    category: "Spreads",
    image: jamImage,
    unit: "400g",
    description: "Delicious mixed fruit jam, perfect for breakfast",
    relatedProducts: ["bread", "butter"]
  },
  {
    id: "butter",
    name: "Salted Butter",
    price: 65,
    category: "Dairy",
    image: butterImage,
    unit: "200g",
    description: "Fresh salted butter, ideal for cooking and spreading",
    relatedProducts: ["bread", "jam", "cheese", "eggs"]
  },
  {
    id: "eggs",
    name: "Farm Fresh Eggs",
    price: 75,
    category: "Dairy",
    image: eggsImage,
    unit: "12 pieces",
    description: "Farm fresh eggs, rich in protein",
    relatedProducts: ["bread", "butter", "cheese"]
  },
  {
    id: "cheese",
    name: "Cheddar Cheese",
    price: 180,
    category: "Dairy",
    image: cheeseImage,
    unit: "200g",
    description: "Rich and creamy cheddar cheese",
    relatedProducts: ["butter", "eggs", "bread"]
  },
  {
    id: "chicken",
    name: "Fresh Chicken",
    price: 350,
    category: "Meat",
    image: chickenImage,
    unit: "1kg",
    description: "Fresh chicken, cleaned and ready to cook",
    relatedProducts: ["rice", "salt"]
  },
  {
    id: "salt",
    name: "Rock Salt",
    price: 25,
    category: "Spices",
    image: saltImage,
    unit: "1kg",
    description: "Pure rock salt for all your cooking needs",
    relatedProducts: ["dal", "rice", "chicken"]
  }
];