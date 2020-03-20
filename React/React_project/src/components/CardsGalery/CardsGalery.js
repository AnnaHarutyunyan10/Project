import React, { Component } from 'react';
import Card from '../Card/Card';
import Cards1 from '../../resources/cards/card1.png';
import Cards2 from '../../resources/cards/card2.png';
import Cards3 from '../../resources/cards/card3.png';
import './CardsGalery.css';
import '../Cards/Cards.css';

class CardsGalery extends Component {
    render () { 
        const cards = [Cards1, Cards2, Cards3, Cards2];
        return (
            <>
                <p className="count">1400 courses</p>
                <div className="row galery-padding"> 
                    { cards.map((card, index) => {
                        return (
                            <div className="col s12 m3 l3 offset-m2">
                                <Card cardPhoto={ card } key={ index } />
                            </div>
                        )
                    })}                    
                </div>
                <div className="row galery-padding"> 
                    { cards.map((card, index) => {
                        return (
                            <div className="col s12 m3 l3 offset-m2">
                                <Card cardPhoto={ card } key={ index } />
                            </div>
                        )
                    })}                    
                </div>
                <div className="row galery-padding"> 
                    { cards.map((card, index) => {
                        return (
                            <div className="col s12 m3 l3 offset-m2">
                                <Card cardPhoto={ card } key={ index } />
                            </div>
                        )
                    })}                    
                </div>
                <div className="row galery-padding"> 
                    { cards.map((card, index) => {
                        return (
                            <div className="col s12 m3 l3 offset-m2">
                                <Card cardPhoto={ card } key={ index } />
                            </div>
                        )
                    })}                    
                </div>
            </>
        );
    };
}

export default CardsGalery;