import React from "react";
import { Box, Typography } from "@mui/material";

interface DetailsProps {
  coin: {
    id: string;
    name: string;
    current_price: number;
    image: string;
  } | null; // Adjust type to allow null
}

const Details: React.FC<DetailsProps> = ({ coin }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#CDF6A0",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 2,
      }}
    >
      {coin ? (
        <>
          <h2>Details of {coin.name}</h2>
          <p>ID: {coin.id}</p>
          <p>Current Price: ${coin.current_price}</p>
          <img src={coin.image} alt={coin.name} style={{ maxWidth: "100%" }} />
        </>
      ) : (
        <Typography variant="h6">Select a coin to view details</Typography>
      )}
    </Box>
  );
};

export default Details;
