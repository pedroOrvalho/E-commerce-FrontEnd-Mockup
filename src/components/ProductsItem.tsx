import { Link } from "react-router-dom";
import { Product } from "../types/type";

type Props = {
  product: Product;
};

export default function ProductsItem({ product }: Props) {
  return (
    <div>
      <img src={product.images[2]} alt={product.description} />
      <p>{product.title}</p>
      <p>{product.price}€</p>
      <Link to={`/products/${product.id}`}>
        <button>Detail</button>
      </Link>
    </div>
  );
}
