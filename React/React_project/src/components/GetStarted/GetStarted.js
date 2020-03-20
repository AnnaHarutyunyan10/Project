import React from 'react';
import Fon from '../../resources/fone.jpg';
import Buttons from '../Buttons/Buttons';
import './GetStarted.css';

const GetStarted = () => {
    return (
        <div className="my-container">
            <img src={ Fon } alt="fone image" />
            <Buttons 
                btn_position='my-btn' 
                text1='For every student,'
                text2='every classroom.'
                text3='Real result.'
                btnType="Get Started"
            />
        </div>
    );
}

export default GetStarted;