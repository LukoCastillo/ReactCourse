"use strict"

var React = require("react");
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;
var Header = require("./Components/common/header");
var Switch = require('react-router-dom').Switch;


var routes =(
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={require("./Components/homePage")} />
          <Route path="/authors" component={require("./Components/author/authorPage")} />
          <Route path="/about" component={require("./Components/about/aboutPage")} />
          <Route path="/author" component={require("./Components/author/manageAuthorPage")} />
          <Route path="/author/:id" component={require("./Components/author/manageAuthorPage")} />
          <Route component={require("./Components/notFoundPage")}/>
        </Switch>
      </div>
    </Router>
);


module.exports= routes;