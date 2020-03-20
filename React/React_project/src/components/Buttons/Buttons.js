import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    render () { 
        return (
            <div className={ this.props.btn_position }>
                <p>{this.props.text1}</p>
                <p>{this.props.text2}</p>
                <p>{this.props.text3}</p>
                <div className="my-heigth">
                    <a className="waves-effect waves-light btn my-space my-bg">
                        {this.props.btnType}
                    </a>
                </div>
            </div>
        );
    };
}

export default Buttons;