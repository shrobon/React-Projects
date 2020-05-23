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