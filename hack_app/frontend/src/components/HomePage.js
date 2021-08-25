import React, { Component } from 'react';
import UserPage from "./UserPage"
import WellnessPage from "./WellnessPage"
import GoalPage from "./GoalPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

  //routing system done in HomePage, to go to different pages

export default class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          
          <Router>
          <Switch>
          <Route path="/user" component={UserPage} />
            <Route path="/wellness" component={WellnessPage} />
            <Route path="/goal" component={GoalPage} />
            <Route exact path="/">
              <p>This is the home page</p>
            </Route>
          </Switch>
        </Router>
        )
        
    }
}

