import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../resources/notes';

function App() {
  return (
    <header>
      <Header />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </header>
  );
}
export default App;
