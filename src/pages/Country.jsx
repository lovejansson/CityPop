import React from "react";
import Loading from "../components/Loading.jsx";
import iso from "country-code-lookup";

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.countryName = this.capitalize(this.props.match.params.country);
    this.state = {  cities: [], loading: false };
    this.fetchCities = this.fetchCities.bind(this);
    this.navigateToCity = this.navigateToCity.bind(this);
  }

  componentDidMount() {
    this.fetchCities();
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

  async fetchCities() {
   
    this.setState({
      loading: true,
    });

    const country = iso.byCountry(this.countryName);

    if(!country){
      this.props.history.push("/404");
    }

    try {
      var response = await fetch(
        `http://api.geonames.org/searchJSON?username=weknowit&orderby=population&maxRows=3&featureClass=P&country=${country.iso2}`
      );
    } catch (error) {
      console.log(error);
      return;
    }

    if (response.status === 200) {
      const data = await response.json();
      this.setState({
        cities: data.geonames,
        loading: false,
      });
    } else {
      this.props.history.push(`/${this.countryName}`);
    }
  }

  navigateToCity(city){
    this.props.history.push(`/cities/${city}`);
  }

  render() {
    return (
      <section>
        <h2>{this.countryName}</h2>

        {this.state.loading ? <Loading/> : <ul>
          {this.state.cities.map((city) => {
            return (
              <li class="blur-card" onClick={() => {this.navigateToCity(city.name)}}>
                {city.name}
              </li>
            );
          })}
        </ul>}
     
      </section>
    );
  }
}

export default Country;
