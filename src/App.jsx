// import "./reset.css";
// import "./global.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import CountrySearch from "./pages/CountrySearch";
import CitySearch from "./pages/CitySearch";
import NotFound from "./pages/NotFound";
import City from "./pages/City";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <main>
        <h1>CityPop</h1>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search-city">
              <CitySearch />
            </Route>
            <Route path="/search-country">
              <CountrySearch />
            </Route>
            <Route path="/city/:name" component={City}/>
            
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
