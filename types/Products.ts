export type ProductItem = {
  id: number;
  imgSrc: {
    id: number;
    date_created: Date;
    date_created_gmt: Date;
    date_modified: Date;
    date_modified_gmt: Date;
    src: string;
    name: string;
    alt: string;
  }[];
  title: string;
  categories: CategoryItem[];
  description: string;
  price: number;
  createdAt: Date;
};

export type SubCategoryItemn = {
  id: number;
  title: string;
  slug: string;
};

export type CategoryItem = {
  id: number;
  imgSrc?: string;
  title: string;
  slug: string;
  subCategory?: SubCategoryItemn[];
};

export type BrandItem = {
  id: number;
  title: string;
  icon: string;
};
