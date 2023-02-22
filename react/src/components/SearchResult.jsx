import React from "react";
import { useState } from "react";
import { Grid, Container, Typography, Button} from "@mui/material";
import CartePrestation from "./CartePrestation";
import { random } from "lodash";
import { useEffect } from "react";
import { StyleSheetManager } from "styled-components";


export default function SearchResult() {

    //Méthode pour récupérer les données des prestations de l'API
    const getEvents = () => {
        //Récupération des données de l'API
        fetch("http://localhost:3000/api/prestations")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    let nvList = [];
    const [component, setComponent] = useState([nvList]);
    const [nbMax, setNbMax] = useState(20);


    //-----------------------------------------------------------------------------


    //Nb limite d'affichage de cartes de prestation
    let nbCartes = 40;




    //Méthode pour créer une liste de prestations à afficher
    function createCards(nbCartes){
        //nvList = [];
        for (let i = 0; i < nbCartes; i++) {
            const nvObj = {
                titre: "Prestation" + i,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: "https://picsum.photos/500/500",
                categorie: "Anniversaire",
                lieu: "Genève",
                note: random(0, 5, true),
            };
        nvList.push(nvObj);
        }

        //setIsModified(true);
    };


    //créer une constante qui stock une liste d'objets prestations
    createCards(nbCartes)
    console.log(component[0][0]);

    const handleClick = () => {
        setNbMax(nbMax + 4);
        createCards(nbMax);
        setComponent([nvList]);
    };
    //-----------------------------------------------------------------------------


    return (
        <>
            <Container>
                <Grid container>
                    <Typography variant="h4" component="h1" padding={'50px 0px 20px 0px'}>
                        Résultats de la recherche
                    </Typography>
                </Grid>
                <Grid container>
                    
                </Grid>
            </Container>
            <Container>
                <Grid container justifyContent='center' columnSpacing={'10px'} rowSpacing={'20px'}>
                    {createCards(nbCartes)}
                    {component[0].map(function (d, idx) {
                        if(idx < nbMax){
                            return (
                                <Grid item>
                                    <CartePrestation prestation={d} />
                                </Grid>
                            );
                        }
                    }
                    )}

                </Grid>
            </Container>
            <Container>
              <Grid>
                <Button variant="contained" color="primary" onClick={() => handleClick()} sx={{margin:'20px 0 0 0'}}>
                    Voir plus
                </Button>
              </Grid>
            </Container>
        </>
    );
}
