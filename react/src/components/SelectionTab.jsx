import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
import { Stack, Link, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import CartePrestation from './CartePrestation';
import { random } from 'lodash';

const useStyles = makeStyles({  
    btn: {
        fontFamily: 'Roboto, sans-serif',
        color: '#D1D5DB',
        backgroundColor: '#ffffff',
        padding: '10px',
        border: 'solid #D1D5DB 2px',
        boxShadow: 'rgb(0, 0, 0) 0px 0px 0px 0px',
        borderRadius: 1,
        transition: '410ms',
        transform: 'translateY(0)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          transition: '410ms',
          padding: '10px',
          transform: 'translateY(-2px)',
          backgroundColor: '#fff',
          color: '#000000',
          border: 'solid 2px #000000',
        },
    },
});

export default function SelectionTab()  {

    const classes = useStyles();

        //Nb limite d'affichage de cartes de prestation
        const nbAffichageMax = 4;

        let nvList = [];
    
        //Méthode pour créer une liste de prestations à afficher
        const createCards = (nb) => {
            nvList = [];
            for (let i = 0; i < nb; i++) {
                const nvObj = {
                    id: i,
                    titre: "Prestation" + i,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "https://picsum.photos/200/300",
                    categorie: "Anniversaire",
                    lieu: "Genève",
                    note: random(0, 5, true),
                };
                nvList.push(nvObj);
            }
            console.log(nvList);
        };
    
        //créer une constante qui stock une liste d'objets prestations
        createCards(nbAffichageMax)

    return (
        <>
        <Container xl>
            <Grid container mt={'54px'}>
                <Grid container lg={12}>
                    <Typography variant='h5' gutterBottom>Notre sélection</Typography>
                </Grid>
                <Grid container md={12} mt={'10px'} mb={'30px'}>
                    <Grid container xs={12} md={7} spacing={1}>
                        <Grid item>
                            <Link href="/Search?type=Anniversaire" style={{textDecoration:'none'}}>
                            <button className={classes.btn}>Anniversaire</button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/Search?type=Cuisineitalienne" style={{textDecoration:'none'}}>
                            <button className={classes.btn}>Cuisine italienne</button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/Search?type=Musicien" style={{textDecoration:'none'}}>
                            <button className={classes.btn}>Musicien</button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/Search?type=Nettoyage" style={{textDecoration:'none'}}>
                            <button className={classes.btn}>Nettoyage</button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/Search?type=Servicetraiteur" style={{textDecoration:'none'}}>
                            <button className={classes.btn}>Service traiteur</button>   
                            </Link> 
                        </Grid>
                    </Grid>
                    <Grid container xs={12} md={5} justifyContent='flex-end' alignItems="center">
                        <Grid item>
                            <Link href="/prestations" style={{fontSize:'12px', textDecoration:'none', alignSelf:'center', color:'black'}}>Voir toutes les prestations</Link>
                        </Grid>
                        <Grid item>
                            <IconButton href='/Favories' size='large' ><BiLeftArrowAlt fontSize='large'/></IconButton>
                        </Grid>
                        <Grid item> 
                            <IconButton href='/Panier' size='large'><BiRightArrowAlt fontSize='large'/></IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                    <Grid container justifyContent='center' columnSpacing={'10px'} rowSpacing={'20px'}>
                        {nvList.map(function(d, idx){
                            return (
                                <Grid item>
                                    <CartePrestation prestation={d}/>
                                </Grid>
                            );
                        })}
                    </Grid>

            </Grid>

        </Container>

        </>
    );
}
