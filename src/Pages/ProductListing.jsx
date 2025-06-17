import React from "react";
import { Grid, Box, Typography, Divider, Button } from "@mui/material";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductListing = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: 600 }}>
        DISCOVER OUR PRODUCTS
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3} sx={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </Typography>

      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>3425 ITEMS</Typography>
          <Button
            sx={{ color: "#888", fontSize: "0.8rem", textTransform: "none", display: "flex", alignItems: "center" }}
            startIcon={<ArrowBackIosNewIcon sx={{ fontSize: "0.9rem" }} />}
          >
            HIDE FILTER
          </Button>
        </Box>

        <Button
          endIcon={<ExpandMoreIcon />}
          sx={{ fontWeight: "bold", color: "black", textTransform: "none" }}
        >
          RECOMMENDED
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid size={{xs:12,md:3}}>
          <Filters />
        </Grid>
        <Grid size={{xs:12,md:9}}>
          <ProductGrid />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductListing;
