"use strict";

// JSX - javascript xml
console.log("The App is running!");

// if - statements
// ternary operators
// logical and operators

var app = {
  title: "React 101",
  subTitle: "This is JSX from app.js!",
  options: ['One', 'Two']
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " ",
    app.title,
    " "
  ),
  app.subTitle ? React.createElement(
    "p",
    null,
    " ",
    app.subTitle,
    " "
  ) : false,
  app.options.length ? React.createElement(
    "p",
    null,
    "Here are your options"
  ) : React.createElement(
    "p",
    null,
    "No Options"
  ),
  app.options.length ? React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      " ",
      app.options[0],
      " "
    ),
    React.createElement(
      "li",
      null,
      " ",
      app.options[1],
      " "
    )
  ) : false
);

var user = {
  name: "Rahul P",
  age: 19,
  location: "Chennai"
};

// const getLocation = (location) => {
//   if (location) {
//     return <p> City: {user.location} </p>;
//   }
// };

var getLocation = function getLocation(location) {
  return location ? React.createElement(
    "p",
    null,
    " City : ",
    user.location,
    " "
  ) : undefined;
};

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " ",
    user.name ? getFirstName(user.name) : 'Anonymous',
    " "
  ),
  user.age > 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    getLocation(user.location)
  )
);

var appRoot = document.getElementById("app");
var appRootTwo = document.getElementById("me");

ReactDOM.render(templateTwo, appRootTwo);
ReactDOM.render(template, appRoot);
