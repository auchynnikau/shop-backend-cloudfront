import { APIGatewayProxyHandler } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { Product } from "../../types";
import { loadProductById } from "../../utils";

const getProductById: APIGatewayProxyHandler = async (event: any) => {
  try {
    const product: Product = await loadProductById(event.pathParameters?.id);

    if (product) {
      console.log("getProductById success!", product);
      return formatJSONResponse({ product });
    } else {
      console.log("getProductById not found!");
      return formatJSONResponse({ error: "Product not found!" });
    }
  } catch (error) {
    console.log("getProductById error!");
    return formatJSONResponse({ error: "Error loading product" });
  }
};

export const main = middyfy(getProductById);
