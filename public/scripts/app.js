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

// const user = {
//   name: "Rahul P",
//   age: 19,
//   location: "Chennai"
// };

// const getLocation = (location) => {
//   if (location) {
//     return <p> City: {user.location} </p>;
//   }
// };

// const getLocation = (location) => location ? <p> City : {user.location} </p> : undefined;

// const getFirstName = (fullName) => fullName.split(' ')[0]

// const templateTwo = (
//   <div>

//     <h1> {user.name ? getFirstName(user.name) : 'Anonymous'} </h1>
//     {user.age > 18 && <p>Age: {user.age}</p>}
//     <p>{getLocation(user.location)}</p>
//   </div>
// );

var count = 0;
var addOne = function addOne() {
  count++;
  console.log('addOne');
  return renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  console.log('minusOne');
  return renderCounterApp();
};
var reset = function reset() {
  count = 0;
  console.log('reset');
  return renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );
  var appRoot = document.getElementById("app");
  ReactDOM.render(templateTwo, appRoot);
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "reset"
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
