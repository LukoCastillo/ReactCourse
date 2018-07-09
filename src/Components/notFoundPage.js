"use strict";

var React = require("react");
var reactClass = require("create-react-class");
var Link = require('react-router-dom').Link;

var NotFoundPage = reactClass({
    render:function(){
        return (
            <div>
                <h1>Page Not Found!</h1>
                <p>Whoops! Sorry There is nothing here</p>
                <p><Link to="/">Back to Home</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;
