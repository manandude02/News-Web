//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
          <Route exact path="/"><News apiKey={this.apiKey} key="general" country="in" category="general"/></Route>
          <Route exact path="/business"><News apiKey={this.apiKey} key="business" country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News apiKey={this.apiKey} key="entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News apiKey={this.apiKey} key="general" country="in" category="general"/></Route>
          <Route exact path="/health"><News apiKey={this.apiKey} key="health" country="in" category="health"/></Route>
          <Route exact path="/sports"><News apiKey={this.apiKey} key="sports" country="in" category="sports"/></Route>
          <Route exact path="/science"><News apiKey={this.apiKey} key="science" country="in" category="science"/></Route>
          <Route exact path="/technology"><News apiKey={this.apiKey} key="technology" country="in" category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

