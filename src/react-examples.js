const user = {
  name: "Rahul P",
  age: 19,
  location: "Chennai"
};

const getLocation = (location) => {
  if (location) {
    return <p> City: {user.location} </p>;
  }
};

const getLocation = (location) => location ? <p> City : {user.location} </p> : undefined;

const getFirstName = (fullName) => fullName.split(' ')[0]

const templateTwo = (
  <div>

    <h1> {user.name ? getFirstName(user.name) : 'Anonymous'} </h1>
    {user.age > 18 && <p>Age: {user.age}</p>}
    <p>{getLocation(user.location)}</p>
  </div>
);

let count = 0;
let addOne = () => {
  count++;
  console.log("addOne");
  return renderCounterApp();
};
let minusOne = () => {
  count--;
  console.log("minusOne");
  return renderCounterApp();
};
let reset = () => {
  count = 0;
  console.log("reset");
  return renderCounterApp();
};


const renderCounterApp = () => {
  var templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();