import React from "react";
import iso from "country-code-lookup";
import "../styles/search-bar.css";

class CountrySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMsg: "", hasError: false };
    this.search = this.search.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.searchText = "";
    console.log(this.props)
  }

  capitalize(text) {
    const textArray = text.split(" ");
    let lettersArray;
    for (let i = 0; i < textArray.length; ++i) {
      lettersArray = textArray[i].split("");
      if (lettersArray[0]) {
        lettersArray[0] = lettersArray[0].toUpperCase();
      }

      textArray[i] = lettersArray.join("");
    }
    
    return textArray.join(" ");
  }

  isUnitedKingdom(text) {
    return ["england", "scotland", "wales"].includes(text.toLowerCase());
  }

  isUsa(text){
    return ["usa", "us", "america", "united states of america"].includes(text.toLowerCase());
  }

   search() {
    if (this.searchText === "") {
      this.setState({
        errorMsg: "Please enter a search text",
        hasError: true,
      });
      return;
    }

    if (this.isUnitedKingdom(this.searchText)){
      this.searchText = "United Kingdom";
    }

    if(this.isUsa(this.searchText)){
      this.searchText = "United States";
    }

   this.searchText = this.capitalize(this.searchText);

    let country = iso.byCountry(this.searchText);

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
        <section id="search-bar">
          <input
            type="text"
            placeholder="Enter a country"
            onChange={this.onChangeHandler}
          ></input>
          <button onClick={this.search}>
            <i class="fas fa-search"></i>
          </button>
        </section>

        {this.state.hasError && <p id="error-msg">{this.state.errorMsg}</p>}
      </section>
    );
  }
}

export default CountrySearch;
