import { productsMock } from "../../mocks/products.mock";
import { loadProductsList } from "../../utils";

describe("loadProductsList", () => {
  it("should return a list of products", async () => {
    const response = await loadProductsList();

    expect(response).toEqual(productsMock.products);
  });
});
