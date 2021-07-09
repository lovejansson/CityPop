import React from "react";

class CitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMsg: "", hasError: false };
    this.search = this.search.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.searchText = "";
    this.navigateBack = this.navigateBack.bind(this);
  }

  navigateBack() {
    this.props.history.goBack();
  }

  search() {
    if (this.searchText === "") {
      this.setState({
        errorMsg: "Please enter a search text",
        hasError: true,
      });
    } else {
      this.props.history.push(`/cities/${this.searchText}`);
    }
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
        <button className="button-back" onClick={this.navigateBack}>
          <i className="fas fa-arrow-left"></i> Tillbaka
        </button>
        <h2>Search by city</h2>
        <section className="search-bar">
          <input
            type="text"
            placeholder="Enter a city"
            onChange={this.onChangeHandler}
          ></input>
          <button className="search-button" onClick={this.search}>
            <i className="fas fa-search"></i>
          </button>
        </section>

        {this.state.hasError && (
          <p className="error-msg">{this.state.errorMsg}</p>
        )}
      </section>
    );
  }
}

export default CitySearch;
