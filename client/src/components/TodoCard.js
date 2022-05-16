import { useMutation } from "@apollo/client";
import moment from "moment";
import { DELETE_TODO, UPDATE_TODO } from "../graphql/Mutation";

import GET_TODOS from "../graphql/Queries";
import styles from "./TodoCard.module.css";
import DeleteIcon from "@mui/icons-material/Delete";


const TodoCard = ({ title, id, detail, date, complete }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [deleteTodo] = useMutation(DELETE_TODO);
  const removeTodo = (id) => {
    deleteTodo({
      variables: {
        id: id,
      },
      refetchQueries: [
        {
          query: GET_TODOS,
        },
      ],
    });
  };

  const [updateTodo] = useMutation(UPDATE_TODO);
  const update = (id) => {
    updateTodo({
      variables: {
        id: id,
        complete: !complete,
      },
      refetchQueries: [
        {
          query: GET_TODOS,
        },
      ],
    });
  };

  return (
    <div
      onClick={() => update(id)}
      className={`${styles.container}  ${
        complete === true
          ? styles.container_completed
          : styles.container_uncompleted
      }`}
    >
      <div className={styles.todo_body}>
        <h1 className={styles.container_title}>{title}</h1>
        <hr className={styles.container_line} />

        <p className={styles.container_detail}>{detail}</p>
        <p className={styles.container_date}>
          Created ({moment(date).format("MMMM DD YY")})
        </p>
      </div>
      <DeleteIcon
        size="large"
        className={styles.container_btnremove}
        onClick={() => removeTodo(id)}
      />
    </div>
  );
};

export default TodoCard;
