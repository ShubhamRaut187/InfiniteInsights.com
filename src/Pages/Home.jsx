import React from 'react';

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Components
import HomeBannerCards from '../Components/HomeBannerCards';

import './Styles/Home.css'

function Home(props) {
    
    // Slider Settings 
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        fade: true,
        speed:500,
        waitForAnimate: false
      };
      
    // Banner Data Array
    const banners = [
        {
            Image:'https://wallpaperswide.com/download/indian_railway-wallpaper-1920x1080.jpg',
            Title:'Rain and Rail'
        },
        {
            Image:'https://s3-ap-south-1.amazonaws.com/soulveda-media-prod/wp-content/uploads/2021/03/19125851/Travel%20wide%20broaden%20your%20mind.jpg',
            Title:'Wanderlust Himalaya'
        },
        {
            Image:'https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/MRM_4847.JPG.webp',
            Title:'Chandrayaan'
        },
        {
            Image:'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/84000/84866-Srinagar.jpg',
            Title:'Kahmir: Where heaven meets earth'
        },
        {
            Image:'https://wallpapers.com/images/hd/happy-holi-hd-massive-crowd-5gxy49d2oesx5yv9.jpg',
            Title:'Holi @ Vrindavan'
        },
        {
            Image:'https://blog.untravel.com/wp-content/uploads/2017/11/main-1.jpg',
            Title:'Rajasthans Camel Safari'
        },
        {
            Image:'https://www.hdwallpapers.in/download/taj_mahal_india_hdr-wide.jpg',
            Title:'Taj of India'
        },
        {
            Image:'https://cache.careers360.mobi/media/article_images/2022/10/14/stanford-university-list-of-top-scientists-india-china-featured-image.webp',
            Title:'Me and science'
        },

    ]  
    return (
        <div>
            <div className='hm_banner_parent'>
                <Slider {...settings} className='hm_banner_slider'>
                {
                    banners.map((elem,index)=>{
                        return <div className='hm_banner_slide_item'>
                            <HomeBannerCards Image={elem.Image} Title={elem.Title}/>
                        </div>
                    })
                }
                </Slider>
            </div>
        </div>
    );
}

export default Home;