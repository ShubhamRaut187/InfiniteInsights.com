import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Blogs from '../Pages/Blogs';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import BlogDescription from '../Pages/BlogDescription'
import CreateBlog from '../Pages/CreateBlog';
import UpdateBlog from '../Pages/UpdateBlog';
import UserProfile from '../Pages/UserProfile';


function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blogs' element={<Blogs/>}/>
                <Route path='/blogs/:id' element={<BlogDescription/>}/>
                <Route path='/blogs/create' element={<CreateBlog/>}/>
                <Route path='/blogs/update/:id' element={<UpdateBlog/>}/>
                <Route path='/user' element={<UserProfile/>}/>
                <Route path='/auth/login' element={<Login/>}/>
                <Route path='/auth/signup' element={<Signup/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;