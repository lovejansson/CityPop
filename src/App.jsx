import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import CountrySearch from "./pages/CountrySearch";
import CitySearch from "./pages/CitySearch";
import NotFound from "./pages/NotFound";
import City from "./pages/City";
import Country from "./pages/Country";

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>CityPop</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/cities" component={CitySearch} />

            <Route exact path="/countries" component={CountrySearch} />

            <Route exact path="/cities/:city" component={City} />

            <Route exact path="/countries/:country" component={Country} />

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
