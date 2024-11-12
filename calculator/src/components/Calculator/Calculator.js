import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";

function Calculator() {
    const [expression, setExpression] = useState("0");
    const [lastInput, setLastInput] = useState("");

    const handleClick = (value) => {
        if (value === ".") {
            const lastNumber = expression.split(/[\+\-\*\/]/).pop();
            if (lastNumber.includes(".")) {
                return;
            }
        }

        if (/[+\-*/]/.test(value)) {
            if (/[+\-*/]/.test(lastInput) && value !== '-') {
                setExpression((prev) => prev.slice(0, 1) + value);
                setLastInput(value);
                return;
            }
        }

        setExpression((prev) => (prev === "0" ? value.toString() : prev + value));
        setLastInput(value.toString());
    };

    const handleClear = () => {
        setExpression("0");
        setLastInput("");
    };

    const handleCalculate = () => {
        try {
            setExpression(eval(expression.replace(/--/g, '+')).toString());
        } catch (error) {
            setExpression("Error");
        }
        setLastInput("");
    };

    return (
        <div className="text-white" id="calc_canva">
            <div id="display">
                <div id="calc">{expression}</div>
            </div>
            <div id="buttons">
                <Button onClick={() => handleClick(9)} className="button" id="nine" variant="outline-info">9</Button>
                <Button onClick={() => handleClick(8)} className="button" id="eight" variant="outline-info">8</Button>
                <Button onClick={() => handleClick(7)} className="button" id="seven" variant="outline-info">7</Button>
                <Button onClick={() => handleClick(6)} className="button" id="six" variant="outline-info">6</Button>
                <Button onClick={() => handleClick(5)} className="button" id="five" variant="outline-info">5</Button>
                <Button onClick={() => handleClick(4)} className="button" id="four" variant="outline-info">4</Button>
                <Button onClick={() => handleClick(3)} className="button" id="three" variant="outline-info">3</Button>
                <Button onClick={() => handleClick(2)} className="button" id="two" variant="outline-info">2</Button>
                <Button onClick={() => handleClick(1)} className="button" id="one" variant="outline-info">1</Button>
                <Button onClick={() => handleClick(0)} className="button" id="zero" variant="outline-info">0</Button>
                <Button onClick={handleCalculate} id="equals" className="button" variant="outline-dark">=</Button>
                <Button onClick={() => handleClick("+")} id="add" className="button" variant="outline-success">+</Button>
                <Button onClick={() => handleClick("-")} id="subtract" className="button" variant="outline-success">-</Button>
                <Button onClick={() => handleClick("*")} id="multiply" className="button" variant="outline-success">*</Button>
                <Button onClick={() => handleClick("/")} id="divide" className="button" variant="outline-success">/</Button>
                <Button onClick={() => handleClick(".")} id="decimal" className="button" variant="outline-success">.</Button>
                <Button onClick={handleClear} id="clear" className="button" variant="outline-danger">AC</Button>
            </div>
        </div>
    );
}

export default Calculator;
