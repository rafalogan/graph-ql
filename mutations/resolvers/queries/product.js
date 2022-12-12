const realValue = (product) => {
  if (product.discount) {
    return product.price - product.price * (product.discount / 100);
  }
  return product.price;
};


export const Product = { realValue };
