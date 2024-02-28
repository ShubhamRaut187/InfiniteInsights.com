import React from 'react';
import './Styles/UserCard.css'
function UserCard(props) {
    return (
        <div className='user_card_main'>
            <div className='user_card_avatar_div'>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg" alt="" />
            </div>
            <div className='user_card_info_one'>
                <h1 className='user_card_name'><i className="fa-solid fa-user fa-sm"></i>&nbsp;Shubham Raut</h1>
                <p className='user_card_email'><i className="fa-solid fa-envelope fa-sm"></i>&nbsp;shubhamraut2001187@gmail.com</p>
                <p className='user_card_number'><i className="fa-solid fa-phone fa-sm"></i>&nbsp;+91 7499265181</p>
                <p className='user_card_gender'><i className="fa-solid fa-venus-mars fa-sm"></i>&nbsp;Male</p>
                <p className='user_card_dob'><i className="fa-regular fa-calendar fa-sm"></i>&nbsp;12/12/2001</p>
            </div>
            <div className='user_card_info_two'>
                <p className='user_card_user_bio'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum praesentium consequatur illum amet sequi similique blanditiis odio incidunt sed laborum placeat ducimus culpa officia alias magnam aspernatur, officiis deserunt cum!</p>
            </div>
        </div>
    );
}

export default UserCard;