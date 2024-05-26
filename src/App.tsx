import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import CreateNote from './components/CreateNote';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {Note }from "./model/NoteModel"

function App() {

  const [notes, setNotes] = useState<Note[]>([]);
  return (
    <>
      <Header/>
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
