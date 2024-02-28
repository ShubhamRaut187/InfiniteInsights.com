import React from 'react';

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Styles/BlogDescription.css'
function BlogDescription(props) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        fade: true,
        speed:500,
        waitForAnimate: false
      };
    return (
        <div>
            <div id='blog_description_main'>
                
                <div className='blogs_info_div'>
                    <h1 className='blogs_description_heading'>Holi and Vrindavan</h1>
                    <p className='blogs_description_subtitle'>
                    Step into a world where tradition dances with spirituality, and joy paints every corner in vibrant hues. In the heart of Vrindavan and Mathura, amidst the kaleidoscope of colors, immerse yourself in a celebration that transcends time and space. Join me on an unforgettable odyssey, where every moment pulsates with the essence of Holi's magic.
                    </p>
                    <p className='blogs_descriptio_one'>
                    Embarking on a pilgrimage to Vrindavan and Mathura during the kaleidoscopic festival of Holi was a soul-stirring odyssey like no other. The air was electrified with anticipation as I wandered through the quaint streets adorned with colorful banners and the fragrance of blossoming flowers. With each step, I felt a deep connection to the rich tapestry of history and spirituality that enveloped these sacred towns, setting the stage for an unforgettable celebration of love, devotion, and joy.
                    </p>
                    <p className='blogs_description_two'>
                    In the heart of Vrindavan, amidst the ancient temples and bustling bazaars, I found myself immersed in a symphony of sights and sounds that heralded the arrival of Holi. The streets thrummed with the rhythmic beats of dhols, while vibrant hues of gulal painted the town in a riot of colors. Amidst laughter and camaraderie, I joined the jubilant crowds in exchanging greetings and partaking in the age-old tradition of smearing colors, feeling the barriers of language and culture dissolve in the shared spirit of celebration.
                    </p>
                    <p className='blogs_description_three'>
                    As the festivities reached a crescendo in Mathura, the birthplace of Lord Krishna, I witnessed a spectacle that transcended time and space. Against the backdrop of ancient temples and sacred ghats, the timeless tale of Radha and Krishna unfolded in mesmerizing performances and spirited processions. In the glow of flickering oil lamps and the echo of devotional hymns, I marveled at the profound symbolism of Holi—the triumph of light over darkness, the onset of spring, and the renewal of faith and hope. In the embrace of Vrindavan and Mathura, amidst the swirl of colors and emotions, I discovered not only the magic of Holi but also the enduring beauty of tradition, spirituality, and community.
                    </p>
                    <div className='description_icons'>
                    <i className="fa-regular fa-heart fa-lg" style={{color:'#e78895'}}></i>
                    <i className="fa-regular fa-paper-plane fa-lg" style={{color:'#e78895'}}></i>
                    </div>
                    <div className='description_next_btn'>
                        <button>Next Blog</button>
                    </div>
                </div>
                <div className='blogs_description_images'>
                    {/* <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/84000/84866-Srinagar.jpg" alt="" /> */}
                    <Slider {...settings}>
                        <div className='blogs_img_slide_div'>
                        <img src="https://images.tv9hindi.com/wp-content/uploads/2022/03/Holi-in-Mathura-Vrindavan-Barsana.jpg" alt="" />
                        </div>
                        <div className='blogs_img_slide_div'>
                        <img src="https://media.istockphoto.com/id/471366604/photo/portrait-of-indian-woman-with-colored-face-dancing-during-holi.jpg?s=612x612&w=0&k=20&c=5_yqVtsM5O6Vc9dhenmWU5eB3E5j0DDsiJhjhwV7hN4=" alt="" />
                        </div>
                        <div className='blogs_img_slide_div'>
                        <img src="https://www.spectralhues.com/wp-content/uploads/2016/03/vrindavan.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default BlogDescription;