import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { Link } from '@mui/material';

const useStyles = makeStyles({
    container: {
      position: 'absolute',
      height: '520px',
      backgroundColor: '#E5E7EB',
      //flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: '36px',
      textAlign: 'center',
      marginTop: '180px',
    },
    para: {
      justifyContent: 'center',
      fontSize: '14px',
      textAlign: 'center',
      marginTop: '30px',
      marginLeft: '30%',
      marginRight: '30%',
    },
  });


export default function HomeResearchTab() {
    const classes = useStyles();
    return (
        <>
          <Container className={classes.container} maxWidth="full" color="#E5E7EB">
            <p className={classes.title}>Trouvez une prestation pour votre évènement</p>
            <p className={classes.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Container >
            <Grid style={{textAlign:'center', marginTop:'30px'}}>
                <TextField id="rechercheOccasionType" label="Pour quelle occasion ?" variant="outlined" size="small" style={{width: '300px'}}/>
                <TextField id="rechercheOccasionDate" label="Choisir une date" variant="outlined" size="small" style={{width: '200px'}}/>
                <TextField id="rechercheOccasionLieu" label="Lieu" variant="outlined" size="small" style={{width: '200px'}}/>
                <Button variant="contained" style={{backgroundColor: '#111827', color: '#FFFFFF', width: '125px'}}>Rechercher</Button>  
                <Grid style={{textAlign:'center', width:'675px'}}>
                  <p style={{color:'#9CA3AF', fontSize:'12px'}}>Exemples: 
                  <Link href="/Search?type=Anniversaire" style={{textDecoration:'none', color:'#9CA3AF'}}> <u>Anniversaire</u></Link>,
                  <Link href="/Search?type=Clown" style={{textDecoration:'none', color:'#9CA3AF'}}> <u>Clown</u></Link>,
                  <Link href="/Search?type=Mariage" style={{textDecoration:'none', color:'#9CA3AF'}}> <u>Mariage</u></Link>,
                  <Link href="/Search?type=Concert" style={{textDecoration:'none', color:'#9CA3AF'}}> <u>Concert</u></Link>,
                  <Link href="/Search?type=Photographe" style={{textDecoration:'none', color:'#9CA3AF'}}> <u>Photographe</u></Link>
                  </p>
                </Grid>
            </Grid>
            </Container>
          </Container>
        </>
      )
}