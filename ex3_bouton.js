import React from "react"
import ReactDOM from "react-dom"

class ButtonCycle extends React.Component {
    constructor (props) {
        super(props);
        this.state = { items: props.items, current: 0 };

        // Bind manuel
        this.handleClick = this.handleClick.bind(this);
    }

    // Bind automatique (syntaxe expérimentale)
    handleClick = () => {
        this.setState(state => ({current : state.current < state.items.length - 1 ? state.current + 1 : 0}))
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.items[this.state.current]}
            </button>
        );
    }
}

ReactDOM.render(
    <ButtonCycle items={['one', 'two', 'three']} />,
    document.getElementById('root')
);