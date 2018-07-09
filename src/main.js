//"use strict";

$ = JQuery = require("jquery");
var React = require("react");
var routes = require("./routes");
var ReactDOM = require("react-dom");
var InitializeAction = require("./actions/initializeActions");

InitializeAction.initApp();

ReactDOM.render(routes,document.getElementById("app"));





