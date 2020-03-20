import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons';
import Card from '../../resources/cards/card1.png';
import './HorizontalCard.css';

class HoriontalCard extends Component {
    render () { 
        return ( 
            <div class="row card shadow galery-padding">
                <p className="header-text">Recomended courses</p>
                <div className="col s12 m5 l5 card-image">
                    <img src={ Card } alt="Card" />
                </div>
                <div className="col s12 m7 l7">
                    <h3 className="course-header">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua.
                    </h3>
                    <p className="time">2 hours 70 lecture all levels</p>
                    <p className="information">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat.
                    </p>
                    <div className="row">
                        <div className="col s12 m6 l6 new-btn">
                            <Buttons 
                                btn_position='my-btn' 
                                btnType="See courses"
                            />
                        </div>
                        <div className="col s12 m6 l6">
                            <span className="new-price">50$</span>
                        </div>
                    </div>
                </div>
            </div>                         
        );
    };
}

export default HoriontalCard;