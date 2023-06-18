import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, IconButton } from "@mui/material";

import { Product } from "../../types/type";

type Props = {
  product: Product;
  favorites: Product[];
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

export default function ProductDetailInfo({
  product,
  favorites,
  setFavorites,
  cart,
  setCart,
}: Props) {
  const isInCart = cart.some((item) => item.id === product.id);
  const isAlreadyFavorite = favorites.some(
    (favorite) => favorite.id === product.id
  );

  function handleAddToCart() {
    if (isInCart) {
      setCart((prevCart) =>
        prevCart.filter((cartItem) => cartItem.id !== product.id)
      );
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  }

  function handleAddToFavorites() {
    if (isAlreadyFavorite) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== product.id)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    }
  }
  return (
    <Box>
      <IconButton
        aria-label="add to favorites"
        color={isAlreadyFavorite ? "error" : "default"}
        onClick={handleAddToFavorites}
      >
        <FavoriteIcon />
      </IconButton>
      <IconButton
        aria-label="add to cart"
        color={isInCart ? "primary" : "default"}
        onClick={handleAddToCart}
      >
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  );
}
