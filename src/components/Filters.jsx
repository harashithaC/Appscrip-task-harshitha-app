// src/components/Filters.jsx
import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const filters = [
  "CUSTOMIZABLE",
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR"
];

const Filters = () => {
  return (
    <Box>
      {filters.map((filter) => (
        <Accordion key={filter} defaultExpanded={filter === "CUSTOMIZABLE"}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {filter}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">All</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Filters;
