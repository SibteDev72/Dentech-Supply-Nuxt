export type ProductItem = {
  id: number;
  imgSrc: string;
  artical: string;
  title: string;
};

export type CategoryItem = {
  id: number;
  imgSrc: string;
  title: string;
  subCategory?: string[];
};

export type BrandItem = {
  id: number;
  title: string;
  icon: string;
};
