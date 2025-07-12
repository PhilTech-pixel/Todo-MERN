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
        <div className="flex flex-wrap">
        {todo.map((todo)=>{
            return(
                <div className="card w-96 bg-base-100 shadow-xl ml-5 mt-5">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
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