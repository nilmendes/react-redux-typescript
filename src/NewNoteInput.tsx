import React, { ChangeEvent } from 'react';

interface NewInputProps {
    addNote(note:string): void;
}

export const NewNoteInput: React.FC<NewInputProps> = ({addNote}) => {
    const [note, setNote] = React.useState("");

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }
    const onAddNoteClick = () => {
        addNote(note);
        setNote("");
    }
  return (
    <div style={{padding: "10px"}}>
      <input onChange={updateNote} value={note} type='text' name='note' placeholder='Notas' />
      <button onClick={onAddNoteClick} >Adicionar Notas</button>
    </div>
  )
}
