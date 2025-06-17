// src/components/ProductGrid.jsx
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductData, getProductList } from "../redux/ProductSlice";
const ProductGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductList);
  // console.log("products==>", products)
  useEffect(() => {
    dispatch(getAllProductData());
  }, [dispatch]);
  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid size={{ xs: 6, md: 4, lg: 3 }} key={index}>
          <ProductCard image={product.image}
            name={product.title}
            outOfStock={product.outOfStock}
            newLabel={product.newLabel} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
