import React from "react";
import { } from "react-router-dom";


class City extends React.Component {
    constructor(props){

        super(props);
        console.dir(this.props)

        if(this.props.location.state.population){
            this.state = {population: this.props.location.state.population, loading: false};
        }else{
            this.state = {population: null, loading: true}
        }

     

    }
  search() {
    console.log("searching...");
  }

  componentDidMount(){
     console.dir(this)
      console.log("city mounting");


  }

  render() {
    return (
      <section>
        <h2>{this.props.match.params.name}</h2>
        <div class="blur-card">
        <h3>Population</h3>
        <p>{this.state.population}</p>
        </div>
      </section>
    );
  }
}

export default City;
