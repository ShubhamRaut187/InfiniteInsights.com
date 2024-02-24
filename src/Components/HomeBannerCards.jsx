import React from 'react';
import './Styles/HomeBannerCards.css'
function HomeBannerCards({Image,Title}) {
    return (
        <div className='hm_banner_card' style={{backgroundImage:`url(${Image})`}}>
           <div>
            <h1 className='hm_banner_title'>{Title}</h1>
            <button className='hm_banner_btn'>Read Blog</button>
           </div>
        </div>
    );
} 
export default HomeBannerCards;