import { useParams } from "react-router-dom";
import { fetchProductDetailData } from "../redux/thunk/productThunk";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setCartList, setFavoritesList } from "../redux/slices/productsSlice";

import ProductVerticalSlider from "../components/ProductDetail/ProductVerticalSlider";
import ProductDetailInfo from "../components/ProductDetail/ProductDetailInfo";

import { Box, createTheme, ThemeProvider } from "@mui/material";

import { Product } from "../types/type";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

export default function ProductDetail() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const dispatchThunk = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.productsList.product);
  const isLoading = useSelector(
    (state: RootState) => state.productsList.isLoading
  );

  useEffect(() => {
    if (cart.length > 0) {
      dispatchThunk(setCartList(cart));
    }
  }, [dispatchThunk, cart]);

  useEffect(() => {
    if (favorites.length > 0) {
      dispatchThunk(setFavoritesList(favorites));
    }
  }, [dispatchThunk, favorites]);

  useEffect(() => {
    dispatchThunk(fetchProductDetailData(id));
  }, [id, dispatchThunk]);

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  } else
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "40rem",
            padding: "5rem 12rem",
          }}
        >
          <Box sx={{ height: "40rem" }}>
            <ProductVerticalSlider product={product} />
          </Box>
          <Box sx={{ height: "40rem", padding: "1rem 3rem" }}>
            <Box>
              <ProductDetailInfo
                product={product}
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    );
}
