import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Container, Stack, Grid } from '@mui/material';
import CartePrestataire from './CartePrestataire';
import IconButton from '@mui/material/IconButton';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Link from '@mui/material/Link';
import CarteFAQ from './CarteFAQ';

const useStyles = makeStyles({  

});

export default function FonctionnementSparkling()  {

    const classes = useStyles();

    return (
        <>
            <Container >
                <Grid container mt='100px' >
                    <Grid container  display="flex" justifyContent="center">
                        <Grid container display="flex" justifyContent="flex-start">
                            <Typography variant="h5" gutterBottom >Comment fonctionne Sparkling</Typography>
                        </Grid>
                    </Grid>
                    <Grid container columns={{xs:4, sm:8 }} columnSpacing='5px' rowSpacing='20px' display="flex" alignItems="center" justifyContent="center" >
                        <Grid item >
                            <CarteFAQ title='Vous organisez un évènement'/>
                        </Grid>
                        <Grid item>
                            <CarteFAQ title='Des prestataires à votre service'/>
                        </Grid>
                        <Grid item>
                            <CarteFAQ title='La combinaison gagnante'/>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
