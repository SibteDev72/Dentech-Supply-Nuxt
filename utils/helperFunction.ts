import type { CategoryItem, SubCategoryItemn } from "~/types/Products";

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
