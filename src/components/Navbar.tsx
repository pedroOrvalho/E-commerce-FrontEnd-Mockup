import logo from "../images/Color logo - no background.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

import Wishlist from "./Wishlist";

import {
  Badge,
  Box,
  Button,
  Paper,
  Stack,
  Switch,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "hsla(0, 0%, 0%, 1)",
    },
  },
  typography: {
    fontFamily: ["Oswald", "sans-serif"].join(","),
    fontSize: 14,
    fontWeightMedium: 400,
  },
});

export default function Navbar() {
  const cartListLength = useSelector(
    (state: RootState) => state.productsList.cartList.length
  );

  return (
    <Box
      component="nav"
      role="navigation"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 1,
          height: 90,
          marginTop: 0,
        },
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ThemeProvider theme={theme}>
          <div className="nav_logo_container">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <Stack
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            sx={{ marginTop: "1.5rem" }}
          >
              <Link to="/" className="link-no-style ">
            <Button variant="text">
                Home
            </Button>
              </Link>
              <Link to="/brand" className="link-no-style ">
            <Button variant="text">
                Brand
            </Button>
              </Link>
              <Link to="/sustainability" className="link-no-style ">
            <Button variant="text">
                Sustainability
            </Button>
              </Link>
              <Link to="/aboutUs" className="link-no-style ">
            <Button variant="text">
                About Us
            </Button>
              </Link>
          </Stack>
        </ThemeProvider>
        <Stack
          direction={"row"}
          spacing={0}
          alignItems={"center"}
          marginRight={"2rem"}
        >
          <Wishlist />
          <Button sx={{ paddingLeft: "0", marginRight: "1rem" }}>
            <Link to="/products/checkout" className="link-no-style ">
              <Badge badgeContent={cartListLength} sx={{ color: "black" }}>
                <ShoppingCartCheckoutIcon sx={{ color: "black" }} />
              </Badge>
            </Link>
          </Button>
          <MaterialUISwitch />
        </Stack>
      </Paper>
    </Box>
  );
}
