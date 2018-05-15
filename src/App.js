import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Error404 from "./Error";
import BeatBox from "./BeatBox";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">Home</Link>
            <Link to="/details">Details</Link>
            <Link to={`/${Math.random()}`}>Random</Link>
            <Link to="/users:id">Users</Link>\
            <Link to="/BeatBox">BeatBox</Link>
          </header>
          <Switch>
            <Route path="/" Component={Home} />
            <Route path="/details" Component={Details} />
            <Route path="/users/:lng/:lat" component={Details} />
            <Route path="/BeatBox" component={BeatBox} />
            <Route path="/*" Component={Error404} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
