import Todo from "../models/Todo.js";

export const viewTodo = async (req,res) =>{
    try {
       const todo = await Todo.find({})
        res.status(200).json(todo)

    }catch (error) {
        console.log(error)
    }
}
export const createTodo = async(req, res) =>{
    try {
        const newTodo = req.body
        const created = await Todo.create(newTodo)
        res.status(201).json(created)
    }catch (error) {
        console.log(error)
    }
}
export const editTodo = async (req, res) =>{
    const {id} = req.params
    const edit = req.body
    try {
        const todo = await Todo.findByIdAndUpdate(id, edit);
        res.status(200).json({message:"Note updated successfully"})

    }catch (error) {
        console.log(error)
    }

}
export const viewTodoById = async (req, res) =>{
    const {id} = req.params
    try {
        const note = await Todo.findById(id)
        res.status(200).json(note)

    }catch (error) {
        console.log(error)
    }

}
export const deleteTodo = async (req, res) =>{
    const {id} = req.params
    try {
        await Todo.findByIdAndDelete(id)
        res.status(200).json({message: "Deleted Successfully"})

    }catch (error) {
        console.log(error)
    }
}