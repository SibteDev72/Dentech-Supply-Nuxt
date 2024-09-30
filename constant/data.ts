import type { navLinkInterface } from "~/types/NavLink";
import type { ProductItem } from "~/types/Products";
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
