import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import SidePhoto from '../../resources/sidePhoto/side1.png';
import Buttons from '../Buttons/Buttons';
import './CardsRow.css';

class CardsRow extends Component {
    render () { 
        return (
            <div className="my-left">
                <div className="row">
                    <div className="col s12 m9 l9">
                        <p className="courses-header">Feautured Courses</p>
                        <p className="courses-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla at posuere lectus, semper porta magna. Ut ultrices 
                            justo id nibh commodo, nec sodales nulla viverra.
                        </p>
                        <Cards />
                        <div className="arrow-margin">
                            <a href="#" className="arrow">→</a>
                            <a href="#" className="arrow">←</a>
                        </div>
                        <div className="btn-margin">
                            <Buttons 
                                btn_position='my-btn' 
                                btnType="View all courses"
                            />
                        </div>
                    </div>
                    <div className="col s12 m3 l3">
                        <img src={ SidePhoto } alt="Side photo" className="side-image" />
                    </div>
                </div>
            </div>
        );
    };
}

export default CardsRow;