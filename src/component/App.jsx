import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';

function App() {
  const [notes, setnotes] = useState([]);
  const addNotes = (inputNote) => {
    setnotes([...notes, inputNote]);
  };
  const deleteNote = (id) => {
    setnotes((prevNote) => {
      return prevNote.filter((_, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNotes} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}
export default App;
