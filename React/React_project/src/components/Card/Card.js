import React, { Component } from 'react';
import Author from '../../resources/author.png';

class Cards extends Component {
    render () { 
        return ( 
            <div className="card">
                <div className="card-image">
                    <img src={ this.props.cardPhoto } alt="Cards" />
                </div>
                <div className="card-content">
                    <p className="my-header">Courses name</p>
                    <p className="my-text">
                        Lorem Ipsum is simply dummy text of the printing and industry.
                    </p>
                </div>
                <div className="padding">
                    <img  className="my-img" src={ Author } alt="Author photo" />
                    <span className="my-author">Author name</span>
                    <span className="my-price">$57</span>
                </div>
            </div>                         
        );
    };
}

export default Cards;