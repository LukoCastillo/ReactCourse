"use strict"
var React = require("react");
var reactClass = require("create-react-class");

debugger;

var About = reactClass({
    render:function(){
        return (
            <div>
                <h1>About Page</h1>
                <p>This app use the following tecnologies.</p>
                <ul>
                    <li>React</li>
                    <li>React router</li>
                    <li>Flux</li>
                    <li>Gulp</li>
                </ul>
            </div>
        )
    }
});

module.exports = About;