"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var AuthorApi = require("../api/AuthorApi");
var ActionTypes = require("../constants/actionTypes");

var AuthorAction = {
    createAuthor:function(author){
        var newAuthor = AuthorApi.saveAuthor(author);

        
        Dispatcher.dispatch({
            actionType:ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },
    updateAuhor:function(author){
        var updateAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType:ActionTypes.UPDATE_AUTHOR,
            author:updateAuthor
        });
    },
    deleteAuthor:function(id){
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType:ActionTypes.DELETE_AUTHOR,
            id:id
        });
    }
};

module.exports= AuthorAction;