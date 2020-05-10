import React, { Component } from 'react';
import './event.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';


class event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: this.props.eventName,
      eventDate: this.props.eventDate
    };

  }
 
  render() {

    return (
      <ListGroup.Item 
        as="li">
          <b>{this.state.eventName}: </b>{this.state.eventDate}
      </ListGroup.Item>
    )
  }
}


export default event;