import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NavBar from "./Components/NavBar";
import List from "./Components/List";

const theme = createTheme();

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: 0, padding: 0 }}>
        <NavBar onSearch={handleSearch} />
        <List searchQuery={searchQuery} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
