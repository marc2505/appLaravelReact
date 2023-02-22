import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardActions, CardMedia, CardActionArea, Typography, Button } from '@mui/material';
import { BsMusicNoteList, BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const useStyles = makeStyles({  
    imageContainer: {
        height: '140px',
        width: '280px',
        backgroundColor: '#E5E7EB',
    },
});


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

//Méthode similaire à notes() mais n'affiche que 5 étoiles maximum même si la note est supérieure



export default function CartePrestation(props)  {

    const classes = useStyles();

    return (
        <>
        <Card sx={{ maxWidth: 280 }}>
        <CardActionArea href={'/prestation?id=' + props.prestation.id}>
            <div className={classes.imageContainer}>
                <CardMedia
                component="img"
                height="140"
                image={props.prestation.image}
                alt="green iguana"
                />
            </div>
            <CardContent>
            <Typography gutterBottom variant="h4" sx={{ fontSize: 18 }} component="div">
                {props.prestation.titre}
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                {props.prestation.categorie} - {props.prestation.lieu}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.prestation.description}
            </Typography>
                {notes(props.prestation.note)}
            </CardContent>
        </CardActionArea>
        </Card>
        </>
    )
}
