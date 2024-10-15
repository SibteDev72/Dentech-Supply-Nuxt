import type { CategoryItem } from "~/types/Products";
export const useSelectedCategory = () =>
  useState<CategoryItem>("category", () => ({
    id: 1,
    imgSrc: "categories.png",
    title: "Equipment",
    subCategory: [
      "Autoclave",
      "Dental Amalgamator",
      "Digital System and Intra Oral Camera",
      "Endo Motor & Apex Locator",
      "Hand Piece",
      "Implant & Surgery",
      "Light Cure",
      "RVG Sensor",
      "Ultrasonic Scaler",
    ],
  }));
