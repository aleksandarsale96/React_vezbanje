import React from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";


export default function BlockApi() {
    const [number, setNumber] = React.useState(1);
    const [response, setResponse] = React.useState({
        "miner": "",
        "number": "",
        "timestamp": "",
        "txCountByBlock": ""
    });
    function handleClick() {
        let vrednost = document.getElementById("number1").value;
        setNumber(vrednost);
        fetchData();

    }
    const fetchData = async () =>{
        try {
            const response = await axios.get(`https://explorer.tsf-platform.com/api/v1/block/${number}`);
            setResponse(response.data);
            
        } catch (error) {
            console.error(error.message);
        }
    }
   
    return(
        <div className="container-fluid">
            <input
                type="number"
                id="number1"
                className="form-control"
                name="nbr"
                />
            <Button
                variant="danger"
                size="lg"
                block="block"
                type="button"
                className="mt-4 create-edit-btn"
                onClick={handleClick}
            >
            Submit
            </Button>
            <p>Miner: {response.miner}</p>
            <p>Block Number: {response.number}</p>
            <p>Timestamp: {response.timestamp}</p>
            <p>Tx by block: {response.txCountByBlock}</p>
        </div>
    )
}