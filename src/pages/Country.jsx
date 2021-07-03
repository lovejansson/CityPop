import React from "react";
import Loading from "../components/Loading.jsx";
import iso from "country-code-lookup";
import { capitalize } from "../utils/helperMethods";

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.countryName = capitalize(this.props.match.params.country);
    this.state = { cities: [], loading: false, notification: null };
    this.fetchCities = this.fetchCities.bind(this);
    this.navigateToCity = this.navigateToCity.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.fetchCities();
  }

  async fetchCities() {
    const country = iso.byCountry(this.countryName);

    if (!country) {
      // will show 404 page
      this.props.history.replace(`/${this.countryName}`);
    }

    try {
      var response = await fetch(
        `http://api.geonames.org/searchJSON?username=weknowit&orderby=population&maxRows=3&featureClass=P&country=${country.iso2}`
      );
    } catch (error) {
      this.setState({
        notification:
          "Unknown error occured, please check your internet connection.",
        loading: false,
      });
      setTimeout(() => {
        this.setState({ notification: null });
      }, 5000);
      return;
    }

    if (response.status === 200) {
      const data = await response.json();

      this.setState({
        cities: data.geonames,
        loading: false,
      });
    } else {
      // will show 404 page
      this.props.history.replace(`/${this.countryName}`);
    }
  }

  navigateToCity(city) {
    this.props.history.push(`/cities/${city}`);
  }

  render() {
    return (
      <section>
        {this.state.notification && (
          <p class="notification">{this.state.notification}</p>
        )}
        <h2>{this.countryName}</h2>
        {this.state.loading ? (
          <Loading />
        ) : (
          <ul>
            {this.state.cities.map((city) => {
              return (
                <li>
                  <button
                    class="blur-card"
                    onClick={() => {
                      this.navigateToCity(city.name);
                    }}
                  >
                    {city.name}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    );
  }
}

export default Country;
