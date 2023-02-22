import React from "react";
import Header from "../components/Header";
import BottomPage from "../components/BottomPage";
import { Box } from "@mui/system";
import { Grid, Typography, Container, Button, CardMedia } from "@mui/material";
import {BiHeart, BiSend, BiLike, BiCheckCircle} from 'react-icons/bi';
import {BsStar, BsStarFill, BsStarHalf} from 'react-icons/bs';
import { makeStyles } from '@mui/styles';
import SelectionTab from "../components/SelectionTab";



const useStyles = makeStyles({  
    imageContainer: {
        height: '450px',
        width: '780px',
        backgroundColor: '#E5E7EB',
    },
});

export default function Prestation() {

    const classes = useStyles();

    const [isPresentation, setIsPresentation] = React.useState(true);
    const [isFAQ, setIsFAQ] = React.useState(false);
    const [isAvis, setIsAvis] = React.useState(false);
    const [photo, setPhoto] = React.useState("https://picsum.photos/1000/1000");


    //récupérer les infos de la prestation par l'appel de l'API avec l'id de la prestation
    //afficher les infos de la prestation
    function getPrestationById(){
        //Récupération des données de l'API en fournissant l'id de la prestation
        fetch("http://localhost:3000/api/prestations/:id")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            }
        );
    }

    function getResultatAvis(){
            return (
                <Grid item>
                    <Typography variant="body1" >98% d'avis positifs</Typography>
                </Grid>
            );
    
    }

    function afficherCaracteristique(){
        return(
                    <Grid container spacing={1}>
                        <Grid item>
                            <BiCheckCircle size={20} />
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" >Caractéristique</Typography>
                        </Grid>
                    </Grid>
        );
    }

    const notes = (note) => {
        let stars = [];
        for (let i = 0; i < note; i++) {
    
            stars.push(<BsStarFill />);
        }
        if (note % 1 !== 0) {
            if(stars.length < 5){
                stars.push(<BsStarHalf />);
            }
        }
        for (let i = 0; i < 3 - note; i++) {
            if(stars.length < 5){
                stars.push(<BsStar />);
            }
        }
        return stars;
    }

    function clickPresentation(){
        setIsPresentation(true);
        setIsFAQ(false);
        setIsAvis(false);
    }

    function clickFAQ(){
        setIsPresentation(false);
        setIsFAQ(true);
        setIsAvis(false);
    }

    function clickAvis(){
        setIsPresentation(false);
        setIsFAQ(false);
        setIsAvis(true);
    }

    function afficherContenu(){
        if(isPresentation){
            return (
                <Grid container margin={'20px 0px 20px 0px'}>
                    <Grid container direction='column' xs={9}>
                        <Grid item>
                        <div className={classes.imageContainer}>
                            <CardMedia
                            component="img"
                            height="100%"
                            image={photo}
                            alt="prestation"
                            />
                        </div>
                        </Grid>
                        <Grid container>
                            <Typography variant="body1" >selection galerie</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" >Description</Typography>
                            <Typography variant="body1" >Lorem ipsum dolor sit amet consectetur. Tortor vulputate arcu eu id nec et. Et ornare blandit risus dolor. Feugiat egestas diam sapien congue praesent. Praesent ultrices mi proin ipsum morbi et suspendisse interdum. Arcu vulputate morbi phasellus ullamcorper magna velit massa donec. </Typography>
                            <Typography variant="body1"> Dolor augue aliquet diam nisl volutpat viverra orci turpis. In commodo nulla platea blandit. Arcu consectetur ut ut semper. Nunc consequat quis urna tincidunt.</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" >Caractéristique</Typography>
                            {afficherCaracteristique()}
                            {afficherCaracteristique()}
                            {afficherCaracteristique()}
                            {afficherCaracteristique()}
                        </Grid>
                    </Grid>
                    <Grid container direction='column' xs={3}>
                    <Grid item>
                            <Typography variant="body1" sx={{fontWeight:700}} >Vérifiez votre date et lieu</Typography>
                        </Grid>
                        <Grid container>
                            <Typography variant="body1" >selection galerie</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" >Description</Typography>
                            <Typography variant="body1" >Lorem ipsum dolor sit amet consectetur. Tortor vulputate arcu eu id nec et. Et ornare blandit risus dolor. Feugiat egestas diam sapien congue praesent. Praesent ultrices mi proin ipsum morbi et suspendisse interdum. Arcu vulputate morbi phasellus ullamcorper magna velit massa donec. </Typography>
                            <Typography variant="body1"> Dolor augue aliquet diam nisl volutpat viverra orci turpis. In commodo nulla platea blandit. Arcu consectetur ut ut semper. Nunc consequat quis urna tincidunt.</Typography>
                        </Grid>
                        <Grid item>
                        </Grid>
                    </Grid>
                </Grid>
            );
        }

        else if(isFAQ){
            return (
                <Grid item>
                    <Typography variant="body1" >FAQ</Typography>
                </Grid>
            );
        }
        else if(isAvis){
            return (
                <Grid item>
                    <Typography variant="body1" >Avis</Typography>
                </Grid>
            );
        }
        //afficher le contenu de la prestation
        //Si le bouton Présentation est cliqué, afficher la présentation de la prestation
        //Si le bouton FAQ est cliqué, afficher la FAQ de la prestation
        //Si le bouton Avis est cliqué, afficher les avis de la prestation
    }

    return (
        <>
        <Box sx={{background:"white"}}>
            <Header />
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%", margin:'50px 0px 30px 0px'}}>
                <Container>
                    <Grid container alignItems='center' spacing={'10px'} margin={'0px 0px 20px 0px'}>
                        <Grid item >
                            <Typography variant="h4" fontWeight={500} fontSize={'28px'}>Titre de la prestation</Typography>
                        </Grid>
                        <Grid item>
                            <BiHeart size={30}/>
                        </Grid>
                        <Grid item>
                            <BiSend size={30}/>
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' spacing={'10px'} margin={'0px 0px 30px 0px'}>
                        <Grid item>
                            <BiLike size={30}/>
                        </Grid>
                        <Grid item>
                            {getResultatAvis()}
                        </Grid>
                        <Grid item>
                            {notes(4.01)}
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' spacing={'10px'}>
                        <Button onClick={clickPresentation}>
                            Présentation
                        </Button>
                        <Button onClick={clickFAQ}>
                            FAQ
                        </Button>
                        <Button onClick={clickAvis}>
                            Avis
                        </Button>
                    </Grid>
                </Container>
                <Container>
                {afficherContenu()}
                </Container>
            </Box>
            <h1 style={{textAlign:'center'}}>Page en cours de développement</h1>
            <SelectionTab />
            <BottomPage />
        </Box>
        </>
    )
}