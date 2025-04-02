import { useState } from "react"
import ProductCards from "./ProductCards"
import productsData from '../../data/products.json'
import { TProducts } from "../../types/Products"

const products = productsData as TProducts[];
const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)
    }
  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader ">
        Discover the Hottest Picks: Elevate Your style with our Curated
        Collection of Trending Woman's Fashion Products.
      </p>
  
      {/* products card */}
      
      <ProductCards products={products.slice(0, visibleProducts)} />
      
      {/* load more product btn */}
      <div className="product__btn">
        {
          visibleProducts < products.length && (
            <button className="btn" onClick={loadMoreProducts}>Load More</button>
          )
        }
      </div>
      
    </section>
  );
}

export default TrendingProducts