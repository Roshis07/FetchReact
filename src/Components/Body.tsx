import React from "react";
import List from "./List";

interface BodyProps {
  searchQuery: string; // Define searchQuery as a prop
}

const Body: React.FC<BodyProps> = ({ searchQuery }) => {
  return (
    <div>
      <List searchQuery={searchQuery} /> {/* Pass searchQuery to List */}
    </div>
  );
};

export default Body;
