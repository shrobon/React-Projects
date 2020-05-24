console.log('App.js is running !! ');

const app = {
    title: "Indecision App",
    subtitle: "Put  your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reRender();
    }
    console.log('form submitted');
}

const appRoot = document.getElementById("app");
const removeAll =  () => {
    app.options.length = 0;
    reRender();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

function reRender() {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? "Here are your options": "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
               app.options.map( option => {
                return <li key={option}>{option}</li>
               })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
        );
    
        ReactDOM.render(template, appRoot);
}

reRender();