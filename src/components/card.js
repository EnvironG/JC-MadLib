import React, { Component } from 'react';

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
    placeOne: '',
    adjectiveOne: '',
    celebOne: '',
    bodyOne: '',
    bodyTwo: '',
    organ: '',
    adjectiveTwo: '',
    celebTwo: '',
    adjectiveThree: '',
    bodyThree: '',
    bodyFour: '',
    placeTwo: '',
    celebThree: '',
    animal: '',
    verb: '',
    number: '',
    bodyFive: '',
    adjectiveFour:'',
    adjectiveFive:'',
    pastVerb:'',
    contentVisible: false
}

class Card extends Component {

    constructor() {
        super()

        this.state = INITIAL_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    } 

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if (this.state.contentVisible) {

            this.setState(INITIAL_STATE) 
        } else {
            this.setState({ contentVisible: true})
        }
    }

    render() {

        const inputData = [
            {title: 'Place', state: this.state.placeOne, name: 'placeOne'},
            {title: 'Adjective', state: this.state.adjectiveOne, name: 'adjectiveOne'},
            {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne'},
            {title: 'Body Part', state: this.state.bodyOne, name: 'bodyOne'},

            {title: 'Body Part', state: this.state.bodyTwo, name: 'bodyTwo'},
            {title: 'Organ', state: this.state.organ, name: 'organ'},
            {title: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo'},
            {title: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo'},

            {title: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree'},
            {title: 'Body Part', state: this.state.bodyThree, name: 'bodyThree'},
            {title: 'Body Part', state: this.state.bodyFour, name: 'bodyFour'},
            {title: 'Place', state: this.state.placeTwo, name: 'placeTwo'},

            {title: 'Celebrity', state: this.state.celebThree, name: 'celebThree'},
            {title: 'Animal', state: this.state.animal, name: 'animal'},
            {title: 'Verb', state: this.state.verb, name: 'verb'},
            {title: 'Number', state: this.state.number, name: 'number'},

            {title: 'Body Part', state: this.state.bodyFive, name: 'bodyFive'},
            {title: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour'},
            {title: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive'},
            {title: 'Past Tense Verb', state: this.state.pastVerb, name: 'pastVerb'},
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                {
                    inputData.map((data, index) => {
                        return Input( (data), this.handleInputChange, index ) 
                    })
                }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Generate Mad Lib' : 'Clear Mad Lib'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;