import { Link } from "react-router";
import { TProducts } from "../../types/Products";
import RatingStars from "../../components/home/RatingStars";

interface ProductCardsProps {
    products: TProducts[];
}

const ProductCards:React.FC<ProductCardsProps> = ({products}) => {
   
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
      {products.map((product, index) => (
        <div key={index} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product.id}`}>
              <img
                src={product.image}
                alt="product image"
                className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
              />
            </Link>
            <div className="hover:block absolute top-3 right-3">
              <button>
                <i className="ri-shopping-cart-2-line bg-primary p-1.5 text-white hover:bg-primary-dark cursor-pointer"></i>
              </button>
            </div>
              </div>

              {/* product description */}
              <div className="product__card__content">
                  <h4>{product.name}</h4>
            <p>${product.price} {product.oldPrice ? <s>${product?.oldPrice}</s> : null}</p>
            <RatingStars rating={product.rating} />
              </div>

        </div>
      ))}
    </div>
  );
}

export default ProductCards