import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Signup.css'
function Signup(props) {
    let navigate = useNavigate();
    return (
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
                <form className='signup_form_div'>
                <label className='signup_for_label'>Name</label>
                    <input type="text" placeholder='Name'className='signup_form_input'/>
                    <label className='signup_for_label'>Email</label>
                    <input type="email" placeholder='Email'className='signup_form_input'/>
                    <label className='signup_for_label'>Phone</label>
                    <input type="number" placeholder='Phone'className='signup_form_input'/>
                    <label className='signup_for_label'>Avatar</label>
                    <input type="file" className='signup_form_input_file'/>
                    <label className='signup_for_label'>Password</label>
                    <input type="password" placeholder='Password' className='signup_form_input' />
                    <label className='signup_for_label'>Describe Yourself</label>
                    <textarea className='signup_form_input_textarea' cols="30" rows="10"></textarea>
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
    );
}

export default Signup;