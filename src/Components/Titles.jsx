import React from 'react';
import './Styles/Titles.css'
function Titles({title}) {
    return (
        <div className='titles_main'>
            <h1>{title}</h1>
            <h2>{title}</h2>
        </div>
    );
}

export default Titles;