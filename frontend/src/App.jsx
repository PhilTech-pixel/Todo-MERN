import React, {useEffect, useState} from 'react';
import axios from "axios";
import NavBar from "./components/NavBar.jsx";

import TodoCard from "./components/TodoCard.jsx";
import {Toaster} from "react-hot-toast";

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
        <>
            <Toaster/>
        <NavBar/>
        <div className="flex flex-wrap">
        {todo.map((todo)=>{
            return(
                <TodoCard todo={todo}/>
            )
            })}

        </div>
        </>
    );
};

export default App;