import React, { Component } from 'react';
import './eventForm.css';

import { Container, Row, Col, ListGroup, ListGroupIte, Form, FormGroup, FormLabel, Button  } from 'react-bootstrap';


class eventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        eventName: String,
        eventDate: Date
      }
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){ // Load the data (Usually from an API endpoint)
    this.setState({
        eventName: '',
        eventDate: ''
    });
}

handleChange(e) {
    let target = e.target; // the element that initiated the event
    let value = target.value; // its value
    let name = target.name; // its name
  

    this.setState((state,prop)=>{ // use the "name" to set the matching property in the state
        state.form[name] = value;
        return{ form:  state.form}
    });
}

handleSubmit(e) {
  e.preventDefault();
}
 
  render() {

    return (
      <Form>
        <Form.Group name="eventName" controlId="eventName">
          <Form.Label>Event Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter event name..." onChange={this.handleChange} />
        </Form.Group>

        <Form.Group name="date" controlId="date">
          <Form.Label>Deadline Date:</Form.Label>
          <Form.Control type="date" onChange={this.handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    )
  }
}


export default eventForm;