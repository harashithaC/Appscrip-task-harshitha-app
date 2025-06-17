import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", position: "relative" }}>
        <Box sx={{ width: 32 }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          LOGO
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton><SearchIcon /></IconButton>
          <IconButton><FavoriteBorderIcon /></IconButton>
          <IconButton><ShoppingBagOutlinedIcon /></IconButton>
          <IconButton><PersonOutlineOutlinedIcon /></IconButton>
          <Button endIcon={<ArrowDropDownIcon />}>ENG</Button>
        </Box>
      </Toolbar>
      <Toolbar sx={{ justifyContent: "center", gap: 4 }}>
        <Button sx={{ fontWeight: "bold", color: "black" }}>SHOP</Button>
        <Button sx={{ fontWeight: "bold", color: "black" }}>SKILLS</Button>
        <Button sx={{ fontWeight: "bold", color: "black" }}>STORIES</Button>
        <Button sx={{ fontWeight: "bold", color: "black" }}>ABOUT</Button>
        <Button sx={{ fontWeight: "bold", color: "black" }}>CONTACT US</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
