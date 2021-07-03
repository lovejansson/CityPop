import React from "react";
import iso from "country-code-lookup";
import "../styles/search-bar.css";
import { capitalize } from "../utils/helperMethods";

class CountrySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMsg: "", hasError: false };
    this.search = this.search.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.searchText = "";
  }

  isUnitedKingdom(text) {
    return ["england", "scotland", "wales"].includes(text.toLowerCase());
  }

  isUsa(text) {
    return ["usa", "us", "america", "united states of america"].includes(
      text.toLowerCase()
    );
  }

  search() {
    if (this.searchText === "") {
      this.setState({
        errorMsg: "Please enter a search text",
        hasError: true,
      });
      return;
    }

    if (this.isUnitedKingdom(this.searchText)) {
      this.searchText = "United Kingdom";
    }

    if (this.isUsa(this.searchText)) {
      this.searchText = "United States";
    }

    this.searchText = capitalize(this.searchText);

    const country = iso.byCountry(this.searchText);

    if (!country) {
      this.setState({
        errorMsg: "Invalid country name",
        hasError: true,
      });
      return;
    }

    this.props.history.push(`/countries/${country.country}`);
  }

  onChangeHandler(event) {
    this.setState({
      errorMsg: "",
      hasError: false,
    });
    this.searchText = event.target.value;
  }

  render() {
    return (
      <section>
        <h2>Search by country</h2>
        <section class="search-bar">
          <input
            type="text"
            placeholder="Enter a country"
            onChange={this.onChangeHandler}
          ></input>
          <button class="search-button" onClick={this.search}>
            <i class="fas fa-search"></i>
          </button>
        </section>

        {this.state.hasError && <p class="error-msg">{this.state.errorMsg}</p>}
      </section>
    );
  }
}

export default CountrySearch;
