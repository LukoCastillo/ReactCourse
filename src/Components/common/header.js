"use strict"
var React = require("react");
var reactClass = require("create-react-class");
var Link = require('react-router-dom').Link;

var Header = reactClass({
    render:function(){
        return (
           <nav className="navbar  navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                    </a>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/authors">authors</Link>
                        </li>
                    </ul>
                </div>
           </nav>
        )
    }
});

module.exports = Header;