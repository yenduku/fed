import React, { Component } from 'react';

class TextColorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'Magenta'
        };
    }

    setRed = () => {
        this.setState({ color: '#FF0000' });
    };

    setBlue = () => {
        this.setState({ color: '#0000FF' });
    };

    setGreen = () => {
        this.setState({ color: '#00FF00' });
    };

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>
                    Welcome to CSE Department of VVIT
                </h1>
                <button onClick={this.setRed}>Red</button>&nbsp;&nbsp;
                <button onClick={this.setGreen}>Green</button>&nbsp;&nbsp;
                <button onClick={this.setBlue}>Blue</button>
            </div>
        );
    }
}

export default TextColorComponent;
