import type { navLinkInterface } from "~/types/NavLink";
import type {
  ProductItem,
  SubCategoryItemn,
  CategoryItem,
  BrandItem,
} from "~/types/Products";
import type { ServiceItem } from "~/types/Services";
import type { aboutPointInteface } from "~/types/About";

export const navLinks: navLinkInterface[] = [
  {
    id: 1,
    name: "index",
    title: "home",
    path: "/",
  },
  {
    id: 2,
    name: "Shop-category",
    title: "categories",
    path: "/Shop/Equipment",
  },
  {
    id: 3,
    name: "About",
    title: "about us",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    title: "contact us",
    path: "/contact",
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
export const subCategories: SubCategoryItemn[] = [
  {
    id: 1,
    title: "Autoclave",
  },
  {
    id: 2,
    title: "Adhesive",
  },
  {
    id: 3,
    title: "Carbide Burs",
  },
  {
    id: 4,
    title: "Dental Amalgamator",
  },
  {
    id: 5,
    title: "Digital System and Intra Oral Camera",
  },
  {
    id: 6,
    title: "Disposable Surgical",
  },
  {
    id: 7,
    title: "Disinfectant",
  },
  {
    id: 8,
    title: "Diamond Burs",
  },
  {
    id: 9,
    title: "Endodontics",
  },
  {
    id: 10,
    title: "Endo Motor & Apex Locator",
  },
  {
    id: 11,
    title: "Equipment",
  },
  {
    id: 12,
    title: "Hand Piece",
  },
  {
    id: 13,
    title: "Impression",
  },
  {
    id: 14,
    title: "Implant & Surgery",
  },
  {
    id: 15,
    title: "Light Cure",
  },
  {
    id: 16,
    title: "Materials",
  },
  {
    id: 17,
    title: "Orthodontics",
  },
  {
    id: 18,
    title: "Ortho-Dontics Instruments",
  },
  {
    id: 19,
    title: "Operative & Surgical Instruments",
  },
  {
    id: 20,
    title: "Periodontal",
  },
  {
    id: 21,
    title: "Preventive",
  },
  {
    id: 22,
    title: "RVG Sensor",
  },
  {
    id: 23,
    title: "Restorative & Lutting",
  },
  {
    id: 24,
    title: "Ultrasonic Scaler",
  },
];
export const Products: ProductItem[] = [
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
  {
    id: 5,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
  {
    id: 6,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
  {
    id: 7,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
  {
    id: 8,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
  {
    id: 9,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
  {
    id: 10,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
  {
    id: 11,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
  {
    id: 12,
    imgSrc: "NewProduct.png",
    artical: "01010",
    title: "Apple-Dental Air Turbine Hand-Piece (2/4 Hole)",
  },
];
export const categories: CategoryItem[] = [
  {
    id: 1,
    imgSrc: "categories.png",
    title: "Equipment",
    subCategory: [
      {
        id: 1,
        title: "Autoclave",
      },
      {
        id: 4,
        title: "Dental Amalgamator",
      },
      {
        id: 5,
        title: "Digital System and Intra Oral Camera",
      },
      {
        id: 10,
        title: "Endo Motor & Apex Locator",
      },
      {
        id: 12,
        title: "Hand Piece",
      },
      {
        id: 14,
        title: "Implant & Surgery",
      },
      {
        id: 15,
        title: "Light Cure",
      },
      {
        id: 21,
        title: "RVG Sensor",
      },
      {
        id: 23,
        title: "Ultrasonic Scaler",
      },
    ],
  },
  {
    id: 2,
    imgSrc: "categories.png",
    title: "Materials",
    subCategory: [
      {
        id: 2,
        title: "Adhesive",
      },
      {
        id: 6,
        title: "Disposable Surgical",
      },
      {
        id: 7,
        title: "Disinfectant",
      },
      {
        id: 9,
        title: "Endodontics",
      },
      {
        id: 13,
        title: "Impression",
      },
      {
        id: 16,
        title: "Orthodontics",
      },
      {
        id: 19,
        title: "Periodontal",
      },
      {
        id: 20,
        title: "Preventive",
      },
      {
        id: 22,
        title: "Restorative & Lutting",
      },
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
    subCategory: [
      {
        id: 11,
        title: "Equipment",
      },

      {
        id: 16,
        title: "Materials",
      },
    ],
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
      {
        id: 18,
        title: "Ortho-Dontics Instruments",
      },
      {
        id: 19,
        title: "Operative & Surgical Instruments",
      },
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
    subCategory: [
      {
        id: 8,
        title: "Diamond Burs",
      },
      {
        id: 3,
        title: "Carbide Burs",
      },
    ],
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
export const aboutPoints: aboutPointInteface[] = [
  {
    id: 1,
    imgSrc: "aboutPoint1.png",
    title: "Our Journey: From Smiles to Precision",
    text: "At Dentech Supply, we’re more than just a dental supply company—we’re your partners in precision dentistry. Our journey began with a simple vision: to elevate oral health practices across Pakistan. Here’s how we’ve turned that vision into reality:",
  },
  {
    id: 2,
    imgSrc: "aboutPoint2.png",
    title: "Our Guiding Principles",
    points: [
      "Precision: Dentistry is an art, and precision is our brushstroke. From handpicked materials to state-of-the-art equipment, we believe in delivering excellence down to the last detail.",
      "Community: Dentech Supply isn’t just a business; it’s a community. We’re here to support dentists, hygienists, and technicians—the unsung heroes behind every confident smile.",
      "Innovation: The dental field evolves, and so do we. Our catalog features global brands and local gems, all rigorously tested to meet the highest standards.",
    ],
  },
  {
    id: 3,
    imgSrc: "aboutPoint3.png",
    title: "What Sets Us Apart",
    points: [
      "Local Roots, Global Reach: Based in Lahore, Dentech Supply proudly serves the Pakistani dental community. But our reach extends beyond borders—we source products from trusted manufacturers worldwide.",
      "Expert Guidance: Need advice on choosing the right instruments? Our team of experienced dental professionals is just a call away. We’ve been there, probed that!",
      "Swift Delivery: Time matters in dentistry. That’s why Dentech Supply ensures lightning-fast delivery to your clinic. We’re faster than a curing light setting composite resin!",
    ],
  },
  {
    id: 4,
    imgSrc: "aboutPoint4.png",
    title: "Join Our Journey",
    points: [
      "Whether you’re a seasoned dentist or a fresh graduate, Dentech Supply invites you to be part of our story. Explore our catalog, connect with us on social media, and let’s create healthier smiles together.",
      "Remember, at Dentech Supply, precision isn’t just a promise—it’s our heartbeat.",
    ],
  },
];
