import { Link } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box, Paper } from "@mui/material";

import { Product } from "../types/type";

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

export default function ProductsItem({ product }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Paper variant="outlined" sx={{ height: "100%", width: "100%" }}>
        <Link to={`/products/${product.id}`}>
          <Box sx={{ margin: "1rem 1rem" }}>
            <div className="image-container">
              <img
                className="product_img"
                src={product.thumbnail}
                alt={product.description}
              />
            </div>
          </Box>
        </Link>
        <Box sx={{ margin: "2rem 2rem" }}>
          <Typography sx={{ marginBottom: "0.5rem" }} variant="body1">
            {product.title}
          </Typography>
          <Typography variant="body2">
            <span>Brand:</span> {product.brand}
          </Typography>
          <Typography variant="body2">
            <span>Category:</span> {product.category}
          </Typography>
          <Typography sx={{ marginTop: "1rem" }} variant="body1">
            {product.price} kr
          </Typography>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
