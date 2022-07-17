import React from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";



export default function Url() {
    const [number, setNumber] = React.useState(1);
    const [response, setResponse] = React.useState({
        "userId": "",
        "id": "",
        "title": "",
        "body": ""
    });

    const fetchData = async () =>{
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${number}`);
            setResponse(response.data);
            
        } catch (error) {
            console.error(error.message);
        }
    }
    function handleClick() {
        let vrednost = document.getElementById("number1").value;
        setNumber(vrednost);
        fetchData();

    }
    
    return(
        
        <div className="container-fluid">
            <div className="input-group mt-3">
                <span className="input-group-text w100">Number</span>
                <input
                type="number"
                id="number1"
                className="form-control"
                name="number"
                
                />
            </div>
            <Button
              variant="danger"
              size="lg"
              block="block"
              type="button"
              className="mt-4 create-edit-btn"
              onClick={handleClick}
            >
              Get Info
              </Button>
              <div>
                <p>USER ID: {response.userId}</p>
                <p>ID: {response.id}</p>
                <p>TITLE: {response.title}</p>
                <p>BODY: {response.body}</p>
              </div>
        </div>
    )
}