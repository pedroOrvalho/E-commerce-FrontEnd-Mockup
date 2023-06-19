import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { Product } from "../types/type";
import { Badge, IconButton } from "@mui/material";
import { addToCart, setFavoriteList, deleteFromFavorite } from "../redux/slices/productsSlice";

export default function Wishlist() {
  const [open, setOpen] = React.useState<boolean>(false);
  const favoritesList = useSelector((state: RootState) => state.productsList.favoritesList);
  const dispatch = useDispatch();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(open);
  };

  function handleAddToCart(product: Product) {
    dispatch(addToCart(product));
    const newFavoriteList = favoritesList.filter((cartItem) => cartItem.id !== product.id);
    dispatch(setFavoriteList(newFavoriteList));
  }

  function handleRemoveFromFavorite(product: Product) {
    dispatch(deleteFromFavorite(product));
  }
  const list = (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {favoritesList.map((favorite: Product) => (
          <ListItem key={favorite.id} disablePadding>
            <ListItemButton>
              <img src={favorite.images[0]} alt="pic" width={"50px"}></img>
              <ListItemText sx={{ marginLeft: "10px" }} primary={favorite.title} />
              <IconButton>
                <DeleteForeverIcon onClick={() => handleRemoveFromFavorite(favorite)} />
              </IconButton>
              <IconButton onClick={() => handleAddToCart(favorite)}>
                <AddShoppingCartIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box>
      <Button onClick={toggleDrawer(true)} sx={{ paddingRight: "0" }}>
        <Badge variant="dot" color={favoritesList.length > 0 ? "error" : undefined}>
          <FavoriteBorderIcon sx={{ color: "black" }} />
        </Badge>
      </Button>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </Box>
  );
}
