import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import NavBar from '../components/NavBar';

const primary = purple[500]; // #f44336

//Create handleOnClick function to redirect to home page
const handleOnClick = () => {
 window.location.href = '/home';
}


export default function NotFound() {
  return (
    <>
    <NavBar />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h1" style={{ color: 'black' }}>
        Erreur 404
      </Typography>
      <Typography variant="h6" style={{ color: 'black' }}>
        Oups. La page que vous recherchez n'existe pas encore.
      </Typography>
      <Button variant="contained" style={{background: 'grey'}} onClick={handleOnClick}>Retour à la page d'accueil</Button>
    </Box>
    </>
  );
}
