import productService from "src/database/productService";

const testProduct = {
  id: "123",
  title: "Title 1",
  description: "Some description",
  price: 500,
};

describe("loadProductById", () => {
  it("should return a product if it exists", async () => {
    const mockId = "123";
    const response = await productService.getProduct(mockId);

    expect(response).toEqual(testProduct);
  });

  it("should return undefined if product doesn't exist", async () => {
    const mockId = "non-existent-id";
    const response = await productService.getProduct(mockId);

    expect(response).toBeUndefined();
  });
});
