import { DeleteOutlined } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
function NoteCard({ note, handleDelete }) {
  return (
    <Card>
      <CardHeader
        title={note.title}
        subheader={note.category}
        action={
          <IconButton aria-label="delete" onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        avatar={
          <Avatar
            className={
              note.category == "todo"
                ? "yellow"
                : note.category == "work"
                ? "green"
                : "pink"
            }
          >
            {note.category[0].toUpperCase()}
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NoteCard;
