import React, { Component } from 'react';
import './events.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import Event from './event/event';


class events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      events: []
    }
  };

  componentDidMount() {
    fetch("http://localhost:8080/getEvents")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            events: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
 
  render() {
    const { error, isLoaded, items } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ListGroup as="ul">
          { this.state.events.map((data, index) =>
            <Event
              key={index}
              eventName={data.eventName}
              eventDate={data.eventDate}
            />
          )}
      
        </ListGroup>
      );
    }
   
  }
}


export default events;
