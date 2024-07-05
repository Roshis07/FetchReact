import React from "react";
import List from "./List";

interface BodyProps {
  searchQuery: string; // Define searchQuery as a prop
}

const Body: React.FC<BodyProps> = ({ searchQuery }) => {
  console.log(searchQuery);
  return <List searchQuery={searchQuery} />;
};

export default Body;
