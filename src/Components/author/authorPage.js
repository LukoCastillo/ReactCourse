"use strict";

var React = require("react");
//var AuthorApi =require("../../api/AuthorApi");
var reactClass = require("create-react-class");
var AuthorList = require("./authorList");
var Link = require('react-router-dom').Link;
var AuthorAction = require("../../actions/authorActions");
var AuthorStore = require("../../stores/authorStore");


var Authors = reactClass({
    getInitialState:function(){
        return {
            authors:AuthorStore.getAllAuthors()
        }
    },
    componentWillMount:function(){
        debugger;
        //this.setState({authors:AuthorApi.getAllAuthors()});
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount:function(){
        AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange:function(){
        debugger;
        this.setState({authors:AuthorStore.getAllAuthors()});
    },
    render:function(){
        return (
            <div>
                <h1>Authors</h1>
                <Link to="author" className="btn btn-default" >Add new Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = Authors;