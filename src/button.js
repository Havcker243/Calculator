import React from 'react';
import ReactDOM from 'react-dom/client';
import './calc.css';

export const ButtonType = {
    Number: "number",
    Op: "op"
}

export class Button extends React.Component {
    onclick() {
        const {onclick, display} = this.props
        onclick(display)
    }

    render() {
        const {type, display} = this.props
        return (
            <button className={type} value={display} onClick={this.onclick.bind(this)}>{display}</button>
        )
    }
}