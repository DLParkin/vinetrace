import React from "react";
import { ListGroup } from "reactstrap";
import { SearchListGroupItem } from "./SearchListGroupItem";

interface Props {
  searchResults: any;
  handleWineryDetails: (e: any) => void;
}

export const SearchResults = ({
  searchResults,
  handleWineryDetails,
}: Props) => {
  return (
    <ListGroup>
      {searchResults &&
        searchResults.map((result: any, index: number) => (
          <SearchListGroupItem
            handleWineryDetails={handleWineryDetails}
            result={result}
            key={index}
          />
        ))}
    </ListGroup>
  );
};
