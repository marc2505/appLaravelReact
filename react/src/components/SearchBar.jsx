import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { Link, Typography} from '@mui/material';




export default function HomeResearchTab() {

    return (
        <>
        <div style={{background:'#E5E7EB'}}>
          <Container>
            <Grid container lg={12} sx={{padding:'30px 0px 30px 0px' }}>
                <Grid item>
                <TextField id="rechercheOccasionType" label="Pour quelle occasion ?" variant="outlined" size="small" sx={{background:'white'}}/>
                </Grid>
                <Grid item>
                <TextField id="rechercheOccasionDate" label="Choisir une date" variant="outlined" size="small" sx={{background:'white'}} />
                </Grid>
                <Grid item>
                <TextField id="rechercheOccasionLieu" label="Lieu" variant="outlined" size="small" sx={{background:'white'}}/>
                </Grid>
                <Grid item>
                <Button variant="contained" sx={{backgroundColor: '#111827', color: '#FFFFFF'}}>Rechercher</Button>  
                </Grid>
            </Grid>
          </Container>
        </div>
        </>
      )
}