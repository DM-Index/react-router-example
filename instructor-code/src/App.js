import React, { Component } from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Error404 from "./Error";
import BeatBox from "./BeatBox";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">Home</Link>
            <Link to="/details">Details</Link>
            <Link to={`/${Math.random()}`}>404</Link>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details" component={Details} />
            <Route path="/users/:lng/:lat" component={Details} />
            <Route path="/beatbox" component={BeatBox} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
