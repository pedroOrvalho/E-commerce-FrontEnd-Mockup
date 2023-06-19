import { Box, IconButton, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Product } from "../../types/type";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartCheckout from "./CartCheckout";

type Props = {
  cartItem: Product;
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

export default function CartItem({ cartItem }: Props) {
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
            <button> + </button>
            counter
            <button> - </button>
          </Box>
          <Box>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <DeleteForeverIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
