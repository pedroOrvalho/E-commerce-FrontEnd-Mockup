import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box, Paper } from "@mui/material";
import CartItem from "../components/cart/CartItem";
import CartCheckout from "../components/cart/CartCheckout";

export default function Cart() {
  const cartList = useSelector((state: RootState) => state.productsList.cartList);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "4rem 0" }} minHeight={"90vh"}>
      <Box sx={{ minWidth: "40rem" }}>
        {cartList.map((cartItem, index) => (
          <CartItem key={index} cartProduct={cartItem} />
        ))}
      </Box>
      <Paper variant="outlined" sx={{ marginLeft: "1rem", minWidth: "25rem", maxHeight: "20rem" }}>
        <CartCheckout />
      </Paper>
    </Box>
  );
}
