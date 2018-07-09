"use strict"

var React = require("react");
var Router= require("react-router");
var reactClass = require("create-react-class");
var AuthorForm = require("./authorForm")
//var AuthorApi = require("../../api/AuthorApi");
var toastr = require("toastr");
var AuthorAction = require("../../actions/authorActions");
var AuthorStore = require("../../stores/authorStore");


var ManageAuthorPage =  reactClass({
    getInitialState:function(){
        return {
                author:{id:"", firstName:"",lastName:""},
                errors:{}
        };
    },
    componentWillMount:function(){
        debugger;
        if(typeof this.props.location.params !== "undefined")
        {
            var authorId = this.props.location.params.id;
            debugger;
            if(authorId)
            {
                this.setState({author:AuthorStore.getAuthorById(authorId)});
            }
    }
    },
    setAuthorState:function(event){
     
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author:this.state.author});
    },
    authorIsValid :function(){
        var isValid=true;
        this.state.errors = {};

        if(this.state.author.firstName.length < 3){
            this.state.errors.firstName ="First Name must be at least 3 characters.";
            isValid=false;
        }

        if(this.state.author.lastName.length < 3){
           this.state.errors.lastName ="Last Name must be at least 3 characters.";
            isValid=false;
        }

        this.setState({errors:this.state.errors});

        return isValid;
    },
    saveAuthor:function (event) {
        event.preventDefault();
        
        if(!this.authorIsValid()){
            return;
        }
        if(this.state.author.id){
            AuthorAction.updateAuhor(this.state.author);
        }else{
            AuthorAction.createAuthor(this.state.author);
        }
        
       // AuthorApi.saveAuthor(this.state.author)
       // this.transtitionTo("authors");
       toastr.success("Author has been saved.");
       this.props.history.push('/authors')
    },
    render : function(){
        return (
            <AuthorForm
            author ={this.state.author}
            onChanged = {this.setAuthorState}
            onSave={this.saveAuthor}
            errors={this.state.errors}
            />
        );
    }
});


module.exports = ManageAuthorPage;