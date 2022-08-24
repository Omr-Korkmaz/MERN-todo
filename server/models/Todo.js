const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 1,
      required: true,
    },
    detail: {
      type: String,
    },
    complete: {
        type: Boolean,
      },


  },
  { timestamps: true }
);

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
