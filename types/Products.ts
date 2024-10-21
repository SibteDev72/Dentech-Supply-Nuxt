export type ProductItem = {
  id: number;
  imgSrc: string;
  artical: string;
  title: string;
};

export type SubCategoryItemn = {
  id: number;
  title: string;
  slug: string;
};

export type CategoryItem = {
  id: number;
  imgSrc: string;
  title: string;
  slug: string;
  subCategory?: SubCategoryItemn[];
};

export type BrandItem = {
  id: number;
  title: string;
  icon: string;
};
