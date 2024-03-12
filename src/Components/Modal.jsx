import React from 'react';

// Material Ui 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styled} from '@mui/material/styles'

function ModalComp({alert,message,modalopen,Setmodalopen}) {
    const handleClose = () => Setmodalopen(false);

    // Modal Style
    const modalstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300, 
        height:150,
        bgcolor: 'background.paper',
        boxShadow: 'none',
        borderRadius: '8px',
        p: 4,
        
      };

    return (
        <Modal
        open={modalopen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // BackdropProps={{invisible: true}}
        >
        <Box sx={modalstyle}>
            <Button onClick={handleClose} style={{ 'position': 'absolute', 'top': 0, 'right': 0 }}>
                Close
            </Button>
            <img src='https://i.pinimg.com/originals/d4/30/d3/d430d3a4fb655ed62d6ea44004b71a2f.gif' alt="Small Img" style={{ width: '20%', maxWidth: 200, display: 'block', margin: '0 auto', borderRadius: 8 }} />
                <Typography variant="body1" component="p" style={{textAlign:'center',fontSize:'20px',fontWeight:'700'}}>
                   {alert}
                 </Typography>
                <Typography variant="body1" component="p" style={{textAlign:'center',color:'gray'}}>
                {message}
                </Typography>
        </Box>
        </Modal>
    );
}

export default ModalComp;