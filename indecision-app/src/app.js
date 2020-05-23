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


const user = {
    name: 'Andrew',
    age: 27,
    location: 'Toronto'
}

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById("app");
ReactDOM.render(template,appRoot);