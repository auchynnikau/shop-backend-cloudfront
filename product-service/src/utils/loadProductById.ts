import { productsMock } from "../mocks/products.mock";
import { Product } from "../types/product";

export const loadProductById = (id: string): Promise<Product> => {
  return Promise.resolve(
    productsMock.products.find((item: Product) => item.id === id)
  );
};
