import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://lip:lip001@todo-app.gcica13.mongodb.net/todo-mern?retryWrites=true&w=majority&appName=todo-app")
        console.log("MongoDB connected successfully")
    }catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB