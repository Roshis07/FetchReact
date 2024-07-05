import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import MediaCard from "./MediaCard";
import Details from "./Details";

interface ListProps {
  searchQuery: string; // Define searchQuery as a prop
}

interface Coin {
  id: string;
  name: string;
  current_price: number;
  image: string;
}

const List: React.FC<ListProps> = ({ searchQuery }) => {
  const [fetchData, setFetchData] = useState<Coin[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

  useEffect(() => {
    async function fetchDataFromApi() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Coin[] = await response.json();
        setFetchData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetchData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchDataFromApi();
  }, []);

  const handleCoinSelect = (coin: Coin) => {
    setSelectedCoin(coin);
  };

  // Filter fetchData based on searchQuery if needed
  useEffect(() => {
    if (fetchData && searchQuery.trim() !== "") {
      const filteredData = fetchData.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFetchData(filteredData);
    }
  }, [searchQuery]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" spacing={0} sx={{ height: "100%", width: "100%" }}>
        <Box
          sx={{
            backgroundColor: "white",
            flex: 1,
            p: 2,
            height: "100vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none", // IE and Edge
            "scrollbar-width": "none", // Firefox
          }}
        >
          {loading ? (
            <p>Loading...</p>
          ) : fetchData ? (
            <Grid container spacing={2}>
              {fetchData.map((coin) => (
                <Grid item xs={12} sm={6} md={6} key={coin.id}>
                  <MediaCard
                    name={coin.name}
                    currentPrice={coin.current_price}
                    image={coin.image}
                    onClick={() => handleCoinSelect(coin)}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <p>Data fetching error</p>
          )}
          {/* Custom design when no coin is selected */}
          {!selectedCoin && !loading && fetchData && fetchData.length === 0 && (
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="h6">No results found</Typography>
            </Box>
          )}
        </Box>
        <Details coin={selectedCoin} />
        {/* Render Details component with selected coin */}
      </Stack>
    </div>
  );
};

export default List;
