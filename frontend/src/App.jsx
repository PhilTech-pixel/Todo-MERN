import React from 'react';
import HomePage from "./pages/HomePage.jsx";
import {Routes, Route} from "react-router";
import CreatePage from "./pages/CreatePage.jsx";
import EditPage from "./pages/EditPage.jsx";
import {Toaster} from "react-hot-toast";

const App = () => {

    return (
        <div>
            <Toaster/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/todo/create" element={<CreatePage/>}/>
                <Route path="/todo/:id" element={<EditPage/>}/>
            </Routes>
        </div>
    );
};

export default App;