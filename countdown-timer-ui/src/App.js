import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import Timer from './components/timer/timer';
import Events from './components/events/events';
import EventForm from './components/eventForm/eventForm';


function App() {

  return (
    <div className="App">
      <Container>
        <Timer 
          timeTillDate="05 26 2019, 6:00 am" 
          timeFormat="MM DD YYYY, h:mm a"
        />
        <Container style={{width: "400px"}}>
          <br/>
        <Events 
        />
          <br/>
        <EventForm
        />
        </Container>
      </Container>
    </div>
  );
}

export default App;
