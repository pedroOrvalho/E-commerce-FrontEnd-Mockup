import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

import { Product } from "../../types/type";
import AddToFavoritesAndCart from "./AddToFavoritesAndCart";

type Props = {
  product: Product;
  favorites: Product[];
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
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

export default function ProductDetailInfo({
  product,
  favorites,
  setFavorites,
  cart,
  setCart,
}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "40rem", padding: "1rem 3rem" }}>
        <Typography variant="h4">{product.title}</Typography>
        <Typography>{product.description}</Typography>
        <Box sx={{ margin: "2rem 2rem" }}>
          <Typography variant="body2">
            <span>Brand:</span> {product.brand}
          </Typography>
          <Typography variant="body2">
            <span>Category:</span> {product.category}
          </Typography>
        </Box>
        <Typography sx={{ marginTop: "1rem" }} variant="body1">
          {product.price} kr
        </Typography>
        <AddToFavoritesAndCart
          product={product}
          favorites={favorites}
          setFavorites={setFavorites}
          cart={cart}
          setCart={setCart}
        />
      </Box>
    </ThemeProvider>
  );
}
