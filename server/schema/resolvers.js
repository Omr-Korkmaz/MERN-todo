const Todo = require("../models/Todo");

const resolvers = {
  Query: {
    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
    getTodo: async (parent, args) => {
      const todo = await Todo.findById(args.id);
      return todo;
    },
  },
  Mutation: {
    addTodo: async (parent, args) => {
      const newTodo = new Todo({
        title: args.title,
        detail: args.detail,
        date: args.date,
        complete: false,
      });
      await newTodo.save();
      return newTodo;
    },

    deleteTodo: async (parent, args) => {
      await Todo.findByIdAndDelete(args.id);
      return "Selected Item is deleted";
    },

    updateTodo: async (_, { id, complete }) => {
      await Todo.findByIdAndUpdate(id, { complete });
      return true;
    },
  },
};

module.exports= resolvers;
