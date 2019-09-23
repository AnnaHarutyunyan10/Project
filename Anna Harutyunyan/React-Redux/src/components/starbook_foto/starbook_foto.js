import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import '../.././styles/starbook_foto.scss';
 
class StarbookFirstPage extends Component {
 
    render () { 
        return (
            <div className="containerImage">
                <img src={this.props.starbookFoto} className={this.props.img_stayle} />
                <div id="text" className={this.props.text_style}>
                    <h1><i>{this.props.title}</i></h1>
                    <p>{this.props.text}</p>
                    <NavLink to="/hook_form" activeClassName="selected">
                        <button className={this.props.btn_style}>{this.props.btn_text}</button>
                    </NavLink>                
                </div>
            </div>
        );
    }
}

export default StarbookFirstPage;
