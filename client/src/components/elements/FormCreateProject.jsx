import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';

let valeurs = Array.from(Array(15).keys());

const style = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexDirection: 'column',
  pl: 3,
  pr: 7,
  bgcolor: 'background.paper',
  borderRadius: 1,
  width: '50%',
};

const StyledButtonSubmit = {
  backgroundColor: '#0047FC',
  color: '#ffffff',
  width: '280px',
  height: '52px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#0047FC',
    color: '#FFFFFF',
  },
};

const FormCreateProject = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={style}>
      <Box sx={{ mt: 1, mb: 1, width: '100%' }}>
        <TextField id="outlined-basic" label="Nom du projet" variant="outlined" fullWidth>
          Nom du projet
        </TextField>
      </Box>

      <Box sx={{ mt: 1, mb: 1, width: '100%' }}>
        <InputLabel id="label-number-members">Nombre de personnes maximum</InputLabel>
        <Select id="demo-simple-select" labelId="label-number-members" fullWidth>
          {valeurs.map(el => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box sx={{ mt: 1, mb: 1, width: '100%' }}>
        <TextField id="outlined-multiline-static" label="Description du projet" multiline rows={10} variant="outlined" fullWidth />
      </Box>

      <Box sx={{ mb: 1, mt: 1, width: '100%' }}>
        <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} /> Créer le lien d'invitation
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Button variant="contained" sx={StyledButtonSubmit}>
          Créer le projet
        </Button>
      </Box>
    </Box>
  );
};

export default FormCreateProject;
