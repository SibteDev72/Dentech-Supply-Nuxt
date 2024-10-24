import type {
  CategoryItem,
  SubCategoryItemn,
  ProductItem,
} from "~/types/Products";

export const categoriesMapper = (categories: any) => {
  const cat = useCategories();
  categories.map((category: any) => {
    if (category.parent === 0) {
      let obj: CategoryItem = {
        id: category.id,
        imgSrc: category.image?.src || "",
        title: category.name,
        slug: category.slug,
        subCategory: [],
      };
      categories.map((subCategory: any) => {
        if (subCategory.parent === category.id) {
          let subCatObj: SubCategoryItemn = {
            id: subCategory.id,
            title: subCategory.name,
            slug: subCategory.slug,
          };
          //@ts-ignore
          obj.subCategory.push(subCatObj);
        }
      });
      cat.value.push(obj);
    }
  });
};
export const productsMapper = (products: any) => {
  let productArray: ProductItem[] = [];
  products.map((product: any) => {
    productArray.push({
      id: product.id,
      imgSrc: product.images,
      title: product.name,
      price: product.price,
      description: product.description,
      category: product.categories,
      createdAt: product.date_created,
    });
  });
  return productArray;
};
