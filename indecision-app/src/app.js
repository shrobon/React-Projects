console.log('App.js is running !! ');

const app = {
    title: "Indecision App",
    subtitle: "Put  your life in the hands of a computer",
    options: ['One', 'Two']
}

const template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <p>{app.options.length > 10 ? "Here are your options": "No Options"}</p>
    <ol>
        <li>First Item</li>
        <li>Second Item</li>
    </ol>
</div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById("app");

// Manual Data Binding
const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={(addOne)}>addOne</button>
            <button onClick={(minusOne)}>minusOne</button>
            <button onClick={(reset)}>reset</button>

        </div>
    )

    ReactDOM.render(template2,appRoot);
}

renderCounterApp();