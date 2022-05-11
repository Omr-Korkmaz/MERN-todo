import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        
    }
},{timestamps:true});


const Todo = mongoose.model('todo', todoSchema);
export default Todo;