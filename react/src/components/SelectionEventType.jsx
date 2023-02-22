import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import CarteEventType from './CarteEventType';
import IconButton from '@mui/material/IconButton';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Link from '@mui/material/Link';



export default function SelectionEventType()  {


    return (
        <>
        <Container xl>
            <Grid container mt={'54px'} alignItems="center" >
                <Grid container lg={8}>
                    <Typography variant='h5' gutterBottom>Quel événement prévoyez-vous?</Typography>
                </Grid>
                <Grid container lg={4}  alignItems="center" justifyContent="flex-end">
                    <Grid item>
                        <Link href="/prestations" style={{fontSize:'12px', textDecoration:'none', alignSelf:'center', color:'black'}}>Voir toutes les catégories</Link>
                    </Grid>
                    <Grid item>
                        <IconButton href='/Favories' size='large' ><BiLeftArrowAlt fontSize='large'/></IconButton>
                    </Grid>
                    <Grid item> 
                        <IconButton href='/Panier' size='large'><BiRightArrowAlt fontSize='large'/></IconButton>
                    </Grid>
                </Grid>
                <Grid container direction='row' display="flex" justifyContent="space-between" mt={'30px'} rowSpacing='20px'>
                    <CarteEventType title='Musique' />
                    <CarteEventType title='Traiteur' />
                    <CarteEventType title='Spectacle' />
                    <CarteEventType title='Anniversaire' />
                </Grid>
            </Grid>
            </Container>
        </>
    )
}
