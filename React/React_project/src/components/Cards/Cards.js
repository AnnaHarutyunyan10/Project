import React, { Component } from 'react';
import Card from '../Card/Card';
import Cards1 from '../../resources/cards/card1.png';
import Cards2 from '../../resources/cards/card2.png';
import Cards3 from '../../resources/cards/card3.png';
import './Cards.css';

class Cards extends Component {
    render () { 
        const cards = [Cards1, Cards2, Cards3];
        return (
            <div className="row"> 
                { cards.map((card, index) => {
                    return (
                        <div className="col s12 m4 l4">
                            <Card cardPhoto={ card } key={ index } />
                        </div>
                    )
                })}                    
            </div>
        );
    };
}

export default Cards;