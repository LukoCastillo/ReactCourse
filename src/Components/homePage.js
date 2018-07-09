"use strict"
var React = require("react");
var reactClass = require("create-react-class");
var Link = require('react-router-dom').Link;

var Home = reactClass({
    render:function(){
        return (
            <div className="jumbotron">
                <h1>React Administration</h1>
                <p>React react router bssslah blah blah</p>
                <Link to="/about" className="btn btn-primary btn-lg">Read More..</Link>
            </div>
        )
    }
});

module.exports = Home;