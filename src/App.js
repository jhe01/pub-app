import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/page/home/Home";
import CalendarList from "./components/page/home/CalendarList";
import Event from "./components/page/event/Event";

import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/event/:id" component={Event} />
              <Route exact path="/list" component={CalendarList} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
