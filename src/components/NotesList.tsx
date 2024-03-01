import * as React from 'react';
import { Notes } from '../models/note.model';
import MyNotes from './MyNotes';

interface  NotesListProps {
    notes: Notes[]
    setNotes : React.Dispatch<React.SetStateAction<Notes[]>>
}

const NotesList: React.FunctionComponent< NotesListProps> = (props) => {
    const {notes , setNotes} = props;
    const handleDelete = (id : number)=>{
        console.log(id);
        setNotes(notes.filter(i => i.id != id))

    }
    const showNotes = () : JSX.Element[] =>{
        return notes.map((i )=>{
            return <MyNotes key={i.id} i={i} handleDelete = {handleDelete} />
        })
    }
  return (
    <>
    <h2 className='mt-3'>Notes </h2>
    <div>{showNotes()}</div>
    </>
  );
};

export default NotesList;
