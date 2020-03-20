import React, { Component } from 'react';
import './Opinion.css';

class Opinion extends Component {
    render () { 
        return (
            <div className="card horizontal">
                <div className="card-image">
                    <img src={ this.props.photo } alt="photo" />
                </div>
                <div className="card-stacked">
                    <div className="card-content size-content">
                        <p className="name">
                            { this.props.name }
                        </p>
                        <p className="work">
                            { this.props.work }
                        </p>
                        <p className="description">
                            { this.props.description }
                        </p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Opinion;