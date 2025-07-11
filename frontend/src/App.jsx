import React, {useEffect, useState} from 'react';
import axios from "axios";


const App = () => {
    const [todo, setTodo] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchTodo = async()=>{
            const response = await axios.get("http://localhost:5001/api/v1/todo")
            setTodo(response.data)
            console.log(response.data)
        }
        fetchTodo()
    }, []);
    return (
        <div>
            <h1>Home Page</h1>
            {todo.map((todo)=>{
                return(
                    <>
                    <h1 key={todo._id}>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    </>
                )
            })}
        </div>
    );
};

export default App;