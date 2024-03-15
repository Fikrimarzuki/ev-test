import data from "~/db.json"
export default defineEventHandler(async (event: any) => {
  const products = data.products;
  const productId = event.context.params.id;
  const product = products.find(el => el.id === productId);
  return product
})