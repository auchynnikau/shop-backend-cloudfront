import { loadProductById } from "../../utils";

const mockProduct = {
  id: "1",
  title: "Product 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  price: 9.99,
  imageUrl: "https://example.com/images/product1.jpg",
};

describe("loadProductById", () => {
  it("should return a product if it exists", async () => {
    const mockId = "1";
    const response = await loadProductById(mockId);

    expect(response).toEqual(mockProduct);
  });

  it("should return undefined if product doesn't exist", async () => {
    const mockId = "non-existent-id";
    const response = await loadProductById(mockId);

    expect(response).toBeUndefined();
  });
});
