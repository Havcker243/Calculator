import React from 'react';
import ReactDOM from 'react-dom/client';
import './calc.css';

export class Display extends React.Component {
    render() {
        const {display} = this.props
        return (
            <span className="display">{display}</span>
        )
    }
}