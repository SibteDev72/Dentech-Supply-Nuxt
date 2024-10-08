import type { navLinkInterface } from "~/types/NavLink";
import type { ProductItem, CategoryItem, BrandItem } from "~/types/Products";
import type { ServiceItem } from "~/types/Services";

export const navLinks: navLinkInterface[] = [
  {
    id: 1,
    title: "home",
    hash: "#home",
  },
  {
    id: 2,
    title: "categories",
    hash: "#categories",
  },
  {
    id: 3,
    title: "about us",
    hash: "#aboutUs",
  },
  {
    id: 4,
    title: "contact us",
    hash: "#contactUs",
  },
];
export const newProducts: ProductItem[] = [
  {
    id: 1,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
  {
    id: 2,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
  {
    id: 3,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
  {
    id: 4,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
];
export const services: ServiceItem[] = [
  {
    id: 1,
    imgSrc: "delivery.png",
    title: "Fast Delivery",
    text: "When it comes to fast delivery, think of it as dental supplies arriving at your doorstep...",
  },
  {
    id: 2,
    imgSrc: "Guarenteed.png",
    title: "Extended Guaratees",
    text: "Lifetime Satisfaction: Our commitment doesn’t end at the sale. We’re here for the .....",
  },
  {
    id: 3,
    imgSrc: "support.png",
    title: "Qualified Support",
    text: "Expert Guidance, Just a Call Away: Our team of seasoned dental professionals....",
  },
  {
    id: 4,
    imgSrc: "customer.png",
    title: "Return Customers",
    text: "Our return customers are like the reliable instruments in a well-stocked dental kit",
  },
];
export const categories: CategoryItem[] = [
  {
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
  },
  {
    id: 2,
    imgSrc: "categories.png",
    title: "Materials",
    subCategory: [
      "Adhesive",
      "Disposable Surgical",
      "Disinfectant",
      "Endodontics",
      "Impression",
      "Orthodontics",
      "Periodontal",
      "Preventive",
      "Restorative & Lutting",
      "Others",
    ],
  },
  {
    id: 3,
    imgSrc: "categories.png",
    title: "Dental Lasers",
  },
  {
    id: 4,
    imgSrc: "categories.png",
    title: "Lab",
    subCategory: ["Equipment", "Materials"],
  },
  {
    id: 5,
    imgSrc: "categories.png",
    title: "Dental Char Units",
  },
  {
    id: 6,
    imgSrc: "categories.png",
    title: "Dental Instruments",
    subCategory: [
      "Ortho-Dontics Instruments",
      "Operative & Surgical Instruments",
    ],
  },
  {
    id: 7,
    imgSrc: "categories.png",
    title: "Ortho-Dontics",
  },
  {
    id: 8,
    imgSrc: "categories.png",
    title: "Burs",
    subCategory: ["Diamond Burs", "Carbide Burs"],
  },
  {
    id: 9,
    imgSrc: "categories.png",
    title: "Export Items",
  },
];

export const brands: BrandItem[] = [
  {
    id: 1,
    title: "GC",
    icon: "GC.png",
  },
  {
    id: 2,
    title: "Wood Pecker",
    icon: "WoodPecker.png",
  },
  {
    id: 3,
    title: "Apple Dental",
    icon: "AppleDental.png",
  },
  {
    id: 4,
    title: "Fanta",
    icon: "Fanta.png",
  },
  {
    id: 5,
    title: "Dr. Schumacher",
    icon: "Dr.Schumacher.png",
  },
  {
    id: 6,
    title: "Noritake",
    icon: "Noritake.png",
  },
  {
    id: 7,
    title: "Tehno Dent",
    icon: "TehnoDent.png",
  },
  {
    id: 8,
    title: "Lascod",
    icon: "Lascod.png",
  },
  {
    id: 9,
    title: "Getidy",
    icon: "Getidy.png",
  },
  {
    id: 10,
    title: "MDK",
    icon: "MDK.png",
  },
  {
    id: 11,
    title: "Vericom",
    icon: "Vericom.jpg",
  },
  {
    id: 12,
    title: "Meisinger",
    icon: "Meisinger.jpg",
  },
  {
    id: 13,
    title: "Medigma Biomedical",
    icon: "MedigmaBiomedical.jpg",
  },
  {
    id: 14,
    title: "Cavex",
    icon: "Cavex.jpg",
  },
  {
    id: 15,
    title: "Saeyang",
    icon: "Saeyang.png",
  },
  {
    id: 16,
    title: "Super Max",
    icon: "SuperMax.png",
  },
  {
    id: 17,
    title: "Welldent",
    icon: "Welldent.png",
  },
  {
    id: 18,
    title: "SME Dent",
    icon: "SME_Dent.png",
  },
  {
    id: 19,
    title: "Gapadent",
    icon: "Gapadent.png",
  },
  {
    id: 20,
    title: "Favodent",
    icon: "Favodent.png",
  },
  {
    id: 21,
    title: "Ray Foster",
    icon: "RayFoster.png",
  },
  {
    id: 22,
    title: "Metro Dent",
    icon: "MetroDent.png",
  },
  {
    id: 23,
    title: "Prime Dental.png",
    icon: "PrimeDental.png",
  },
  {
    id: 24,
    title: "Cookson Dental",
    icon: "CooksonDental.png",
  },
  {
    id: 25,
    title: "Sure Endo",
    icon: "SureEndo.png",
  },
  {
    id: 26,
    title: "Citisen",
    icon: "Citisen.png",
  },
];
