import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Container, Link, Stack, MenuItem} from '@mui/material';

const useStyles = makeStyles({  

});

export default function BottomPage(props)  {

    const classes = useStyles();
    
    return (
        <>
        <Container sx={{  marginTop:'100px', marginBottom:'40px'}}>
            <Grid container direction='row' columns={{xs:4, sm:8, md:12}} sx={{borderTop:1, borderColor:'#9CA3AF', pt:'20px'}}>
                <Grid item xs>
                    <Grid container direction='column'>
                        <Grid item xs>
                            <Typography variant="h4" fontWeight={700} fontSize={"18px"}>Sparkling</Typography>
                        </Grid> 
                        <Grid item sm={2}>
                            <Typography gutterBottom variant="body2" sx={{lineHeight:'32px',fontWeight:'500', color:'#9CA3AF'}}>Copyright 2023 Sparkling</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}> 
                    <Grid container direction='row'>
                        <Grid item xs={2.5} md={1.3}>
                            <Link href='/Search' variant="subtitle1" sx={{lineHeight:'24px', minWidth:'120px', textDecoration:'none'}}>Prestations</Link>
                        </Grid>
                        <Grid item xs={3.1} sm={1.4}>
                            <Link href='/prestataires' variant="subtitle1" sx={{lineHeight:'24px', textDecoration:'none'}}>Prestataires</Link>
                        </Grid>
                        <Grid item xs={2} md={1.3}>
                            <Link href='/propos' variant="subtitle1" sx={{lineHeight:'24px', textDecoration:'none'}}>À propos</Link>
                        </Grid>
                        <Grid item xs={2} md={1.3}>
                            <Link href='/contact' variant="subtitle1" sx={{lineHeight:'24px', textDecoration:'none'}}>Contact</Link>
                        </Grid>
                        <Grid container xs justifyContent='flex-end'>
                            <Link href="/login" variant="subtitle1" sx={{lineHeight:'24px', textDecoration:'none'}}>Se connecter</Link>
                        </Grid>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid xs={2.5} md={1.3}>
                            <Link href='/impressum' variant="subtitle1" sx={{lineHeight:'32px', textDecoration:'none'}}>Impressum</Link>
                        </Grid>
                        <Grid xs={4} sm={1.7}>
                            <Link href='/policy' variant="subtitle1" sx={{lineHeight:'32px', textDecoration:'none'}}>Privacy policy</Link>
                        </Grid>
                </Grid>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
