import React from "react";
import GET_TODOS from "../graphql/Queries";
import { useQuery } from "@apollo/client";
import TodoCard from "./TodoCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const TodoContainer = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <div>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 5,
            }}
          >
            {data.getTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                id={todo.id}
                title={todo.title}
                detail={todo.detail}
                date={todo.date}
              />
            ))}
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default TodoContainer;
