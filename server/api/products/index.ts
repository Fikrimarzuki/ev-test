import data from "~/db.json"
export default defineEventHandler(async (event: any) => {
  let products = data.products;
  const query = getQuery(event)
  
  if (Object.keys(query).length) {
    for (const key in query) {
      if (key === "storage"){
        const k = query[key] === "1000" ? "1 TB" : query[key] as string;
        products = query[key] ? products.filter(el => {
          return el.variations.filter(vr => {
            return vr.storage.filter(st => +st.split(" ")[0] === +k || st === k).length
          }).length
        }) : products;
      } else {
        products = query[key] ? products.filter((el: any) => el[key]?.toLowerCase().includes(query[key])) : products;
      }
    }
    // products = query.category ? products.filter(el => el.category === query.category) : products;
    // products = query.product_type ? products.filter(el => el.product_type === query.product_type) : products;
    // products = query.keyword ? products.filter(el => el.title.toLowerCase().includes(query.keyword as string)) : products;
  }
  return products
})