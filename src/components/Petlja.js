import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Petlja() {

    let niz = ["John", "Ana", "Mihael"];
    const loop = niz.map((item) => <li key={item}>{item}</li>
    );


    return (
        <div className="container-fluid">
            <ul>{loop}</ul>
        </div>
    )
}
