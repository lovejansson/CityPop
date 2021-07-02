import React from "react";
import "../styles/search-bar.css";
import { Link, useParams } from "react-router-dom";

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {searchText: ""};
    
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event){
        this.setState({ searchText: event.target.value });
    }

    render() {
        return (<section id="search-bar">
            <input type="text" placeholder={this.props.placeholder} onChange={this.onChangeHandler}></input>
            <Link to={`/city/${this.state.searchText}`}><i class="fas fa-search"></i></Link>
        </section>) ;
    }
}

export default SearchBar;