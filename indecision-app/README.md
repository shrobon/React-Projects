### Tools
- yarn ( yarn install )
- live-server
- babel-cli
- babel-preset-react


### Babel Transpiling
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch &
```

### JSX
- undefined / null and boolean are ignored by JSX

### Reading material
- DOM elements (All supported HTML attributes)
- React DOM events 


### Notes 
#### React Component State 
State is an object and is made up of key-value pairs

Step 1 - Setup the default state object
Step 2 - Component is rendered with default state values
Step 3 - Change state based on an event
Step 4 - Component re-rendered using new state values
Step 5 - Start again at Step 3

Call to this.setState is asynchronous