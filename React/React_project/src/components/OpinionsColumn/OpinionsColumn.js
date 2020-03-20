import React, { Component } from 'react';
import Opinion from '../Opinion/Opinion';
import Photo1 from '../../resources/peoplePhoto/people1.png';
import Photo2 from '../../resources/peoplePhoto/people2.png';
import Photo3 from '../../resources/peoplePhoto/people3.png';
import Photo4 from '../../resources/peoplePhoto/people4.png';
import './OpinionsColumn.css';

class OpinionsColumn extends Component {
    render () { 
        const photoFirstCol = [Photo1, Photo2];
        const photoSecondCol = [Photo3, Photo4];

        return (
            <div className="row x-container">
                <h2 className="headers">{this.props.header}</h2>
                <div className="col s12 m6 l6">
                    <div className="row">
                        { photoFirstCol.map((photo, index) => {
                            return (
                                <div className="col s12 m12 l12 cards-distance">
                                    <Opinion 
                                        photo={ photo }
                                        name="Temmy Corsu"
                                        work="Photograph"
                                        description="Lorem Ipsum es un texto de marcador de posición
                                                    comúnmente las industrias gráficas,
                                                    gráficas y editoriales."
                                    />
                                </div>
                            );
                        }) }
                    </div>
                </div>
                <div className="col s12 m6 l6 left-border">
                    <div className="row second-col">
                        { photoSecondCol.map((photo, index) => {
                            return (
                                <div className="col s12 m12 l12 cards-distance">
                                    <Opinion 
                                        photo={ photo }
                                        name="Temmy Corsu"
                                        work="Photograph"
                                        description="Lorem Ipsum es un texto de marcador de posición
                                                    comúnmente las industrias gráficas,
                                                    gráficas y editoriales."
                                    />
                                </div>
                            );
                        }) }
                    </div>
                </div>
            </div>
        );
    };
}

export default OpinionsColumn;