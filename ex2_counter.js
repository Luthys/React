import React from 'react'
import ReactDOM from "react-dom"


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.start, step : props.step };
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.step(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    step() {
        this.setState(state => ({ count: state.count + state.step }));
    }

    render() {
        return (
            <div>
                <p>Counter is at: { this.state.count}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter start={8} step={4} />,
    document.getElementById('root')
);