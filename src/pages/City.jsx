import React from "react";
import Loading from "../components/Loading";

class City extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      population: "",
      cityName: this.props.match.params.city,
      notification: null,
    };

    this.navigateBack = this.navigateBack.bind(this);
  }

  navigateBack() {
    this.props.history.goBack();
  }

  formatPopulation(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.fetchPopulation();
  }

  async fetchPopulation() {
    try {
      var response = await fetch(
        `http://api.geonames.org/searchJSON?username=weknowit&orderby=population&maxRows=1&featureClass=P&name_equals=${this.state.cityName}`
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

      if (!data.geonames || data.geonames.length === 0) {
        // will show 404 page
        this.props.history.replace(`/${this.state.cityName}`);
      } else if (
        data.geonames[0].name.toLowerCase() !==
        this.state.cityName.toLowerCase()
      ) {
        // will show 404 page
        this.props.history.replace(`/${this.state.cityName}`);
      } else {
        let population = this.formatPopulation(data.geonames[0].population);

        if (population === "0") {
          population = "No data available";
        }

        this.setState({
          population: population,
          loading: false,
          cityName: data.geonames[0].name,
        });
      }
    } else {
      // will show 404 page
      this.props.history.replace(`/${this.state.cityName}`);
    }
  }

  render() {
    return (
      <section>
        {this.state.notification && (
          <p className="notification">{this.state.notification}</p>
        )}
        <button className="button-back" onClick={this.navigateBack}>
          <i className="fas fa-arrow-left"></i> Tillbaka
        </button>
        <h2>{this.state.cityName}</h2>

        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="blur-card">
            <h3>Population</h3>
            <p id="population">{this.state.population}</p>
          </div>
        )}
      </section>
    );
  }
}

export default City;
