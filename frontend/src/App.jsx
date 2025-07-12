import React, {useEffect, useState} from 'react';
import axios from "axios";
import NavBar from "./components/NavBar.jsx";
import {SquarePen, Trash2} from "lucide-react";

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
        <NavBar/>
        <div className="flex flex-wrap">
        {todo.map((todo)=>{
            return(
                <div key={todo._id} className="card w-96 bg-base-100 shadow-xl ml-5 mt-5">
                    <div className="card-body">
                        <h2 className="card-title">{todo.title}</h2>
                        <p>{todo.description}</p>
                        <div className="card-actions justify-end">
                            <SquarePen className="text-white" />
                            <Trash2 className="text-red-500" />
                        </div>
                    </div>
                </div>
            )
            })}

        </div>
        </>
    );
};

export default App;