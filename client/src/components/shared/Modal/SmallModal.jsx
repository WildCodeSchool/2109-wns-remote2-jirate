import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

// step 2 récuperer l'id du projet
// step 3 requête (axios) get project
// step 4 update fields for project
// step 5 mise à jour du projet

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  height: '75%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

const StyledButtonSubmit = {
  backgroundColor: '#000000',
  color: '#ffffff',
  width: '180px',
  height: '52px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#000000',
    color: '#fffffff',
  },
};

const containerInput = {
  margin: '2rem 0 2rem 0',
};

const SmallModal = ({ isOpen, handleClose, id, name }) => {
  const [inputName, setInputName] = useState(name);
  const [limitMembers, setLimitMembers] = useState(0);
  // const [description, setDescription] = useState('');

  useEffect(() => {
    setInputName(name);
  }, [name]);

  return (
    <Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-edit-project" aria-describedby="modal-edit-project">
      <Box sx={style}>
        <Typography sx={{ textAlign: 'center', textTransform: 'uppercase' }} id="modal-modal-title" variant="h6" component="h2">
          Edit Project
        </Typography>
        <Box sx={{ padding: '4rem 10px' }}>
          <Box sx={containerInput}>
            <TextField
              value={inputName}
              onChange={e => setInputName(e.target.value)}
              id="outlined-basic"
              label="Nom du projet"
              variant="outlined"
              id="inputName"
              fullWidth
            >
              Nom du projet
            </TextField>
          </Box>
          <Box sx={containerInput}>
            <InputLabel id="demo-simple-select-label" fullWidth>
              Age
            </InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={limitMembers} onChange={e => e.target.value} fullWidth>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </Box>
          <Box sx={containerInput}>
            <TextField id="outlined-basic" label="Nom du projet" variant="outlined" fullWidth>
              Nom du projet
            </TextField>
          </Box>
          <Button variant="contained" sx={StyledButtonSubmit}>
            Update Project
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SmallModal;
