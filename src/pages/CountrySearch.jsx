import React from "react";
import SearchBar from "../components/SearchBar";

class CountrySearch extends React.Component {
  search() {
    console.log("searching...");
  }

  render() {
    return (
      <section>
        <h2>Search by country</h2>
        <SearchBar placeholder="Enter a country" />
      </section>
    );
  }
}

export default CountrySearch;
