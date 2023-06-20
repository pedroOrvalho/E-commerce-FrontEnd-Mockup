import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Brand from "./pages/Brand";
import AboutUs from "./pages/AboutUs";
import Sustainability from "./pages/Sustainability";

import { ThemeProvider, createTheme } from "@mui/material";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#000" : "hsla(240, 1%, 85%, 0.691)",
      },
      text: {
        primary: darkMode ? "#fff" : "#000",
      },
    },
  });

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    document.body.style.color = theme.palette.text.primary;
  }, [theme.palette.background.default, theme.palette.text.primary]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar onThemeChange={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/checkout" element={<Cart />}></Route>
          <Route path="/brand" element={<Brand />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default App;
