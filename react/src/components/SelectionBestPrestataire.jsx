import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Container, Stack, Grid } from '@mui/material';
import CartePrestataire from './CartePrestataire';
import IconButton from '@mui/material/IconButton';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Link from '@mui/material/Link';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';


const useStyles = makeStyles(({  
    stack: {
        position: 'relative',
        marginTop: '30px',
        alignItems: 'center',
        maxWidth: '1200px',
    },
}));

export default function SelectionBestPrestataire()  {

    const classes = useStyles();

    return (
        <>
        <Container xl>
            <Grid container mt={'54px'} alignItems="center">
                <Grid container lg={8}>
                    <Typography variant='h5' gutterBottom>Meilleurs prestataires</Typography>
                </Grid>
                <Grid container lg={4} alignItems="center" justifyContent="flex-end">
                    <Grid item>
                        <Link href="/prestations" style={{fontSize:'12px', textDecoration:'none', alignSelf:'center', color:'black'}}>Voir tous les prestataires</Link>
                    </Grid>
                    <Grid item>
                        <IconButton href='/Favories' size='large' ><BiLeftArrowAlt fontSize='large'/></IconButton>
                    </Grid>
                    <Grid item> 
                        <IconButton href='/Panier' size='large'><BiRightArrowAlt fontSize='large'/></IconButton>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between" mt={'30px'}>
                    <CartePrestataire/>
                    <CartePrestataire/>
                    <CartePrestataire/>
                    <CartePrestataire/>
                    <CartePrestataire/>
                </Grid>
            </Grid>
            </Container>
        </>
    )
}
