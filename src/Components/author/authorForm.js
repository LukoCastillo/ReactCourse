"use strict"

var React = require("react");
var reactClass = require("create-react-class");
var TextInput = require("../common/textInput");




var AuthorForm = reactClass({
    render:function(){
        return (
            <form>
                <h1>Manage Author</h1>
                <TextInput
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChanged}
                    error={this.props.errors.firstName}
                />

                <TextInput
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChanged}
                    error={this.props.errors.lastName}
                />

                <input type="submit" value="Save" className="btn btn-primary" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports= AuthorForm;