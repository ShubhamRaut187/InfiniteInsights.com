import React from 'react';
import './Styles/Login.css'
function Login(props) {
    return (
        <div>
            <div className='login_main'>
                <div className='login_div_one'>
                    <h1>Welocme Back to Infinte Insights</h1>
                    <p>Welcome to Infinite Insights, your gateway to a world of diverse perspectives and endless creativity.Whether you're a seasoned blogger or just starting out, Infinite Insights offers a welcoming space where your ideas can flourish and inspire others. So log in now and let your imagination take flight as you embark on a journey of discovery and self-expression.</p>
                </div>
                <div className='login_div_two'>
                    <div className='login_info_div'>
                        <h1>Login to Your Account</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eos et vitae. Laborum recusandae dolorum, quaerat doloribus nulla facere consequatur. Error rem hic voluptas illum dignissimos asperiores amet cupiditate dolores?</p>
                    </div>
                    <form className='login_form_div'>
                        <label className='login_for_label'>Username / Email</label>
                        <input type="email" placeholder='Email'className='login_form_input'/>
                        <label className='login_for_label'>Password</label>
                        <input type="password" placeholder='Password' className='login_form_input' />
                        <input type="submit" value='Login'className='login_form_btn'/>
                        <p className='login_form_toogle_text'>Don't Have a Account ? Create One...</p>
                    </form>
                    <div className='login_outh_btn_div'>
                        <button>Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;