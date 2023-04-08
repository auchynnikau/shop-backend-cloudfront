import { APIGatewayProxyHandler } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { Product } from "../../types";
import { loadProductsList } from "../../utils";

const getProductsList: APIGatewayProxyHandler = async () => {
  try {
    const products: Product[] = await loadProductsList();
    console.log("getProductsList success!", products);
    return formatJSONResponse({ products });
  } catch (error) {
    console.log("getProductsList error!", error);
  }
};

export const main = middyfy(getProductsList);
