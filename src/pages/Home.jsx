import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <section>
        <p>How many people lives there?</p>
        <section id="nav-links">
          <Link to="/countries">Search by country</Link>
          <Link to="/cities">Search by city</Link>
        </section>
      </section>
    );
  }
}

export default Home;
