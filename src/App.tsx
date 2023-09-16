import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StickyNotes } from "./components/StickyNotes";
import { useState } from "react";
import NotesContext from "./hooks/notesContext";

interface NotesProps {
  title: string;
  description: string;
}

function App() {
  const [notes, setNotes] = useState<NotesProps[]>([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <main>
        <Header />
        <Hero />
        <StickyNotes />
      </main>
    </NotesContext.Provider>
  );
}

export default App;
