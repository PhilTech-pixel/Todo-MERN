import React, {useEffect, useState} from 'react';
import axios from "axios";
import NavBar from "./components/NavBar.jsx";


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
        <div className="grid grid-flow-row grid-cols-3 gap-4 mx-auto">
        {todo.map((todo)=>{
            return(
                <div className="card w-96 glass ml-5 mt-5">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt=""/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{todo.title}</h2>
                        <p>{todo.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Edit Task</button>
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