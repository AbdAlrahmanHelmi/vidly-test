import React, { Component } from "react";
import Form from "./common/form";
import Input from "./common/input";
import LoginForm from "./loginForm";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  doSubmit = () => {
    // call server
    console.log("submited");
  };
  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
