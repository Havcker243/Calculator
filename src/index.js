import React from 'react';
import ReactDOM from 'react-dom/client';
import './calc.css';
// Main calculator component
class Main extends React.Component {
    constructor() {
        super();
        this.state = { display: '0' };

        // Binding all methods to the class instance
        this.numberClick = this.numberClick.bind(this);
        this.operatorClick = this.operatorClick.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.calculate = this.calculate.bind(this);
        this.trigonometryClick = this.trigonometryClick.bind(this);
    }

    // Handles clicks on number buttons    
    numberClick(event) {
        const { display } = this.state;
        const val = event.target.value;
        const newDisplay = display === "0" ? val : display + val;
        this.setState({ display: newDisplay });
    }
    // Handles clicks on operator buttons (+, -, *, /, %)
    operatorClick(event) {
        const { display } = this.state;
        const val = event.target.value;
        this.setState({ display: display + val });
    }

    // Clears the display when CE button is clicked
    clearDisplay() {
        this.setState({ display: '0' });
    }

    // Calculates the result when '=' button is clicked
    calculate() {
        try {
            const result = eval(this.state.display);
            this.setState({ display: String(result) });
        } catch (e) {
            this.setState({ display: 'Error' });
        }
    }

    // Handles trigonometric function buttons (sin, cos, tan)
    trigonometryClick(event) {
        const operation = event.target.value;
        const inputValue = parseFloat(this.state.display);
        let result;

        switch (operation) {
            case 'sin':
                result = Math.sin(inputValue);
                break;
            case 'cos':
                result = Math.cos(inputValue);
                break;
            case 'tan':
                result = Math.tan(inputValue);
                break;
            default:
                return;
        }

        this.setState({ display: String(result) });
    }

    // Renders the calculator UI
    render() {
        const { display } = this.state;
        return (
            <div className='main'>
                <img className='logo' src= ""alt=""/>
                <h1 style={{textAlign: "center"}}> Calculator</h1>
                <table className='calc'>
                    <tbody>
                        <tr className='calc'>
                            <td colSpan="5"><span className="display" id="display">{display}</span></td>
                        </tr>
                        <tr>
                            <td><button className="number" onClick={this.numberClick} value='7'>7</button></td>
                            <td><button className="number" onClick={this.numberClick} value='8'>8</button></td>
                            <td><button className="number" onClick={this.numberClick} value='9'>9</button></td>
                            <td><button className="op" onClick={this.operatorClick} value='/'>/</button></td>
                            <td><button className="op" onClick={this.clearDisplay}>CE</button></td>
                        </tr>
                        <tr>
                            <td><button className="number" onClick={this.numberClick} value='4'>4</button></td>
                            <td><button className="number" onClick={this.numberClick} value='5'>5</button></td>
                            <td><button className="number" onClick={this.numberClick} value='6'>6</button></td>
                            <td><button className="op" onClick={this.operatorClick} value='*'>*</button></td>
                            <td><button className="op" onClick={this.trigonometryClick} value='sin'>sin</button></td>
                        </tr>
                        <tr>
                            <td><button className="number" onClick={this.numberClick} value='1'>1</button></td>
                            <td><button className="number" onClick={this.numberClick} value='2'>2</button></td>
                            <td><button className="number" onClick={this.numberClick} value='3'>3</button></td>
                            <td><button className="op" onClick={this.operatorClick} value='-'>-</button></td>
                            <td><button className="op" onClick={this.trigonometryClick} value='cos'>cos</button></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button className="number" onClick={this.numberClick} style={{width: "100%"}} value='0'>0</button></td>
                            <td><button className="number" onClick={this.operatorClick} value='.'>.</button></td>
                            <td><button className="op" onClick={this.operatorClick} value='%'>%</button></td>
                            <td><button className="op" onClick={this.trigonometryClick} value='tan'>tan</button></td>
                        </tr>
                        <tr>
                            <td colSpan="3"></td>
                            <td><button className="op" onClick={this.calculate}>=</button></td>
                            <td rowSpan="2"><button className="op" style={{height: "100%"}} onClick={this.operatorClick} value='+'>+</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main user='Moyo' />);



