import React from "react";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.navigateBack = this.navigateBack.bind(this);
  }

  navigateBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <section>
        <button className="button-back" onClick={this.navigateBack}>
          <i className="fas fa-arrow-left"></i> Tillbaka
        </button>
        <p>Page not found ¯\_(ツ)_/¯</p>
      </section>
    );
  }
}

export default NotFound;
