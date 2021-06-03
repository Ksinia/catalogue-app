let productApiUrl = "http://127.0.0.1:3004/http://host.docker.internal:3001";
let reviewApiUrl = "http://127.0.0.1:3004/http://host.docker.internal:3002";

if (
  process.env.REACT_PRODUCT_API !== "" &&
  process.env.REACT_PRODUCT_API !== undefined
) {
  productApiUrl = process.env.REACT_PRODUCT_API;
}

if (
  process.env.REACT_REVIEWS_API !== "" &&
  process.env.REACT_REVIEWS_API !== undefined
) {
  reviewApiUrl = process.env.REACT_REVIEWS_API;
}

export { productApiUrl, reviewApiUrl };
