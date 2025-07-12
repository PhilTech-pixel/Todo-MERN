import React, {useEffect, useState} from 'react';
import axios from "axios";
import {LoaderIcon} from "lucide-react";
import {Toaster} from "react-hot-toast";
import NavBar from "../components/NavBar.jsx";
import TodoCard from "../components/TodoCard.jsx";

const HomePage = () => {

    const [todo, setTodo] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTodo = async()=>{
            const response = await axios.get("http://localhost:5001/api/v1/todo")
            setTodo(response.data)
            console.log(response.data)

        }
        setLoading(false)
        fetchTodo()
    }, []);

    if(loading){
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="animate-spin size-10"/>
            </div>

        )
    }
    return (
        <>

            <Toaster/>
            <NavBar/>
            <div className="flex flex-wrap">
                {todo.map((todo)=>{
                    return(
                        <TodoCard todo={todo} setTodo={setTodo} />
                    )
                })}

            </div>
        </>
    );
};

export default HomePage;