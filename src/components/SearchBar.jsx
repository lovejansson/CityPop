import React from "react";
import "../styles/search-bar.css";

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.searchText = "";
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onChangeHandler(event){
    
        this.searchText = event.target.value;

    }

    onClickHandler(event){

        console.log("hj")
        this.props.onSearch(this.searchText);


    }


    render() {
        return (<section id="search-bar">
            <input type="text" placeholder={this.props.placeholder} onChange={this.onChangeHandler}></input>
            <button onClick={this.onClickHandler}><i class="fas fa-search"></i></button>
        </section>) ;
    }
}

export default SearchBar;