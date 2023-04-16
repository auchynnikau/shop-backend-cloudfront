import type { ValidatedEventAPIGatewayProxyEvent } from "src/libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { STATUS_CODE } from "src/constants";
import { productValidator } from "src/validations";
import productService from "src/database/productService";

const createProduct: ValidatedEventAPIGatewayProxyEvent<any> = async (
  event: any
) => {
  try {
    const data = event.body;
    const { error } = productValidator(data);

    if (error) {
      console.log(`Validation Error on createProduct`);

      return formatJSONResponse(STATUS_CODE.BAD_REQUEST, {
        message: `Error on createProduct: ${error}`,
      });
    }

    const product = await productService.createProduct(data);

    console.log(`Success on createProduct: ${JSON.stringify(product)}`);

    return formatJSONResponse(STATUS_CODE.CREATED, { product });
  } catch (error) {
    console.log(`Error on createProduct: ${error}`);

    return formatJSONResponse(STATUS_CODE.SERVER_ERROR, {
      error,
    });
  }
};

export const main = middyfy(createProduct);
