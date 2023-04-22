import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./Create.css";

function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    category: "work",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.name]: e.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.text) {
      fetch(" http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then(() => navigate("/"));
    }
  };
  return (
    <Container sx={{ py: 10, mt: 5 }}>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a new note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          type="text"
          variant="outlined"
          label="Title"
          color="primary"
          fullWidth
          className="feild"
          required
          value={formData.title}
          onChange={(e) => handleChange(e.target)}
          name="title"
        />
        <TextField
          type="text"
          variant="outlined"
          label="Text"
          color="primary"
          fullWidth
          required
          multiline
          rows={4}
          value={formData.text}
          className="feild"
          onChange={(e) => handleChange(e.target)}
          name="text"
          sx={{ my: 2.5 }}
        />
        <FormControl className="feild" fullWidth>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            name="category"
            value={formData.category}
            onChange={(e) => handleChange(e.target)}
          >
            <FormControlLabel value="work" control={<Radio />} label="Work" />
            <FormControlLabel value="todo" control={<Radio />} label="Todo" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<ArrowForwardIosOutlinedIcon />}
          className="btn"
          sx={{ px: 3, py: 1.5, mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Create;
