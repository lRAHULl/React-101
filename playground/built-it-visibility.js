const app = {
    title: "Visibilty Toggle",
    subTitle: "You have Done a Fabulous Job."
}

let visibility = false;

const toggleVisibility = () => {
    console.log('onClick');
    visibility = !visibility;
    renderTemplate();
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{visibility ? "Hide Details" : "Show Details"}</button>
            {visibility && <p>{app.subTitle}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("app");
renderTemplate();