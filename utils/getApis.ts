export const getCategoriesUrl = (source: string) => {
  let url = `${source}api/products?type=categories`;
  return url;
};

export const getNewProductsUrl = (source: string, itemsPerPage: number) => {
  let url = `${source}api/products?type=newProducts&&itemsPerPage=${itemsPerPage}&&sortBy=date`;
  return url;
};

export const getProductsUrl = (
  source: string,
  minPrice: number,
  maxPrice: number,
  currentPage: number,
  itemsPerPage: number,
  sortBy: string,
  selectedCategoryId: number
) => {
  let url = `${source}api/products?type=allProducts&&currentPage=${currentPage}&&minPrice=${minPrice}&&maxPrice=${maxPrice}&&itemsPerPage=${itemsPerPage}&&sortBy=${sortBy}&&selectedCategoryId=${selectedCategoryId}`;
  return url;
};
