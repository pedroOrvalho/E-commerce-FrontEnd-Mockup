import React from "react";
import { addToCart, deleteFromCart, setFavoriteList } from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductSnackBar from "../ProductSnackBar";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, Typography } from "@mui/material";

import { Product } from "../../types/type";

type Props = {
  product: Product;
};

export default function ProductDetailInfo({ product }: Props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const favoriteList = useSelector((state: RootState) => state.productsList.favoritesList);
  const cartList = useSelector((state: RootState) => state.productsList.cartList);
  const isAlreadyFavorite = favoriteList.some((favoriteItem) => favoriteItem.id === product.id);
  const isInCart = cartList.some((item) => item.cartProduct.product.id === product.id);

  function handleAddToFavorites(favoriteProduct: Product) {
    if (isAlreadyFavorite) {
      const newFavoriteList = favoriteList.filter((favorite) => favorite.id !== favoriteProduct.id);
      dispatch(setFavoriteList(newFavoriteList));
    } else {
      const newFavoriteList = [...favoriteList, favoriteProduct];
      dispatch(setFavoriteList(newFavoriteList));
      setOpen(true);
    }
  }

  function handleAddToCart(product: Product) {
    dispatch(addToCart(product));
  }

  function handleDeleteFromCart(product: Product) {
    dispatch(deleteFromCart(product));
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
        onClick={isInCart ? () => handleDeleteFromCart(product) : () => handleAddToCart(product)}
      >
        {isInCart ? (
          <Typography sx={{ color: "white" }}>Remove from cart</Typography>
        ) : (
          <Typography sx={{ color: "white" }}>Add to cart</Typography>
        )}
      </Button>
      <ProductSnackBar open={open} setOpen={setOpen} product={product} />
    </Box>
  );
}
