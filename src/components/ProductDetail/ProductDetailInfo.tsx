import { Box, Paper, ThemeProvider, Typography, createTheme } from "@mui/material";

import { Product } from "../../types/type";
import AddToFavoritesAndCart from "./AddToFavoritesAndCart";

type Props = {
  product: Product;
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
            color: "hsla(0, 0%, 0%, 1)",
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

export default function ProductDetailInfo({ product }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "1rem",
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            margin: "1rem 3rem",
          }}
        >
          <Box>
            <Typography sx={{ paddingBottom: "2rem" }} variant="h3">
              {product.title}
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Box sx={{ margin: "2rem 2rem" }}>
              <Typography variant="body2">
                <span>Brand:</span> {product.brand}
              </Typography>
              <Typography variant="body2">
                <span>Category:</span> {product.category}
              </Typography>
            </Box>
            <Typography sx={{ margin: "1rem 0rem" }} variant="body1">
              {product.price} kr
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <AddToFavoritesAndCart product={product} />
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
