import React from "react"
import ReactDOM from "react-dom"

class Horloge extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.step(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    step() {
        this.setState(state => ({
            date: new Date()
        }));
    }

    render() {
        let date = this.state.date

        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        return <span>il est : {h}:{m}:{s}</span>
    }
}

ReactDOM.render(
    <Horloge/>,
    document.getElementById('root')
);