import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Input() {
    const [state, setState] = React.useState({
        firstNumber: 0,
        secondNumber: 0,
        lastNumber: 0
    })
    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
        console.log(state);
    }
    function handleSubmit(e) {
        e.preventDefault();
        let prvi = state.firstNumber;
        let drugi = state.secondNumber;
        let treci = state.lastNumber;
        let ukupno = prvi * drugi * treci;
        console.log(`rezultat je: ${ukupno}`);
        localStorage.setItem("rezultat", ukupno);
        setRezultat(ukupno);
        
    }
    const [rezultat, setRezultat] = React.useState(() => {
        // getting stored value
        const saved = localStorage.getItem("rezultat");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
    return (
        <div className="container-fluid">
            <div className="form-wrapper">
                <Form onSubmit={handleSubmit}>
                
                    <div className="input-group mt-3">
                        <span className="input-group-text w100">First Number</span>
                        <input
                        type="number"
                        id="firstNumber"
                        className="form-control"
                        value={state.firstNumber}
                        name="firstNumber"
                        onChange={handleChange}
                        />
                    </div>
                    <div className="input-group mt-3">
                        <span className="input-group-text w100">Second Number</span>
                        <input
                        type="number"
                        id="secondNumber"
                        className="form-control"
                        value={state.secondNumber}
                        name="secondNumber"
                        onChange={handleChange}
                        />
                    </div>
                    <div className="input-group mt-3">
                        <span className="input-group-text w100">Last Number</span>
                        <input
                        type="number"
                        id="lastNumber"
                        className="form-control"
                        value={state.lastNumber}
                        name="lastNumber"
                        onChange={handleChange}
                        />
                    </div>
                    <Button
                        variant="danger"
                        size="lg"
                        block="block"
                        type="submit"
                        className="mt-4 create-edit-btn"
                        value="Submit"
                    >
                        Get Result
                    </Button>
                    
                </Form>
            </div>
        <div>
            <p>{rezultat}</p>    
        </div>    
        </div>
    );
}