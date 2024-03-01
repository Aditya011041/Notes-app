import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRef } from 'react';
import { Notes } from '../models/note.model';

interface SingleNotesProps {
  notes: Notes[]
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>
}

const SingleNotes: React.FunctionComponent<SingleNotesProps> = ({ notes, setNotes }) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void =>  {
    e.preventDefault();
    if (titleRef.current?.value === '' || textRef.current?.value === '') {
      return alert('all fields are mandatory')
    }
    setNotes(prevNotes =>   [...prevNotes, {
      id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: (new Date()).toString()
    }]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
    
  };
  React.useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      console.log('Stored notes:', storedNotes);
      setNotes(JSON.parse(storedNotes));
    }
  }, [setNotes]);

  // Update local storage whenever notes change
  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  

  return (
    <>
      <h2>Create Notes</h2>
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e) }>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title for the Note" ref={ titleRef }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control placeholder="Enter your notes" as="textarea" rows={3} ref={ textRef }/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
                    <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color" ref={ colorRef }/>
                </Form.Group>
                <Button type="submit" variant="primary">Submit</Button>
            </Form>
    </>
  );
};

export default SingleNotes;
