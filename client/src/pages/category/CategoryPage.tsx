import { useParams } from "react-router"

import products from "../../data/products.json";
import { useEffect, useState } from "react";
import ProductCards from "../shop/ProductCards";
import { TProducts } from "../../types/Products";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProduct] = useState<TProducts[ ]>([]);

  useEffect(() => {
    const filterd = products.filter((product) => product.category === categoryName?.toLowerCase());

    setFilteredProduct(filterd as TProducts[])
  }, [categoryName])
  
  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today</p>
      </section>
      {/* product card */}
      <div className="section__container">
        <ProductCards products={filteredProducts} />
      </div>
    </>
  );
}

export default CategoryPage