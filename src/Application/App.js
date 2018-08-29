import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/index";
import TodoPage from "./components/TodoPage/TodoPage";
import Navigation from '../Application/components/Navigation/Navigation';
import Error from './components/Shared/Error/Error';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
            <Switch>
                <Route path="/" component={MainPage} exact/>
                <Route path="/Todo" component={TodoPage}/>
                <Route component={Error} exact/>
            </Switch>
      </Fragment>
    );
  }
}

export default App;
