import React from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Input from "./components/Input";
import Petlja from "./components/Petlja";
import Api from "./components/Api";
import Tsf from "./components/Tsf";
import Users from "./components/Users";
import Url from "./components/Url";
// import Stoperica from "./components/Stoperica";
import BlockApi from "./components/BlockApi";
// import CreateStudent from "./components/create-student.component";
// import EditStudent from "./components/edit-student.component";
// import StudentList from "./components/student-list.component";
// import MealList from "./components/MealList";
// import CreateMeal from "./components/CreateMeal";
// import EditMeal from "./components/EditMeal";

function App() {
  return (
    <div className="App">
      {/* <Input />
      <Petlja />
      <Api /> */}
      {/* <Tsf />
      <Users /> */}
      {/* <Url /> */}
      {/* <Stoperica /> */}
      <BlockApi />
    </div>
  );
}

export default App;
