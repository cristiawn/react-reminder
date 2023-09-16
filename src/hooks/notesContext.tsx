import { Dispatch, SetStateAction, createContext } from "react";

interface Note {
  title: string;
  description: string;
}

const NotesContext = createContext<{ notes: Note[], setNotes?: Dispatch<SetStateAction<Note[]>> }>({
  notes: [],
});

// const NotesContext = createContext({});

export default NotesContext;
