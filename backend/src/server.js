import express from 'express'
import cors from 'cors'
import connectDB from "./config/db.js";
import router from "./routes/todoRouter.js";
const app = express()


const port = 5001
//middleware

app.use(cors())
app.use(express.json())

app.use("/api/v1/todo", router)




connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`)
    })
})