import React from "react"
import ReactDOM from "react-dom"

export default class Accordion extends React.Component {
    constructor (props) {
        super(props);
        this.state = { show: false, header : props.header, content: props.content };
    }

    handleClick = () => {
        this.setState({ show: !this.state.show });
    }


    render() {
        let title = <h1 onClick={this.handleClick}>{this.state.header}</h1>
        let content = this.state.show ? <p>{this.state.content}</p> : null

        return <div>{title} {content}</div>

    }
}

ReactDOM.render(
    <Accordion header="Titre" content="Lorem ipsum" />,
    document.getElementById('root')
);
