import React from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";


export default function Tsf() {
    const [apiResponse, setApiResponse] = React.useState([]);
     
    const fetchData = async () =>{
        try {
            const response = await axios.get('https://explorer.tsf-platform.com/api/v1/block/latest/5/1');
            console.log(response.data);
            const arrData = setApiResponse(response.data);
        
        } catch (error) {
            console.error(error.message);
        }
    }
    const apiData = apiResponse.map(({ number, timestamp, difficulty }) => (
        <tr className="" key={number}>
            <td className="">{number}</td>
            <td className="">{timestamp}</td>
            <td className="">{difficulty}</td>
        </tr>
    ));
    
    const handleClick = () => {
        fetchData()
    };

    return (
        <div className="container-fluid">
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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>difficulty</th>
                        <th>extraData</th>
                        <th>gasLimit</th>
                    </tr>
                </thead>
                <tbody>{ apiData }</tbody>
            </Table>
        </div>
    );
}