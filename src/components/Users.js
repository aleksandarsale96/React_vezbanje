import React from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";


export default function Users() {

    const [apiResponse, setApiResponse] = React.useState([]);
    const fetchData = async () =>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(response.data);
            const arrData = setApiResponse(response.data);
            
        
        } catch (error) {
            console.error(error.message);
        }
    }
    // let apiData = [];
    // for (let i = 0; i < apiResponse.length; i++) {
    //     let element = apiResponse[i];
    //     let id = element.id;
    //     let name = element.name;
    //     let email = element.email;
    //     let city = element.address.city;
    //     let item= <tr className="" key={id}>
    //         <td className="">{id}</td>
    //         <td className="">{name}</td>
    //         <td className="">{email}</td>
    //         <td className="">{city}</td>
    //     </tr>
    //     apiData.push(item);
    // }
    // apiData.join("");

    const apiData1 = apiResponse.map((item) => {
        let id = item.id;
        let name = item.name;
        let email = item.email;
        let city = item.address.city;
        return(
            <tr className="" key={id}>
                <td className="">{name}</td>
                <td className="">{email}</td>
                <td className="">{city}</td>
            </tr>
        ) 
    });
    
    
    const handleClick = () => {
        fetchData();
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
                        <th>ID</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>{ apiData1 }</tbody>
            </Table>
        </div>
    );
}