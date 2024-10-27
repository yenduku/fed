import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementHandler = () => {
        if (this.state.count < 20) {
            this.setState({ count: this.state.count + 1 });
        }
    };

    decrementHandler = () => {
        if (this.state.count > 1) {  // Changed the limit to 0
            this.setState({ count: this.state.count - 1 });
        }
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.incrementHandler}>Increment</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrementHandler}>Decrement</button>
            </div>
        );
    }
}

export default Counter;
