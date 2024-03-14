import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ModalComp from '../Components/Modal';
import LoadingComp from '../Components/LoadingComp';
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
     let [loading,Setloading] = useState(false);
    
     //  Function to hadle modal open
     const handleOpen = (alert,message) => {
        Setalert(alert);
        Setmessage(message);
        Setmodalopen(true);
     };

    //  Function to add user to db
     const addUser = async(url) => {
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
                    Avatar:url,
                    Bio:bio,
                    Phone:phone
                })
            });
            let response = await result.json();
            if(response.Message === 'Signup Successful...!'){
                Setloading(false);
                handleOpen('Signup Successful','Congratulations you have successfully signed up.')
            }
            else{
                Setloading(false);
                handleOpen('Something went wrong',response.Message);
            }
            console.log(response);    
        } catch (error) {
            console.log(error);
            Setloading(false);
            handleOpen('Failed to signup...!','Something went wrong please try again.')
        }
     }

    //  Function to upload image to cloudinary
     const uploadImage = async() => {
        const data = new FormData();
        data.append('file',avatar);
        data.append('upload_preset','Infiniteinsights_user');
        data.append('cloud_name','dvplmrulx');
      
        fetch(`https://api.cloudinary.com/v1_1/dvplmrulx/image/upload`,{
            method:'POST',
            body:data
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response);
            addUser(response.secure_url);
        }).catch((error)=>{
            console.log(error);
            Setloading(false);
            handleOpen('Failed to upload image','Failed to upload your image please try again.')
        })
    }
    
     //  Function to handle signup form
     const handleSubmit = async(e) => {
        e.preventDefault();
        Setloading(true);
        if(!name || !email || !phone || !password || !bio || !avatar){
            Setloading(false);
            handleOpen('Some fields are missing...!','All the fields below are mandatory.');
            return;
        }
        uploadImage();

       
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
                {
                    loading ? <LoadingComp message={'Signing in'}/> : <form className='signup_form_div' onSubmit={handleSubmit}>
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
                }
                <div className='signup_outh_btn_div'>
                   {
                    loading ? <></> :  <button>Signup with google</button>
                   }
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