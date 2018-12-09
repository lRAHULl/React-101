console.log("The App is running!");

// JSX - javascript xml
var app = {
  title: "React 101",
  subTitle: "This is JSX from app.js!"
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ol>
      <li>One</li>
      <li>Two</li>
    </ol>
  </div>
);

var user = {
  name: "Rahul",
  age: 19,
  location: "Chennai"
};
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>City: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");
// var appRootTwo = document.getElementById("me");

ReactDOM.render(templateTwo, appRootTwo);
ReactDOM.render(template, appRoot);
