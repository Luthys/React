import React from "react"
import ReactDOM from "react-dom"

import Accordeon from "./ex4_accordeon"

class AccordionList extends React.Component {
    constructor (props) {
        super(props);
        this.state = { items : props.items };
    }

    render() {
        return (
            <div>
                {this.props.items.map((item, index) =>
                    <Accordeon key={index} header={item.header} content={item.content}/>
                )}
            </div>
        );

    }
}

const accordions = [
    { header: 'Titre 1', content: 'Contenu 1' },
    { header: 'Titre 2', content: 'Contenu 2' },
    { header: 'Titre 3', content: 'Contenu 3' },
];

ReactDOM.render(
    <AccordionList items={accordions} />,
    document.getElementById('root')
);