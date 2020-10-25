import React, { useEffect, useState } from "react";
import { SearchInput } from "../components/SearchInput";
import { SearchResults } from "../components/SearchResults";
import { filter } from "../lib/search";
import Axios from "axios";
import { WineryDetails } from "../components/WineryDetails";

export const Search = () => {
  const [searchTerm, setSearchterm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any>();
  const [filteredResults, setFilteredResults] = useState<any>();
  const [showWineryDetails, setShowWineryDetails] = useState<boolean>();
  const [selectedWinery, setSelectedWinery] = useState<any>();

  // Get all the object data so we can use it in a filter on load
  const getResults = async () => {
    await Axios({
      method: "GET",
      url: `http://localhost:5000/api/search/getAllFiles`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setSearchResults(res.data);
    });
  };

  useEffect(() => {
    getResults();
  }, []);

  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    setSearchterm(e.target.value);
    if (searchResults) {
      let filtered = filter(searchResults, e.target.value.toString());
      setFilteredResults(filtered);
    }
  };

  const handleWineryDetails = (e: {
    preventDefault: () => void;
    target: { innerText: any };
  }) => {
    e.preventDefault();
    setShowWineryDetails(true);
    setSelectedWinery(e.target.innerText);
  };

  return (
    <>
      {!showWineryDetails ? (
        <>
          <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
          {filteredResults && (
            <SearchResults
              searchResults={filteredResults}
              handleWineryDetails={handleWineryDetails}
            />
          )}
        </>
      ) : (
        <WineryDetails
          selectedWinery={selectedWinery}
          setShowWineryDetails={setShowWineryDetails}
        />
      )}
    </>
  );
};
