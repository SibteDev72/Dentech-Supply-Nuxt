import type { CategoryItem, ProductItem } from "~/types/Products";

export const categoriesMapper = (categories: any[]) => {
  const cat = useCategories();
  const parentCategories: Record<number, CategoryItem> = {};
  const subCategories: {
    id: number;
    title: string;
    slug: string;
    parent: number;
  }[] = [];
  categories.forEach((category) => {
    if (category.parent === 0) {
      parentCategories[category.id] = {
        id: category.id,
        imgSrc: category.image?.src || "",
        title: category.name,
        slug: category.slug,
        subCategory: [],
      };
    } else {
      subCategories.push({
        id: category.id,
        title: category.name,
        slug: category.slug,
        parent: category.parent,
      });
    }
  });
  subCategories.forEach((subCategory) => {
    const parentCategory = parentCategories[subCategory.parent];
    if (parentCategory) {
      parentCategory.subCategory?.push({
        id: subCategory.id,
        title: subCategory.title,
        slug: subCategory.slug,
      });
    }
  });
  cat.value.push(...Object.values(parentCategories));
};

export const productsMapper = (products: any[]): ProductItem[] => {
  const cat = useCategories();
  const categoryMap = new Map(
    cat.value.map((category: CategoryItem) => [category.id, category])
  );
  return products.map((product) => {
    const productCategories: CategoryItem[] = product.categories
      .map((productCat: CategoryItem) => {
        const mainCategory = categoryMap.get(productCat.id);
        if (!mainCategory) return null;
        const mainCatObj: CategoryItem = {
          ...mainCategory,
          subCategory:
            mainCategory.subCategory?.filter((subCat) =>
              product.categories.some(
                (prodCat: any) => prodCat.id === subCat.id
              )
            ) || [],
        };
        return mainCatObj;
      })
      .filter(Boolean) as CategoryItem[];
    return {
      id: product.id,
      imgSrc: product.images,
      title: product.name,
      price: product.price,
      description: product.description,
      categories: productCategories,
      createdAt: product.date_created,
    };
  });
};

export const getNumberOfPages = (totalItems: number, itemsPerPage: number) => {
  const numberOfPages = useNumberOfPages();
  numberOfPages.value = Math.ceil(totalItems / itemsPerPage);
};
