import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { Link, Typography } from '@mui/material';




export default function HomeResearchTab() {

    return (
        <>
          <Grid container maxWidth="full" height='440px' maxHeight="full" backgroundColor="#E5E7EB" alignItems="center" justifyContent="center">
            <Grid container lg={10} justifyContent="center" rowSpacing={1}>
              <Grid item lg={12} textAlign="center">
                <Typography variant="h4" color="primary.main" fontSize={'36px'} fontWeight={500}>Trouvez une prestation pour votre événement</Typography>
              </Grid>
              <Grid item lg={4} textAlign="center" mt={'25px'} mb={'25px'}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Grid>
              <Grid container lg={10} alignItems="center" justifyContent="center" textAlign="center">
                <Grid>
                  <Grid item lg={12} textAlign='left'>
                    <TextField id="rechercheOccasionType" label="Pour quelle occasion ?" variant="outlined" size="small" sx={{background:'white'}}/>
                    <TextField id="rechercheOccasionDate" label="Choisir une date" variant="outlined" size="small" sx={{background:'white'}} />
                    <TextField id="rechercheOccasionLieu" label="Lieu" variant="outlined" size="small" sx={{background:'white'}}/>
                    <Button variant="contained" sx={{backgroundColor: '#111827', color: '#FFFFFF'}}>Rechercher</Button>  
                  </Grid>
                  <Grid item lg={12} textAlign='left'>
                    <p style={{color:'#9CA3AF', fontSize:'12px'}}>Exemples: 
                        <Link href="/Search?type=Anniversaire" style={{textDecoration:'none', color:'#9CA3AF'}}> <u>Anniversaire</u></Link>,
                        <Link href="/Search?type=Clown" style={{textDecoration:'none', color:'#9CA3AF'}}> <u>Clown</u></Link>,
                        <Link href="/Search?type=Mariage" style={{textDecoration:'none', color:'#9CA3AF'}}> <u>Mariage</u></Link>,
                        <Link href="/Search?type=Concert" style={{textDecoration:'none', color:'#9CA3AF'}}> <u>Concert</u></Link>,
                        <Link href="/Search?type=Photographe" style={{textDecoration:'none', color:'#9CA3AF'}}> <u>Photographe</u></Link>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )
}