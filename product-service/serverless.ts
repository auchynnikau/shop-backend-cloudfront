import type { AWS } from "@serverless/typescript";
import getProductById from "@functions/getProductById";
import getProductsList from "@functions/getProductsList";

const serverlessConfiguration: AWS = {
  service: "product-service",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-auto-swagger"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "us-east-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    stage: "dev",
  },
  functions: {
    getProductById,
    getProductsList,
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    autoswagger: {
      host: "zvlq7990u2.execute-api.us-east-1.amazonaws.com/dev/",
      excludeStages: ["production"],
    },
  },
};

module.exports = serverlessConfiguration;
