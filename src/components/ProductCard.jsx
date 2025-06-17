// src/components/ProductCard.jsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Helmet } from "react-helmet";
const ProductCard = ({ image, name, newLabel = false }) => {
   <Helmet>
        <title>Buy Premium Bags | MyStore</title>
        <meta name="description" content="Explore the latest collection of premium bags online." />
        <meta name="keywords" content="bags, premium bags, online shopping, fashion" />
        <link rel="canonical" href="https://www.mystore.com/products" />
      </Helmet>
  return (
    <Box sx={{ position: "relative" }}>
      {newLabel && (
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            top: 8,
            // left: 8,
            backgroundColor: "#fff",
            px: 1,
            py: 0.2,
            fontWeight: "bold",
            zIndex: 1
          }}
        >
          NEW PRODUCT
        </Typography>
      )}
{/* 
      {outOfStock && (
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            left: 0,
            right: 0,
            backgroundColor: "white",
            textAlign: "center",
            fontWeight: "bold",
            zIndex: 1,
            py: 0.5
          }}
        >
          OUT OF STOCK
        </Box>
      )} */}

      <Card sx={{ maxWidth: 300, position: "relative" }}>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={name}
        />
        <CardContent sx={{ pb: 1 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
            <IconButton size="small">
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary">
            <span style={{ color: "#0066c0", cursor: "pointer" }}>Sign in</span> or Create an account to see pricing
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
