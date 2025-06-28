import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please add the title"]

    },
    description:{
        type: String,
        required:[true, "Please add the description"]

    },
    isCompleted:{
        type: Boolean,
        default: false,

    },
},
    {
        timestamps:true
    }

)

const Todo = mongoose.model("Todo", TodoSchema)

export default Todo