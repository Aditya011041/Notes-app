import React, { useState, useEffect } from 'react';
import './App.css';
import { Notes } from './models/note.model';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Col, Container, Row } from 'react-bootstrap';
import SingleNotes from './components/SingleNotes';

function App() {
  const [notes, setNotes] = useState<Notes[]>(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <SingleNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
