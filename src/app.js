// JSX - javascript xml
console.log("The App is running!");

// if - statements
// ternary operators
// logical and operators

const app = {
  title: "React 101",
  subTitle: "This is JSX from app.js!",
  options: ['One','Two']
};
const template = (
  <div>
    <h1> {app.title} </h1>
    {app.subTitle ? <p> {app.subTitle} </p> : false}
    {app.options.length ? <p>Here are your options</p> : <p>No Options</p>}
    {
      app.options.length  ? < ol >
      <li> {app.options[0]} </li>
      <li> {app.options[1]} </li>
    </ol> : false}
  </div>
);

const user = {
  name: "Rahul",
  age: 19,
  location: "Chennai"
};

function getLocation(location) {
  if (location) {
    return <p> City: {user.location} </p>;
  }
};
const templateTwo = (
  <div>
    <h1> {user.name ? user.name : 'Anonymous'} </h1>
    {user.age > 18 && <p>Age: {user.age}</p>}
    <p>{getLocation(user.location)}</p>
  </div>
);

const appRoot = document.getElementById("app");
const appRootTwo = document.getElementById("me");

ReactDOM.render(templateTwo, appRootTwo);
ReactDOM.render(template, appRoot);