import React from 'react';
import {SquarePen, Trash2} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import {Link} from "react-router";

const TodoCard = ({todo, setTodo}) => {

    const handleDelete = async (e, id)=>{
        e.preventDefault()
        try {
            if(!window.confirm("Are you sure you want to delete this task")) return;
            await axios.delete(`http://localhost:5001/api/v1/todo/${id}`)
            toast.success("Task Deleted Successfully")
            setTodo((prev)=> prev.filter(todo=> todo._id !== id))


        }catch (e) {
            toast.error("Error! Task not Deleted")
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl ml-5 mt-5">
            <div className="card-body">
                <h2 className="card-title">{todo.title}</h2>
                <p>{todo.description}</p>
                {todo.isCompleted  &&                 <input type="checkbox" checked="checked" className="checkbox checkbox-xs" />
                }
                <div className="card-actions justify-end">
                    <Link to={`/todo/${todo._id}`}>
                    <SquarePen className="text-white" />
                    </Link>
                    <button onClick={(e)=>handleDelete(e, todo._id)} >
                        <Trash2 className="text-red-500" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TodoCard;