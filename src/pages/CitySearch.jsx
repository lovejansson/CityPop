import React from "react";

class CitySearch extends React.Component {

    constructor(props){
        super(props);
        console.log("constructor city search");
        this.state = { errorMsg: "", hasError: false };
        this.search = this.search.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.searchText = "";
      
    }
  search() {
    if (this.searchText === "") {
      this.setState({
        errorMsg: "Please enter a search text",
        hasError: true,
      });
      
    }else{
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
        <h2>Search by city</h2>
        <section id="search-bar">
          <input
            type="text"
            placeholder="Enter a city"
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

export default CitySearch;
