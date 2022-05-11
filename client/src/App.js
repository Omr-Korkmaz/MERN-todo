import "./App.css";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import GET_TODOS from "./graphql/Queries";
import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(GET_TODOS);

  console.log(data);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">

<div className="App"> 
      <Typography gutterBottom variant="h3" align="center">
        Graphql-React-Mongo-Express
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              TODO LIST
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the TODO list and do it within 24 hours :).
          </Typography> 
            <form>
              <Grid container spacing={1}>
               
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Title" label="Title" variant="outlined" fullWidth required />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>


      <div>
        {data.getTodos.map((todo) => (
          <ul>
            <li>{todo.title}</li>
            <li>{todo.detail}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
