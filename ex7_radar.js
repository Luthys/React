import React from "react"
import ReactDOM from "react-dom"


class SpeedForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let body =
            <div>
                <form>
                    <span>Vitesse :</span>
                    <input value={this.props.speed} onChange={this.props.onChangeSpeed} type="number" ></input>
                    <span>Limitation : </span>
                    <input value={this.props.limitation} onChange={this.props.onChangeLimitation} type="number" ></input>
                </form>
            </div>

        return body
    }
}

class SpeedSummary extends React.Component {
    constructor(props) {
        super(props);
    }

    finalSpeed() {
        let speed = this.props.speed
        let limitation = this.props.limitation
       
        return parseInt(speed) - Math.trunc(0.08 * parseInt(limitation))
    }

    lostPoint() {
        let limit = parseInt(this.props.limitation)

        if(this.finalSpeed() >= limit)
            return Math.trunc((this.finalSpeed() - limit) / 20) + 1
        return 0
    }

    render() {
        let speed = this.props.speed
        let limitation = this.props.limitation
         

        if(speed <= limitation)
             return <h1>Tout est bon</h1>
        else {
           let body =  
                <div>
                    <p>Vous êtes en excès de vitesse.</p>
                    <p>La vitesse mesuré est de {speed}, et la vitesse retenu est {this.finalSpeed()}.</p>
                    <p>Vous allez perdre {this.lostPoint()} point(s).</p>
                </div>
            return body
        }
    }
}


class SpeedChecker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: 0,
            limitation: 50
        };
        this.handleSpeed = this.handleSpeed.bind(this)
        this.handleLimitation = this.handleLimitation.bind(this)
    }

    handleSpeed(e) {
        this.setState({ speed: e.target.value })
    }

    handleLimitation(e) {
        this.setState({ limitation: e.target.value })
    }

    render() {
        let body =  <div>

         <SpeedForm
            speed={this.state.speed}
            limitation={this.state.limitation}
            onChangeSpeed={this.handleSpeed}
            onChangeLimitation={this.handleLimitation}
        />
            <SpeedSummary 
                speed={this.state.speed}
                limitation={this.state.limitation}
            />
        </div>

        return body 
    }
}

ReactDOM.render(
    <SpeedChecker />,
    document.getElementById('root')
);

