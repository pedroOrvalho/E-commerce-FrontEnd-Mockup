import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Product } from "../types/type";
import { Badge } from "@mui/material";

export default function Wishlist() {
  const [open, setOpen] = React.useState<boolean>(false);
  const favoritesList = useSelector(
    (state: RootState) => state.productsList.favoritesList
  );

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setOpen(open);
    };

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
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={favorite.title} />
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
        <Badge
          variant="dot"
          color={favoritesList.length > 0 ? "error" : undefined}
        >
          <FavoriteBorderIcon sx={{ color: "black" }} />
        </Badge>
      </Button>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </Box>
  );
}
