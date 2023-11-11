import React, { useState } from 'react';

function CreateNote(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    const newNote = { ...note };
    setNote({
      title: '',
      content: '',
    });
    props.onAdd(newNote);
  };
  return (
    <div>
      <form>
        <input
          name='title'
          onChange={handleChange}
          value={note.title}
          placeholder='Title'
        />
        <textarea
          name='content'
          onChange={handleChange}
          placeholder='Take a note...'
          rows='3'
          value={note.content}
        />
        <button type='button' onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
