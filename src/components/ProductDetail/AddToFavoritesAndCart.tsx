import { setCartList, setFavoriteList } from "../../redux/slices/productsSlice";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, Typography } from "@mui/material";

import { Product } from "../../types/type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type Props = {
  product: Product;
};

export default function ProductDetailInfo({ product }: Props) {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state: RootState) => state.productsList.favoritesList);
  const cartList = useSelector((state: RootState) => state.productsList.cartList);
  const isAlreadyFavorite = favoriteList.some((favoriteItem) => favoriteItem.id === product.id);
  const isInCart = cartList.some((item) => item.id === product.id);

  function handleAddToFavorites(favoriteProduct: Product) {
    if (isAlreadyFavorite) {
      const newFavoriteList = favoriteList.filter((favorite) => favorite.id !== favoriteProduct.id);
      dispatch(setFavoriteList(newFavoriteList));
    } else {
      const newFavoriteList = [...favoriteList, favoriteProduct];
      dispatch(setFavoriteList(newFavoriteList));
    }
  }

  function handleAddToCart(product: Product) {
    if (isInCart) {
      const newCart = cartList.filter((cartItem) => cartItem.id !== product.id);
      dispatch(setCartList(newCart));
    } else {
      const newCart = [...cartList, product];
      dispatch(setCartList(newCart));
    }
  }

  return (
    <Box sx={{}}>
      <Button
        sx={{
          color: "white",
          backgroundColor: "hsla(0, 0%, 4%, 0.9)",
          "&:hover": {
            backgroundColor: "hsla(0, 0%, 6%, 0.75)",
          },
          borderRadius: "20px",
          width: "7rem",
          height: "3rem",
        }}
        variant="contained"
        aria-label="add to favorites"
        onClick={() => handleAddToFavorites(product)}
      >
        <FavoriteIcon sx={{ color: isAlreadyFavorite ? "hsla(359, 66%, 54%, 1)" : "white" }} />
      </Button>
      <Button
        sx={{
          color: "white",
          backgroundColor: "hsla(0, 0%, 1%, 0.9)",
          "&:hover": {
            backgroundColor: "hsla(0, 0%, 6%, 0.75)",
          },
          borderRadius: "20px",
          width: "13rem",
          height: "3rem",
          margin: "3rem 2rem",
        }}
        variant="contained"
        aria-label="add to cart"
        onClick={() => handleAddToCart(product)}
      >
        {isInCart ? (
          <Typography sx={{ color: "white" }}>Remove from cart</Typography>
        ) : (
          <Typography sx={{ color: "white" }}>Add to cart</Typography>
        )}
      </Button>
    </Box>
  );
}
