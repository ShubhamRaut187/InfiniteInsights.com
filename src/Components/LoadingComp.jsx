import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Styles/LoadingComp.css'

function LoadingComp({message}) {
    return (
        <div className='loadingcomp_main'>
            <CircularProgress sx={{color:'#e78895'}}/>
            <h2>{message}...</h2>
        </div>
    );
}

export default LoadingComp;