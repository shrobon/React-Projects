### Tools
- yarn ( yarn install )
- live-server
- babel-cli
- babel-preset-react
- chrome react dev tools
- webpack


### Babel Transpiling
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch &
```

### JSX
- undefined / null and boolean are ignored by JSX

### Reading material
- DOM elements (All supported HTML attributes)
- React DOM events 
- React component lifecycle methods


### Notes 
#### React Component State 
State is an object and is made up of key-value pairs

Step 1 - Setup the default state object
Step 2 - Component is rendered with default state values
Step 3 - Change state based on an event
Step 4 - Component re-rendered using new state values
Step 5 - Start again at Step 3

Call to this.setState is asynchronous

#### Stateless Functional Components
- We cannot use state inside these 
- Props can be passed in as a parameter
- These are faster than class based components
- There is no way to use lifecycle methods for stateless components.

#### Local Storage
- Data persists across page loads 
- Only works with string data
- JSON strings can be used to store objects (JSON.stringify / JSON.parse)

#### Lifecycle Methods
- only available to class based components
- componentDidUpdate() - called either when state / props gets updated.
- https://reactjs.org/docs/state-and-lifecycle.html

#### Webpack 
- Asset Bundler
- Better use 3rd party libraries
- Better way to decompose and manage an application
- Organizes your JS. You have a single bundle.js (dep+code)
- Mention where the entrypoint is and the location of the final bundle file

#### Concepts to brush up
- let | const | var 
- this binding
- arrow functions
- webpack
- defaults exports and named exports