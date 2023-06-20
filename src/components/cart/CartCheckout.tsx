import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { Box, Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import { CartProduct } from "../../types/type";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
    button: { fontWeight: "bold" },
    h5: {
      fontSize: "2rem",
    },
  },
});

export default function CartCheckout() {
  const cartList = useSelector((state: RootState) => state.productsList.cartList);
  const totalArray = cartList.map((cartProduct: CartProduct) => {
    const value = cartProduct.cartProduct.product.price;
    const qty = cartProduct.cartProduct.quantity;
    return value * qty;
  });

  const total = totalArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100%", margin: "1rem 1.5rem" }}>
        <Box
          sx={{
            paddingBottom: "1rem",
            borderBottom: "1px solid hsla(0, 0%, 0%, 0.2)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Checkout</Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "1rem",
            }}
          >
            <Typography>Subtotal</Typography>
            <Typography>
              <span>{total}</span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "1rem",
              borderBottom: "1px solid hsla(0, 0%, 0%, 0.2)",
            }}
          >
            <Typography>Estimated Delivery & Handling</Typography>
            <Typography>
              <span>{total === 0 ? 0 : "89 kr"}</span>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 0rem",
            borderBottom: "1px solid hsla(0, 0%, 0%, 0.2)",
          }}
        >
          <Typography variant="h6">Total</Typography>
          <Typography>
            <span>{total === 0 ? 0 : total + 89} kr</span>
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            height: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              color: "white",
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "gray",
              },
              borderRadius: "20px",
              height: "2.5rem",
              width: "9rem",
            }}
            variant="contained"
          >
            <Typography variant="button"> Checkout</Typography>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
