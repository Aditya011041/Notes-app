import * as React from 'react';
import { Notes } from '../models/note.model';
import { Card } from 'react-bootstrap';

interface myNotesProps {
  i: Notes;
  handleDelete: (id: any) => void
}

const MyNotes: React.FunctionComponent<myNotesProps> = ({ i , handleDelete}) => {
  return (
    <>
    <Card className='mt-3 p-4' style={{backgroundColor: i.color}}>
    <Card.Title>
      {i.title}
    </Card.Title>
    <Card.Text>
      {i.text}
    </Card.Text>
    <Card.Subtitle className='text-muted'>
      {i.date}
    </Card.Subtitle>
    <button className='mt-3 variant-danger' onClick={()=> handleDelete(i.id)}>delete</button>

    </Card>
    </>
   
  );
};

export default MyNotes;
