import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Link } from "react-router-dom";

import HomeSlider from "../components/HomeSlider";

import { fetchProductsData } from "../redux/thunk/productThunk";

import { Box, Button, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Home() {
  const productList = useSelector(
    ({ productsList }: RootState) => productsList.products
  );
  const isLoading = useSelector(
    ({ productsList }: RootState) => productsList.isLoading
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "4rem",
        fontWeight: 600,
        textAlign: "center",
      },
      h2: {
        fontSize: "3rem",
        fontWeight: 600,
        textAlign: "center",
      },
      body1: {
        textAlign: "center",
      },
    },
  });

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  }
  return (
    <Box padding={"1rem 6rem"}>
      <ThemeProvider theme={theme}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h1">NEW PRODUCTS</Typography>
          <Typography variant="h2">NEW PROMOS</Typography>
          <Typography sx={{ width: "41rem" }} variant="body1">
            Explore the best of both worlds with our exciting range of new
            products. Stay up-to-date with the latest advancements in mobile
            technology while enjoying our high-quality beauty creams. Experience
            innovation and elegance, all conveniently available in one place.
          </Typography>
          <Box margin="1.5rem 0rem">
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
                Shop Now
            </Button>
              </Link>
          </Box>
        </Box>
        {<HomeSlider product={productList[0]} />}
      </ThemeProvider>
    </Box>
  );
}
