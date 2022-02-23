import * as React from 'react';
import {  Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ChampFormCreateProject from '../../elements/ChampFormCreateProject';
import Divider from '@mui/material/Divider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '75%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: 'flex',
};

const Span = {

}

const StyledButton = {
  backgroundColor: '#000000',
  color: '#ffffff',
  width: '180px',
  height: '52px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#000000',
    color: '#fffffff',
}};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div>
      <Button variant="contained" sx={{...StyledButton}} onClick={handleOpen}>Create a project</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ChampFormCreateProject />

          <Divider orientation="vertical" flexItem />
          
          <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 5,
          m: 5,
          bgcolor: 'background.paper',
          borderRadius: 1,
          width: '50%'
        }}>hey</Box>
        </Box>
      </Modal>
    </div>
  );
}
