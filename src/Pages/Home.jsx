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
    
    const settingstwo = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 0
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1
              }
            }
          ]
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
        {
            Image:'https://media.licdn.com/dms/image/D4D12AQHJHFGH5mQJXw/article-cover_image-shrink_720_1280/0/1669958544735?e=2147483647&v=beta&t=_PRJBB1_bdmzyrIeQVx4xepmUvlqT-b7WLIDMIyNkpY',
            Title:'Gods Own Country'
        },
        {
            Image:'https://c0.wallpaperflare.com/preview/434/853/163/india-lavasa-landscape.jpg',
            Title:'Punes Private City'
        }

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
            <div id='brand_info_main'>
                <div className='brand_info'>
                    <h1>Why Infinite Insights?</h1>
                    <p>Infinite Insights stands as a guiding light of knowledge in the vast ocean of online content, offering a multifaceted platform for individuals 
                    to share their thoughts, experiences, and expertise. What distinguishes it from the plethora of blogging sites is its expansive array of categories, 
                    each delving into diverse realms of interest and inquiry.</p>
                </div>
                <div className='brand_categories'>
                    <Slider {...settingstwo} className='home_category_slider'>
                        <div className='home_category_slider_card'>
                            <img src="https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vYzE0ZTQyMTYtMTMxMi00NGQ5LTkxNTktMTY3MTdhOTBkODc3LmpwZWc.webp" alt="sci" />
                        </div>
                        <div className='home_category_slider_card'>
                            <img src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg" alt="sci" />
                        </div>
                        <div className='home_category_slider_card'>
                            <img src="https://marketplace.canva.com/EAFUIlmaRoo/1/0/1600w/canva-gray-blue-minimalist-science-molecular-logo-design-YHz6z_pbldQ.jpg" alt="sci" />
                        </div>
                        <div className='home_category_slider_card'>
                            <img src="https://static.vecteezy.com/system/resources/previews/000/659/844/original/community-logo-vector.jpg" alt="sci" />
                        </div>
                        <div className='home_category_slider_card'>
                            <img src="https://img.freepik.com/premium-vector/hand-drawn-culture-logo-design_23-2149857658.jpg" alt="sci" />
                        </div>
                        <div className='home_category_slider_card'>
                            <img src="https://i.pinimg.com/originals/b4/7b/fb/b47bfbcd716ecdc348335e9928108a9c.jpg" alt="history" />
                        </div>
                        <div className='home_category_slider_card'>
                            <img src="https://t4.ftcdn.net/jpg/03/02/12/83/360_F_302128359_q6aCwgAvdYZBPF4XSwxXddLPE0h3Kor1.jpg" alt="history" />
                        </div>
                        <div className='home_category_slider_card'>
                            <img src="https://static.vecteezy.com/system/resources/previews/009/465/513/original/politics-typography-design-logo-creative-minimalist-policy-logo-tie-design-concept-logo-design-template-vector.jpg" alt="history" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Home;