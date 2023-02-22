import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardActions, CardMedia, CardActionArea, Typography, Button } from '@mui/material';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({  
    imageContainer: {
        marginTop: '10px',
        height: '120px',
        width: '120px',
        backgroundColor:' #bbb',
        borderRadius: '50%',
        display: 'inline-block',
    },
});

export default function CartePrestataire(props)  {

    const classes = useStyles();

    return (
        <>
            <Card sx={{ width: 220, height:240, border:'none', textAlign:'center'}}>
                <CardActionArea href='/prestataire?id={prestationId}'>
                    <CardContent>
                    <Avatar sx={{width:'120px', height:120, display: 'inline-block'}}></Avatar>
                    <Typography gutterBottom variant="h4" sx={{ fontSize: 18 }}>
                        Nom Prenom
                    </Typography>
                    <Typography gutterBottom variant="body2" sx={{ fontSize: 18 }}>
                        Titre
                    </Typography>
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}
