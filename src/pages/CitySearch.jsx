import React from "react";
import SearchBar from "../components/SearchBar";
import { useParams } from "react-router-dom";

class CitySearch extends React.Component {

    constructor(props){
        super(props);
        console.log("constructor city search")
        
       
    }
  search() {
    console.log("searching...");
  }

  render() {
    return (
      <section>
        <h2>Search by city</h2>
        <SearchBar placeholder="Enter a city"  />
      </section>
    );
  }
}

export default CitySearch;
