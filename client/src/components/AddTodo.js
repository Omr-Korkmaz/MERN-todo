import { useMutation } from "@apollo/client";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useState } from "react";
import { ADD_TODO } from "../graphql/Mutation";
import GET_TODOS from "../graphql/Queries";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    detail: "",
    date: "",
  });

  const [addTodo] = useMutation(ADD_TODO); //addTodo is the function in the server mutation...

  const submitHandle = (event) => {
    event.preventDefault();
    addTodo({     
      variables: {
        title: todo.title,
        detail: todo.detail,
        date: todo.date,
        complete: false,
      },
      refetchQueries: [
        {
          query: GET_TODOS,
        },
      ],
    });
    setTodo({
      title: "",
      detail: "",
      date: "",
    });
  };

  return (
    <div>
      <Typography gutterBottom variant="h4" align="center" margin={5}>
        Apollo Grapql (MERN) TodoList
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "10px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              TODO LIST
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
              align="center"
            >
              Fill up the TODO list and do it within 24 hours :)
            </Typography>
            <form onSubmit={submitHandle}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    value={todo.title}
                    onChange={(e) =>
                      setTodo({ ...todo, title: e.target.value })
                    }
                    type="text"
                    placeholder="Title"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    value={todo.detail}
                    onChange={(e) =>
                      setTodo({ ...todo, detail: e.target.value })
                    }
                    label="Content"
                    multiline
                    rows={3}
                    placeholder="Type your content here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    endIcon={<AddCircleOutlinedIcon />}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Add Todo
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default AddTodo;
