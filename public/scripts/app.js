"use strict";

console.log("The App is running!");

// JSX - javascript xml
var app = {
  title: "React 101",
  subTitle: "This is JSX from app.js!"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subTitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "One"
    ),
    React.createElement(
      "li",
      null,
      "Two"
    )
  )
);

var user = {
  name: "Rahul",
  age: 19,
  location: "Chennai"
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "City: ",
    user.location
  )
);

var appRoot = document.getElementById("app");
// var appRootTwo = document.getElementById("me");

ReactDOM.render(templateTwo, appRootTwo);
ReactDOM.render(template, appRoot);
