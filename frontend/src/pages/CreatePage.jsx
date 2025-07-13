import React, {useState} from 'react';
import toast from "react-hot-toast";
import {useNavigate} from "react-router";
import axios from "axios";
import NavBar from "../components/NavBar.jsx";


const CreatePage = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [saving, setSaving] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!title.trim() || !description.trim()){
            toast.error("All fields are required")
            return
        }
        setSaving(true)


        try {

            await axios.post("http://localhost:5001/api/v1/todo/", {
                title,
                description,
            })
            toast.success("Task Added Successfully")
            navigate("/")
        }catch (error) {
            toast.error("Task not Created")
        }finally {
            setSaving(false)
        }
    }
    return (
        <>
            <NavBar/>
        <div className="min-h-screen flex items-center justify-center">

            <div className="card max-w-96 bg-base-200 card-lg">
                <div className="card-body m-5">

                    <div className="card-title items-center justify-center">
                        <h1>Add a New Task</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="form-control flex items-center justify-center">
                        <input type="text" placeholder="Insert Title" className="input input-lg mt-5 mb-5"
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-control items-center justify-center">
                        <textarea placeholder="Insert Description" className="textarea textarea-lg  max-w-xs "
                            onChange={(e)=>setDescription(e.target.value)}
                        ></textarea>

                    </div>
                    <div className="card-actions mt-5 justify-end">
                        <button type="submit" className="btn btn-success" disabled={saving}>{!saving ? "Save" : "Saving"}</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default CreatePage;