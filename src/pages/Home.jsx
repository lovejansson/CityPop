import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <section>
        <p id="tagline">
          Find out the number of inhabitants in the cities of the world!
        </p>
        <section id="nav-links">
          <Link to="/cities">Search by city</Link>
          <Link to="/countries">Search by country</Link>
        </section>
      </section>
    );
  }
}

export default Home;
