import React from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import Timer from './components/timer/timer';


function App() {
  return (
    <div className="App">
      <Container>
        <Timer timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a"/>
      </Container>
    </div>
  );
}

export default App;
