import React, { Component } from "react";
import { Col } from 'react-bootstrap';

import "./Note.scss";

export default class Note extends Component {
    render() {
        return (
            <Col>
                <div className="note">
                    <h5>TITLE</h5>
                    <p>CONTENT</p>
                </div>
            </Col>
        )
    }
}