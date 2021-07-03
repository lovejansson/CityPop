import React from "react";
import "../styles/loading-animation.css";

class Loading extends React.Component {
  render() {
    return (
       <div>{this.props.loading && <div class="loader"></div>}</div>
     
    );
  }
}

export default Loading;
