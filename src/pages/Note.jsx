import { Container, Grid, Paper, styled } from "@mui/material";
import { Masonry } from "@mui/lab";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

function Note() {
  const [notes, setNotes] = useState([]);
  //Fetching Data
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  //Deleting Data
  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, { method: "DELETE" });

    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };
  //Styled Item example
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Container sx={{ py: 10, mt: 5 }}>
        <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 3 }} spacing={3}>
          {notes &&
            notes.map((note) => (
              <NoteCard key={note.id} note={note} handleDelete={handleDelete} />
            ))}
        </Masonry>
      </Container>
    </>
  );
}

export default Note;
