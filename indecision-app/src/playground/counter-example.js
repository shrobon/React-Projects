// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }


// // Manual Data Binding
// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={(addOne)}>addOne</button>
//             <button onClick={(minusOne)}>minusOne</button>
//             <button onClick={(reset)}>reset</button>

//         </div>
//     )

//     ReactDOM.render(template2,appRoot);
// }

// renderCounterApp();

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    handleAddOne() {
        this.setState((prevState)=> {
            // Only provide the values of the state that you want to update
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));