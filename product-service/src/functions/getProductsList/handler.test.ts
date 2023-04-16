import productsMock from "src/mocks/products.mock.json";
import productService from "src/database/productService";

describe("loadProductsList", () => {
  it("should return a list of products", async () => {
    const response = await productService.getProducts();

    expect(response).toEqual(productsMock);
  });
});
