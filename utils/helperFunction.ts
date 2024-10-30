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
    cat.value.map((category) => [category.id, category])
  );
  return products.map((product) => {
    const productCategories: CategoryItem[] = product.categories.flatMap(
      (productCat: CategoryItem) => {
        const mainCategory = categoryMap.get(productCat.id);
        if (!mainCategory) return [];
        const subCategory =
          mainCategory.subCategory?.filter((subCat) =>
            product.categories.some(
              (prodCat: CategoryItem) => prodCat.id === subCat.id
            )
          ) || [];

        return [{ ...mainCategory, subCategory }];
      }
    );

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
  let numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pagesArray = usePagesArray();
  if (numberOfPages === 1) {
    pagesArray.value = [1];
  } else if (numberOfPages === 2) {
    pagesArray.value = [1, 2];
  } else {
    pagesArray.value = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  }
};
