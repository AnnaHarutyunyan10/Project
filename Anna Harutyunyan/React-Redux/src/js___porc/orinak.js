import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class P extends Component {
    constructor() {
        super();

        this.state = {
            updating: false
        };

        console.log('1 -- constructor');
    }

    any() {
        this.setState({
            updating: true
        })
    }

    componentWillMount() {
        console.log('2 -- componentWillMount');
    }

    componentDidMount() {
        console.log('3 -- componentDidMount');
    }

    componentWillUnmount() {
        console.log('4 -- componentWillUnmount');
    }

    componentWillUpdate() {
        console.log('5 -- componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('6 -- componentDidUpdate');
    }

    shouldComponentUpdate() {
        console.log('7 -- shouldComponentUpdate');
        return true;
    }

    componentWillReceiveProps() {
        console.log('8 -- componentWillReceiveProps');
    }

    static getDerivedStateFromProps() {
        console.log('10 -- getDerivedStateFromProps');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('11 -- getSnapshotBeforeUpdate');
        return true;
    }
    render () {
        console.log('9 -- render');        
        return (
            <div className="bg-light">
                <h1 >Here will be color {this.props.color} :)</h1>
                <button onClick={this.any.bind(this)}>on</button>
                {
                    (this.state.updating) ?  <button onClick={this.any.bind(this)}>off</button> : null
                }
                {
                    ReactDOM.createPortal(
                    <h1>PORTAL</h1>,
                    document.getElementById('portal')
                )}
            </div>
        );
    } 
}

export default P;