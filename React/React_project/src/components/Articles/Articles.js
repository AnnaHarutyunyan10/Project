import React, { Component } from 'react';
import ArticlesCard from '../ArticlesCard/ArticlesCard';
import Buttons from '../Buttons/Buttons';
import ArticlesPhoto1 from '../../resources/articlesCard/photo1.png';
import ArticlesPhoto2 from '../../resources/articlesCard/photo2.png';
import ArticlesPhoto3 from '../../resources/articlesCard/photo3.png';
import ArticlesPhoto4 from '../../resources/articlesCard/photo4.png';
import './Articles.css';

class Articles extends Component {
    render () { 
        const photoFirstRow = [
            ArticlesPhoto1, 
            ArticlesPhoto2, 
        ];
        const photoSecondRow = [
            ArticlesPhoto3, 
            ArticlesPhoto4
        ];
        return (
            <div className="row articles-padding">
                <div className="col s12 m6 l6">
                    <div className="row">
                        { photoFirstRow.map((photo, index) => {
                            return (
                                <div className="col s12 m6 l6">
                                    <ArticlesCard photo={ photo } key={ index } />               
                                </div> 
                            ); 
                        }) }
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <div className="text-distance">
                        <h1>Articles</h1>
                        <p>
                            Lorem Ipsum è un testo segnaposto utilizzato nel 
                            settore della tipografia e della stampa. Lorem Ipsum è 
                            considerato il testo segnaposto standard sin dal 
                            sedicesimo secolo.
                        </p>
                        <div className="btn-distance">
                        <Buttons 
                            btn_position='my-btn' 
                            btnType="Read more"
                        />
                        </div>
                    </div>
                    { photoSecondRow.map((photo, index) => {
                        return (
                            <div className="col s12 m6 l6">
                                <ArticlesCard photo={ photo } key={ index } />               
                            </div> 
                        ); 
                    }) }
                </div>
            </div>
        );
    };
}

export default Articles;