import React from 'react';
import './Styles/BlogCard.css'
function BlogCard({title,image,subtitle}) {
    return (
        <div className='blog_card'>
            <div className='blog_card_img'>
                <img src={image} alt="" />
            </div>
            <div className='blog_card_info'>
                <h1 className='blog_card_title'>{title}</h1>
                <div className='blog_card_sub_div'>
                <p className='blod_card_subtitle'>{subtitle}</p>
                </div>
                <p className='blog_card_author'>Blog by Shubham</p>
                <div className='blog_card_icon'>
                <i className="fa-regular fa-heart fa-lg" style={{color:'#e78895'}}></i>
                <i className="fa-regular fa-paper-plane fa-lg" style={{color:'#e78895'}}></i>
                </div>
                <button className='blog_card_read_btn'>Read Blog</button>
            </div>
        </div>
    );
}

export default BlogCard;