import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  increment,
  decrement,
  setFavoriteList,
  deleteFromCart,
} from "../../redux/slices/productsSlice";

import { Box, Button, IconButton, ThemeProvider, Typography, createTheme } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { CartProduct, Product } from "../../types/type";

type Props = {
  cartProduct: CartProduct;
};

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body1" },
          style: {
            fontWeight: "bold",
            color: "black",
          },
        },
        {
          props: { variant: "body2" },
          style: {
            color: "hsla(0, 0%, 0%, 0.65)",
          },
        },
      ],
    },
  },
});

export default function CartItem({ cartProduct }: Props) {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state: RootState) => state.productsList.favoritesList);
  const cartItem = cartProduct.cartProduct.product;
  const cartItemQty = cartProduct.cartProduct.quantity;
  const isAlreadyFavorite = favoriteList.some((favoriteItem) => favoriteItem.id === cartItem.id);

  function handleAddToFavorites(favoriteProduct: Product) {
    if (isAlreadyFavorite) {
      const newFavoriteList = favoriteList.filter((favorite) => favorite.id !== favoriteProduct.id);
      dispatch(setFavoriteList(newFavoriteList));
    } else {
      const newFavoriteList = [...favoriteList, favoriteProduct];
      dispatch(setFavoriteList(newFavoriteList));
    }
  }

  function handleDeleteFromCart(product: Product) {
    dispatch(deleteFromCart(product));
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          paddingBottom: "2rem",
          borderBottom: "1px solid ",
        }}
      >
        <img src={cartItem.thumbnail} alt={cartItem.description} width={"200px"} height={"150px"} />
        <Box sx={{ margin: "1rem 2rem", width: "100%" }}>
          <Typography variant="body1">{cartItem.title}</Typography>
          <Typography variant="body2">
            <span>Brand:</span> {cartItem.brand}
          </Typography>
          <Typography variant="body2">
            <span>Category:</span> {cartItem.category}
          </Typography>
          <Typography sx={{ marginTop: "1rem" }} variant="body1">
            {cartItem.price} kr
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Qty</Typography>
          <Box>
            <Button onClick={() => dispatch(increment(cartItem))}> + </Button>
            {cartItemQty}
            <Button onClick={() => dispatch(decrement(cartItem))}> - </Button>
          </Box>
          <Box>
            <IconButton onClick={() => handleAddToFavorites(cartItem)}>
              <FavoriteIcon
                sx={{ color: isAlreadyFavorite ? "hsla(359, 66%, 54%, 1)" : "hsla(0, 0%, 40%, 1)" }}
              />
            </IconButton>
            <IconButton onClick={() => handleDeleteFromCart(cartItem)}>
              <DeleteForeverIcon sx={{ color: "hsla(0, 0%, 40%, 1)" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
