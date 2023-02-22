import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardActions, CardMedia, CardActionArea, Typography, Button, Grid } from '@mui/material';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const useStyles = makeStyles({  
    imageContainer: {
        minHeight: '300px',
        height: '150px',
        maxWidth: '380px',
        backgroundColor: '#E5E7EB',
    },
});

export default function CarteFAQ(props)  {

    const classes = useStyles();

    return (
        <>
        <Grid container>
            <Card sx={{ minWidth:'300px', maxWidth:'380px', maxHeight:300 }}>
                <CardActionArea href='/prestation?id={prestationId}'>
                    <CardContent>
                    <Typography gutterBottom variant="h4" sx={{ fontSize: 18 }} component="div">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="body" sx={{ fontSize: 14 }} component="div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    </CardContent>
                    <div className={classes.imageContainer}></div>
                </CardActionArea>
            </Card>
        </Grid>
        </>
    )
}