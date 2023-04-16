import { APIGatewayProxyHandler } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { Product } from "src/types";
import { STATUS_CODE } from "src/constants";
import productService from "src/database/productService";

const getProductById: APIGatewayProxyHandler = async (event: any) => {
  try {
    const product: Product = await productService.getProduct(
      event.pathParameters?.id
    );

    if (product) {
      console.log("getProductById success!", product);
      return formatJSONResponse(STATUS_CODE.OK, { product });
    } else {
      console.log("getProductById not found!");
      return formatJSONResponse(STATUS_CODE.NOT_FOUND, {
        error: "Product not found!",
      });
    }
  } catch (error) {
    console.log("getProductById error!");
    return formatJSONResponse(STATUS_CODE.SERVER_ERROR, {
      error: "Error loading product",
    });
  }
};

export const main = middyfy(getProductById);
