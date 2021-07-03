import React from "react";

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
