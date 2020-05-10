import React, { Component } from 'react';
import './events.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import Event from './event/event';


class events extends React.Component {

  state = {
    events: [
      {
        eventName: 'Test1',
        eventDate: 'Test2'
      },
      {
        eventName: 'Test1',
        eventDate: 'Test2'
      }
    ]
  };

 
  render() {

    return (
      <ListGroup as="ul">
        { this.state.events.map((data, index) =>
          <Event
            eventName={data.eventName}
            eventDate={data.eventDate}
          />
        )}
      </ListGroup>
    )
  }
}


export default events;