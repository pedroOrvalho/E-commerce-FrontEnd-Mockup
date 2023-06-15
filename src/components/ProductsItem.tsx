import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

import { IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Product } from "../types/type";

type Props = {
  product: Product;
  favorites: Product[];
  setFavorites: Dispatch<SetStateAction<Product[]>>;
};

export default function ProductsItem({ product, favorites, setFavorites }: Props) {
  const isAlreadyFavorite = favorites.some((favorite) => favorite.id === product.id);

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
    </div>
  );
}
