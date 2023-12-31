import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
Paper, Typography } from "@mui/material";
import NoteItem from "../../NoteItem/NoteItem";
import "./Notes.css";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteDesc, setNewNoteDesc] = useState("");

  useEffect(() => {
    dispatch({ type: "FETCH_NOTES" }); // Fetches the notes from the server when the page re-renders //
  }, []);

  const handleNote = () => {
    dispatch({
      type: "ADD_NOTE",
      payload: { title: newNoteTitle, description: newNoteDesc },
    });
    setNewNoteTitle("");
    setNewNoteDesc("");
  };


  return (
    <div className="background-imagenotes">
      <div className="notes-page">
        <div style={{ marginTop: "2rem" }} />
        <Container className="mt-4" style={{ marginTop: "6rem" }}>
          {/* Form container */}
          <Paper elevation={1} className="form-container" sx={{ backgroundColor: 'blanchedalmond', opacity: 0.95 }}>
            <form className="notes-form" onSubmit={handleNote}>
              <Typography variant="h6" className="notes-form-title">
                Add Note
              </Typography>
              <div className="notes-form-container">
                <TextField
                  label="Title"
                  variant="outlined"
                  value={newNoteTitle}
                  onChange={(e) => setNewNoteTitle(e.target.value)}
                  placeholder="Enter note title"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  value={newNoteDesc}
                  onChange={(e) => setNewNoteDesc(e.target.value)}
                  placeholder="Enter note description"
                  multiline
                  rows={5}
                  fullWidth
                  margin="normal"
                />
                <Button variant="outlined" color="primary" type="submit" id="save-btn">
                  Save
                </Button>
              </div>
            </form>
          </Paper>

          <div style={{ marginTop: "2rem" }} />

          {/* Container for the table */}
          {notes.length > 0 &&
          <div className="table-container">
            {/* Table for displaying the list of notes */}
            <TableContainer
              component={Paper}
              elevation={3}
              sx={{
                width: "100%",
                margin: "0 auto",
                backgroundColor: "blanchedalmond",
              }}
            >
              <Table sx={{ minWidth: 700, marginBottom: '20px', backgroundColor: 'blanchedalmond' }} align="center">
                <TableHead>
                  <TableRow>
                    {/* Table columns */}
                    <TableCell sx={{ maxWidth: 300 }} align="center">Title</TableCell>
                    <TableCell
                      sx={{
                        maxWidth: 300,
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                      }}
                      align="center"
                    >
                      Description
                    </TableCell>
                    <TableCell sx={{ width: 150 }} align="center">Timestamp</TableCell>
                    <TableCell sx={{ width: 150 }} align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Mapping over the notes array and rendering NoteItem for each note */}
                  {notes.map((note) => (
                    <NoteItem key={note.id} note={note} /> // Passing note as a prop to NoteItem component
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div> }
        </Container>
      </div>
    </div>
  );
};

export default Notes;


