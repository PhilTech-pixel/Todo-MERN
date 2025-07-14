import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams} from "react-router";
import {LoaderIcon} from "lucide-react";

const EditPage = () => {
    const [todo, setTodo] = useState(null)
    const [loading, setLoading]= useState(true)
    const [saving, setSaving] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTodo= async()=>{
            try {
                const res = await axios.get(`http://localhost:5001/api/v1/todo/${id}`)
                setTodo(res.data)
            }catch (e) {
                console.log(e)
                toast.error("Task not edited")
            }finally {
                setLoading(false)
            }
        }
        fetchTodo()
    }, [id]);

    const handleSave = async ()=>{
        setSaving(true)
        try {
            await axios.patch(`http://localhost:5001/api/v1/todo/${id}`, todo)
            toast.success("Task Edited Successfully")
            navigate("/")
        }catch (e) {
            toast.error("Task  not Updated Successfully")
        }finally {
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="animate-spin size-10"/>
            </div>
        )
    }
    return (
        <div className="min-h-screen  flex items-center justify-center">
            <div className="card max-w-96 bg-base-200 card-lg">
                <div className="card-body m-5">

                    <div className="card-title items-center justify-center">
                        <h1>Edit Task</h1>
                    </div>
                        <div className="form-control flex items-center justify-center">
                            <input type="text" placeholder="Insert Title" className="input input-lg mt-5 mb-5"
                                   value={todo.title}
                                   onChange={(e)=>setTodo({...todo, title: e.target.value})}
                            />
                        </div>
                        <div className="form-control items-center justify-center">
                        <textarea placeholder="Insert Description" className="textarea textarea-lg  max-w-xs "
                                  value={todo.description}
                                  onChange={(e)=>setTodo({...todo, description: e.target.value})}
                        ></textarea>

                        </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Completed</span>
                            <input type="checkbox" checked={todo.isCompleted} disabled={todo.isCompleted} onChange={()=>setTodo({...todo, isCompleted: true})}  className="checkbox" />
                        </label>
                    </div>
                        <div className="card-actions mt-5 justify-end">
                            <button type="submit" className="btn btn-success" onClick={handleSave} disabled={saving}>{!saving ? "Save" : "Saving"}</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default EditPage;