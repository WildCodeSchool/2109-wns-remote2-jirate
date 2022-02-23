import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

let valeurs = Array.from(Array(15).keys());

export default function ChampFormCreateProject() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        p: 5,
        m: 5,
        bgcolor: 'background.paper',
        borderRadius: 1,
        width: '50%'
      }}
    >

    <Box sx={{ mt: 4, mb: 8, width:'100%'}}>
      <h3 style={{ color:'rgb(99, 115, 129)', fontfamily:'"Public Sans", sans-serif' }}>Nom du projet</h3>
      <TextField id="outlined-basic" label="Nom du projet" variant="outlined" fullWidth >Nom du projet</TextField>
    </Box>
    
    <Box sx={{ mt: 4, mb: 8, width:'100%'}} >
    <InputLabel id="demo-simple-select-label">
      <h3>Nombre de collaborateurs</h3>
    </InputLabel>
      <NativeSelect
        defaultValue={1}
        inputProps={{
          id: 'demo-simple-select-label-native',
        }}
        fullWidth
        >
        {valeurs.map(index => (
          <option value={index}>{index}</option>
          ))}
      </NativeSelect>
    </Box>
      
    <Box sx={{ mt: 4, mb: 3, width:'100%'}} >
      <h3 style={{ color:'rgb(99, 115, 129)', fontfamily:'"Public Sans", sans-serif' }}>Description de votre projet<br/></h3>
      <p style={{ paddingBottom: 10}}>(étapes, goals, grandes lignes...)</p>
        <TextField 
          id="outlined-multiline-static"
          label="Description du projet"
          multiline
          rows={10}
          variant="outlined"
          fullWidth
        />
    </Box>

    <Box sx={{ mb: 3, width:'100%'}}>
      <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      /> Créer le lien d'invitation
    </Box>  


      <Box>
        <Button
          variant="contained"
          sx={{width: '120%'}}>
          Créer le projet
        </Button>
      </Box>
 
    </Box>
  );
}