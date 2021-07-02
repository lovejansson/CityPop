
import React from "react";
import "../styles/home.css";

import {  Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
          <p>How many people lives there?</p>

          <section id="nav-buttons">
       
          <Link to="/search-country">Search by country</Link>

          <Link to="/search-city">Search by city</Link>
          
          </section>
        
    </section>
    );
  }
}

export default HomePage;
