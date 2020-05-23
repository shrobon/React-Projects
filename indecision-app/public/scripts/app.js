"use strict";

console.log('App.js is running !! ');

var app = {
    title: "Indecision App",
    subtitle: "Put  your life in the hands of a computer",
    options: ['One', 'Two']
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
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 10 ? "Here are your options" : "No Options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "First Item"
        ),
        React.createElement(
            "li",
            null,
            "Second Item"
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById("app");

// Manual Data Binding
var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
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
            "addOne"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "minusOne"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );

    ReactDOM.render(template2, appRoot);
};

renderCounterApp();
