import { APIGatewayProxyHandler } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { Product } from "src/types";
import { STATUS_CODE } from "src/constants";
import productService from "src/database/productService";

const getProductsList: APIGatewayProxyHandler = async () => {
  try {
    const products: Product[] = await productService.getProducts();
    console.log("getProductsList success!", products);
    return formatJSONResponse(STATUS_CODE.OK, { products });
  } catch (error) {
    console.log("getProductsList error!", error);
    return formatJSONResponse(STATUS_CODE.SERVER_ERROR, { error });
  }
};

export const main = middyfy(getProductsList);
