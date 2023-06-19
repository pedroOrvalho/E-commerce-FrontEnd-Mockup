import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box } from "@mui/material";
import CartItem from "../components/cart/CartItem";
import CartCheckout from "../components/cart/CartCheckout";

export default function Cart() {
  const cartList = useSelector((state: RootState) => state.productsList.cartList);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} minHeight={"90vh"}>
      <Box sx={{ minWidth: "40rem" }}>
        {cartList.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
      </Box>
      <Box sx={{ minWidth: "20rem", minHeight: "30rem", textAlign: "center" }}>
        <CartCheckout />
      </Box>
    </Box>
  );
}

