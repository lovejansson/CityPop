import React from "react";
import Loading from "../components/Loading";


class City extends React.Component {
  constructor(props) {
    super(props);

    this.state = {loading: false, population: "", cityName: this.props.match.params.city};
  }

  componentDidMount() {
  
    this.fetchPopulation();
  }

  async fetchPopulation() {
    this.setState({
      loading: true,
    });

    try {
      var response = await fetch(
        `http://api.geonames.org/searchJSON?username=weknowit&orderby=population&maxRows=1&featureClass=P&name_equals=${this.state.cityName}`
      );
    } catch (error) {
      console.log(error);
      return;
    }

    if (response.status === 200) {
      const data = await response.json();

      if(data.geonames.length === 0){
        this.props.history.push(`/${this.state.cityName}`);
      }else{
        this.setState({
          population: data.geonames[0].population,
          loading: false,
          cityName: data.geonames[0].name,
        });
      }

    } else {
      this.props.history.push(`/${this.state.cityName}`);
    }

  }


  render() {
    return (
      <section>
        <h2>{this.state.cityName}</h2>

        {this.state.loading ? (
          <Loading />
        ) : (
          <div class="blur-card">
            <h3>Population</h3>
            <p>{this.state.population}</p>
          </div>
        )}
      </section>
    );
  }
}

export default City;
