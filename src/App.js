import React, { Component } from "react";
import { Row } from 'react-bootstrap';
import Header from "./Components/Header/Header";
import Note from "./Components/Note/Note";
import Footer from "./Components/Footer/Footer";

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  render() {
  return (
    <div className="app">
      <Header />
          <Row md={5}>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </Row>
      <Footer />
    </div>
  );
}
}