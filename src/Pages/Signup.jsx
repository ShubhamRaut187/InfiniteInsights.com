import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ModalComp from '../Components/Modal';

import './Styles/Signup.css'


function Signup(props) {
    let navigate = useNavigate();
    
     // States for user data
     let [name,Setname] = useState(null);
     let [email,Setemail] = useState(null);
     let [phone,Setphone] = useState(null);
     let [avatar,Setavatar] = useState(null);
     let [password,Setpassword] = useState(null);
     let [bio,Setbio] = useState(null);
     
     let [modalopen,Setmodalopen] = useState(false);
     let [alert,Setalert] = useState(null);
     let [message,Setmessage] = useState(null);

    //  Function to hadle modal open
     const handleOpen = (alert,message) => {
        Setalert(alert);
        Setmessage(message);
        Setmodalopen(true);
     };
     
    //  Function to upload image to cloudinary
     const uploadImage = async() => {
        const data = new FormData();
        data.append('file',avatar);
        data.append('upload_preset','Infiniteinsights_user');
        data.append('cloud_name','dvplmrulx');
        
        try {
            let result = await fetch(`https://api.cloudinary.com/v1_1/dvplmrulx/image/upload`,{
                method:'POST',
                body:data
            });
            let response = await result.json();
            console.log(response);
            return response.secure_url;
        } catch (error) {
            console.log(error);
            return false;
        }
     }

    //  Function to handle signup form
     const handleSubmit = async(e) => {
        e.preventDefault();
        if(!name || !email || !phone || !password || !bio || !avatar){
            handleOpen('Some fields are missing...!','All the fields below are mandatory.');
            return;
        }
        let image_url = uploadImage();
        if(!image_url){
            handleOpen('Failed to upload image...!','Failed to upload image please try agian.');
            return
        }

        try {
            let result = await fetch(`http://localhost:8000/auth/v1/signup`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    Name:name,
                    Email:email,
                    Password:password,
                    Avatar:avatar,
                    Bio:bio
                })
            });
            let response = await result.json();
            console.log(response);    
        } catch (error) {
            console.log(error);
            handleOpen('Failed to signup...!','Something went wrong please try again.')
        }
    } 

    return (
        <>
        <div>
        <div className='signup_main'>
            <div className='signup_div_one'>
                <h1>Infinte Insights Welcome You!</h1>
                <p>Welcome to Infinite Insights, your gateway to a world of diverse perspectives and endless creativity.Whether you're a seasoned blogger or just starting out, Infinite Insights offers a welcoming space where your ideas can flourish and inspire others. So log in now and let your imagination take flight as you embark on a journey of discovery and self-expression.</p>
            </div>
            <div className='signup_div_two'>
                <div className='signup_info_div'>
                    <h1>Signup</h1>
                    <p>Add your details, so we know you well. A general tip a ideal password has 8 characters and must include atleast 1 number,special character, uppercase character, lowercase character.</p>
                </div>
                <form className='signup_form_div' onSubmit={handleSubmit}>
                <label className='signup_for_label'>Name</label>
                    <input type="text" placeholder='Name'className='signup_form_input' onChange={(e)=>{
                        Setname(e.target.value)
                    }}/>
                    <label className='signup_for_label'>Email</label>
                    <input type="email" placeholder='Email'className='signup_form_input'  onChange={(e)=>{
                        Setemail(e.target.value)
                    }}/>
                    <label className='signup_for_label'>Phone</label>
                    <input type="number" placeholder='Phone'className='signup_form_input'  onChange={(e)=>{
                        Setphone(e.target.value)
                    }}/>
                    <label className='signup_for_label'>Avatar</label>
                    <input type="file" className='signup_form_input_file' onChange={(e)=>{
                        Setavatar(e.target.files[0])
                    }}/>
                    <label className='signup_for_label'>Password</label>
                    <input type="password" placeholder='Password' className='signup_form_input'  onChange={(e)=>{
                        Setpassword(e.target.value)
                    }}/>
                    <label className='signup_for_label'>Describe Yourself</label>
                    <textarea className='signup_form_input_textarea' cols="30" rows="10"  onChange={(e)=>{
                        Setbio(e.target.value)
                    }}></textarea>
                    <input type="submit" value='Signup'className='signup_form_btn'/>
                    <p className='signup_form_toogle_text' 
                    onClick={()=>{
                        navigate('/auth/login')
                    }}
                    >Already Have a Account ? Login...</p>
                </form>
                <div className='signup_outh_btn_div'>
                    <button>Signup with google</button>
                </div>
            </div>
        </div>
       
    </div>
    {
        !modalopen ? <></> : <ModalComp alert={alert} message={message} modalopen={modalopen} Setmodalopen={Setmodalopen}/> 
    }
    </>
    );
}

export default Signup;