"use strict";
var React = require("react");
var reactClass = require("create-react-class");
var Link = require('react-router-dom').Link;
var AuthorActions = require("../../actions/authorActions");
var toastr = require("toastr");

var AuthorList = reactClass({
    deleteAuthor:function(e,id){
        e.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success("Author Deleted");
    }
    ,render:function(){
        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td>
                        <Link to={{pathname: '/author/'+author.id,
                                params: {id:author.id}}}>{author.id}</Link>
                    </td>
                    <td>{author.firstName} {author.lastName}</td>
                    <td><a href="#" onClick={(e)=>{this.deleteAuthor(e,author.id)}}>Delete</a></td>
                </tr>
            );
        };
        return (
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow,this)}
                    </tbody>
                </table>
        );
    }
});

module.exports = AuthorList;