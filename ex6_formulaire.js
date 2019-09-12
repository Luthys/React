import React from "react"
import ReactDOM from "react-dom"


class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["---"],
            changedValue: '',
            selected: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    handleChange(event) {
        this.setState({ changedValue: event.target.value });
    }

    handleChangeSelect(event) {
        this.setState({ selected: event.target.value });
    }

    handleSubmit(event) {
        this.state.list.splice(this.state.selected, 0, this.state.changedValue)
        this.setState(state => ({ list: state.list, changedValue: "", selected: state.list.length - 1 }))

        event.preventDefault();
    }

    render() {
        let body =
            <div>
                <form>
                    <span>
                        Insérer le nouvel élément :
                            </span>
                    <input value={this.state.changedValue} onChange={this.handleChange} type="text" ></input>
                    <span> avant l'élément</span>
                    <select value={this.state.selected} onChange={this.handleChangeSelect}>
                        {this.state.list.map((item, index) =>
                            <option key={index} value={index} >{item}</option>
                        )}
                    </select>
                    <input value="Ajouter" type="button" onClick={this.handleSubmit} />
                </form>
                <ul>
                    {this.state.list.map(function (item, index, list) {
                        return index < list.length - 1 ? <li key={index}>{item}</li> : null
                    }
                    )}
                </ul>
            </div>

        return body
    }
}

ReactDOM.render(
    <Formulaire />,
    document.getElementById('root')
);