console.log('App is Starting')
user = {
    fullName: 'Rahul P',
    age: 19,
    city: 'Chennai'
}

const getFirstName = (fullName) => user.fullName.split(' ')[0]

let userInfo = (
    <h1>{getFirstName(user.fullName)}</h1>
    { user.age > 18 ? <h4>Age: {user.age} </h4> : false}
    {user.city ? <h4>City: {user.city}</h4> : false}
)

const addOne = (count) => {
    count++;
    console.log('adding One');
    clickCounterRender();
} 
const minusOne = (count) => {
    count--;
    console.log('subtracting One');
    clickCounterRender();
}
const reset = (count) => {
    count = 0;
    console.log('Reseting');
    clickCounterRender();
}

let count = 0;
const clickCounter = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
)
const appRender = document.getElementById("app");
ReactDOM.render(userInfo, appRender)

const clickCounterRender = () => {
    const clickCounter = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(clickCounter, appRender)
}


// JSX - javascript xml

var templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne} >+1</button>
    <button onClick={minusOne} >-1</button>
    <button onClick={reset} >reset</button>
  </div>
)
const appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);