import React from 'react';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({  
    root: {
        position: 'absolute',
        width: '100%',
        height: '80px',
    }
});

export default function SelectionTab()  {

    const classes = useStyles();

    return (
        <>
        <p>Notre Selection</p>
        </>
    )
}
