import { productsMock } from "../mocks/products.mock";
import { Product } from "../types/product";

export const loadProductsList = (): Promise<Product[]> => {
  return Promise.resolve(productsMock.products);
};
