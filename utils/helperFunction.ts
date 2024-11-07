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

export const productMapper = (
  productOrProducts: any | any[]
): ProductItem | ProductItem[] => {
  const cat = useCategories();
  const categoryMap = new Map(
    cat.value.map((category) => [category.id, category])
  );

  const mapProduct = (product: any): ProductItem => {
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
      slug: product.slug,
      price: product.price,
      description: product.description,
      categories: productCategories,
      createdAt: product.date_created,
    };
  };

  return Array.isArray(productOrProducts)
    ? productOrProducts.map(mapProduct)
    : mapProduct(productOrProducts);
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

export const getBreadcrumbs = (
  previousPath: any,
  currentPath: any,
  previousParams: any,
  currentParams: any,
  currentQueryID: any,
  previousQueryID: any,
  page: string
) => {
  const breadcrumbs = useBreadcrumbs();

  if (
    (currentPath === "Shop-category-subCategory" && previousPath === "index") ||
    (previousPath === "Product-product" && page === "shop")
  ) {
    breadcrumbs.value[1] = {
      name: "equipment",
      path: `/Shop/${currentParams.category}?id=${currentQueryID}`,
    };
    (breadcrumbs.value[2] = { name: "", path: "" }),
      (breadcrumbs.value[3] = { name: "", path: "" });
  } else if (
    currentPath === "Shop-category-subCategory" &&
    currentParams.category !== "" &&
    page === "shop"
  ) {
    breadcrumbs.value[1] = {
      name: currentParams.category,
      path: `/Shop/${currentParams.category}?id=${currentQueryID}`,
    };
    if (currentParams.subCategory !== "") {
      breadcrumbs.value[2] = {
        name: currentParams.subCategory,
        path: `/Shop/${currentParams.category}/${currentParams.subCategory}?id=${currentQueryID}`,
      };
    } else {
      breadcrumbs.value[2] = { name: "", path: "" };
    }
  }
  if (
    currentPath === "Product-product" &&
    previousPath === "index" &&
    page === "product"
  ) {
    breadcrumbs.value[1] = {
      name: "shop",
      path: `/Shop/equipment?id=28`,
    };
    breadcrumbs.value[2] = { name: "", path: "" };
    breadcrumbs.value[3] = {
      name: currentParams.product,
      path: `/Product/${currentParams.product}?id=${currentQueryID}`,
    };
  } else if (
    currentPath === "Product-product" &&
    previousPath === "Shop-category-subCategory" &&
    page === "product"
  ) {
    breadcrumbs.value[1] = {
      name: previousParams.category,
      path: `/Shop/${previousParams.category}?id=${previousQueryID}`,
    };
    breadcrumbs.value[2] = {
      name: previousParams.subCategory,
      path: `/Shop/${previousParams.category}/${previousParams.subCategory}?id=${previousQueryID}`,
    };
    breadcrumbs.value[3] = {
      name: currentParams.product,
      path: `/Product/${currentParams.product}?id=${currentQueryID}`,
    };
  }
};
