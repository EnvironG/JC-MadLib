import React, { Component } from 'react';

class Content extends Component {

    constructor() {
        super()
        this.count = 1;
    }
    
    componentWillReceiveProps () {
        this.count = 1;
    }

    renderLabel(data) {
        return [
            <div className="card__content__label">{this.count++}</div>,
            <b>{data}</b>
        ]
    }

    render() {
        const data = this.props.data;
        return (
            <div className="card__content">
            <p>
            Once upon a time, in a place called {this.renderLabel(data.placeOne)} , there was a {this.renderLabel(data.adjectiveOne)}  princess named {this.renderLabel(data.celebOne)} . Her kingdom was huge, but her {this.renderLabel(data.bodyOne)} was bigger. She was beautiful from her {this.renderLabel(data.bodyTwo)} to her {this.renderLabel(data.organ)}. One day she saw a/an {this.renderLabel(data.adjectiveTwo)} prince named {this.renderLabel(data.celebTwo)}. He had a/an {this.renderLabel(data.adjectiveThree)} face. As soon as his {this.renderLabel(data.bodyThree)} touched her {this.renderLabel(data.bodyFour)} they fell in love. They got married at {this.renderLabel(data.placeTwo)} the following day. Not long after, they had a baby. They decided to call it {this.renderLabel(data.celebThree)}. He/She looked like a/an {this.renderLabel(data.animal)}. He/She used to {this.renderLabel(data.verb)} {this.renderLabel(data.number)} times a day so that his/her {this.renderLabel(data.bodyFive)} would be {this.renderLabel(data.adjectiveFour)} and {this.renderLabel(data.adjectiveFive)}. And they {this.renderLabel(data.pastVerb)} happily ever after!
            </p>
            </div>
        )
    }
}

export default Content;