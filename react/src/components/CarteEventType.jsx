import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardActions, CardMedia, CardActionArea, Typography, Button } from '@mui/material';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";


const useStyles = makeStyles({  
    imageContainer: {
        height: '140px',
        width: '280px',
        backgroundColor: '#E5E7EB',
    },
});

const handleClick = (id) => {
    console.log(id);
}

export default function CartePrestation(props)  {

    const classes = useStyles();

    return (
        <>
        <Card sx={{ maxWidth: 280, maxHeight:200 }}>
        <CardActionArea onClick={handleClick(1)}>
            <div className={classes.imageContainer}>
            </div>
            <CardContent>
            <Typography gutterBottom variant="h4" sx={{ fontSize: 18 }} component="div">
                {props.title}
            </Typography>

            </CardContent>
        </CardActionArea>
        </Card>
        </>
    )
}
