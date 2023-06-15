import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Product } from "../types/type";

type Props = {
  product: Product;
  favorites: Product[];
  setFavorites: Dispatch<SetStateAction<Product[]>>;
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
};

export default function ProductsItem({ product, favorites, setFavorites, cart, setCart }: Props) {
  const isAlreadyFavorite = favorites.some((favorite) => favorite.id === product.id);
  const isInCart = cart.some((item) => item.id === product.id);

  function handleAddToCart() {
    if (isInCart) {
      setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== product.id));
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  }

  function handleAddToFavorites() {
    if (isAlreadyFavorite) {
      setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== product.id));
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    }
  }

  return (
    <div className="productItem_container">
      <img src={product.thumbnail} alt={product.description} />
      <p>{product.title}</p>
      <p>{product.price}€</p>
      <Link to={`/products/${product.id}`}>
        <button>Detail</button>
      </Link>
      <IconButton
        aria-label="add to favorites"
        color={isAlreadyFavorite ? "error" : "default"}
        onClick={handleAddToFavorites}
      >
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="add to cart" color={isInCart ? "primary" : "default"} onClick={handleAddToCart}>
        <ShoppingCartIcon />
      </IconButton>
    </div>
  );
}
