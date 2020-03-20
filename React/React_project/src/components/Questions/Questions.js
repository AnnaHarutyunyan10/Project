import React, { Component } from 'react';
import SidePhoto from '../../resources/sidePhoto/side2.jpg';
import './Questions.css';

class Questions extends Component {
    render () { 
        return (
            <div className="container-left row"> 
                <h1 className="header">Asked questions</h1> 
                <div className="table-size col s12 m7 l7">
                    <table>
                        <tbody>
                            <tr>
                                <td className="text-style">Lorem Ipsum è un testo segnaposto utilizzato nel</td>
                                <td><a href="#" className="add">+</a></td>
                            </tr>
                            <tr>
                                <td className="text-style">Lorem Ipsum è un testo segnaposto utilizzato nel</td>
                                <td><a href="#" className="add">+</a></td>
                            </tr>
                            <tr>
                                <td className="text-style">Lorem Ipsum è un testo segnaposto utilizzato nel</td>
                                <td><a href="#" className="add">+</a></td>
                            </tr>
                            <tr>
                                <td className="text-style">Lorem Ipsum è un testo segnaposto utilizzato nel</td>
                                <td><a href="#" className="add">+</a></td>
                            </tr>
                            <tr>
                                <td className="text-style">Lorem Ipsum è un testo segnaposto utilizzato nel</td>
                                <td><a href="#" className="add">+</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col s12 m5 l5 img-style">
                    <img src={ SidePhoto } alt="Side photo" />
                </div>
            </div>
        );
    };
}

export default Questions;