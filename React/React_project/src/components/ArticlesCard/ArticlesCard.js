import React, { Component } from 'react';
import './ArticlesCard.css';

class ArticlesCard extends Component {
    render () { 
        return (
            <div className="distance">  
                <div className="card">
                    <div className="card-image my-card">
                        <img src={ this.props.photo } />
                        <p className="info card-title">Read more</p>
                    </div>              
                </div>
                <span className="card-header">Lorem Ipsum è un testo segnaposto</span>
                <p>
                    Lorem Ipsum è un testo segnaposto utilizzato nel 
                    settore della tipografia e della stampa.
                </p>  
            </div>
        );
    };
}

export default ArticlesCard;