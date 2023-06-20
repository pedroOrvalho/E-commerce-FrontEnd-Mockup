import { Link, useParams } from "react-router-dom";
import { fetchProductDetailData } from "../redux/thunk/productThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import ProductVerticalSlider from "../components/ProductDetail/ProductVerticalSlider";
import ProductDetailInfo from "../components/ProductDetail/ProductDetailInfo";

import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.productsList.product);
  const isLoading = useSelector((state: RootState) => state.productsList.isLoading);

  useEffect(() => {
    dispatch(fetchProductDetailData(id));
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  } else
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{margin:"1.5rem 3rem"}}>
          <Link to="/products" className="link-no-style ">
            <Button
              sx={{
                color: "white",
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "gray",
                },
                borderRadius: "20px",
              }}
              variant="contained"
            >
            <ArrowBackIcon/>
            </Button>
          </Link>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: "40rem",
              padding: "2rem 12rem",
              justifyContent: "center",
            }}
          >
            <Box sx={{ height: "100%", width: "100%" }}>
              <ProductVerticalSlider product={product} />
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                textAlign: "center",
                display: "flex",
              }}
            >
              <ProductDetailInfo product={product} />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    );
}
