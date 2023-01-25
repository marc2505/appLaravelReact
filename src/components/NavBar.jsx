import React from 'react';
import { useRef } from 'react';
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';
import {BiHeart} from 'react-icons/bi';
import {BiCartAlt} from 'react-icons/bi';
import { Button, IconButton } from '@mui/material';
import { Link } from '@mui/material';

const useStyles = makeStyles({
  root: {
    //position: 'absolute',
    width: '100%',
    height: '80px',
    left: '0px',
    top: '0px',
    background: '#FFFFFF',
    boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 20px'
  }
});

export default function NavBar() {

  const classes = useStyles();


  return (
    <>
    <div className={classes.root}>
      <h1>Sparkling</h1>
      <Stack direction="row" spacing={2} alignItems='left' marginLeft={'-40%'}>
        <Link href="/Search?type=Musique" color={'#111827'} style={{textDecoration:'none'}}>Musique</Link>
        <Link href="/Search?type=Cuisine" color={'#111827'} style={{textDecoration:'none'}}>Cuisine</Link>
        <Link href="/Search?type=Anniversaire" color={'#111827'} style={{textDecoration:'none'}}>Anniversaire</Link>
      </Stack>
      <Stack direction="row" spacing={1.5} alignItems='center'>
        <Link href="/Login" color={'#111827'} style={{textDecoration:'none'}} >Se connecter</Link>
        <IconButton href='/Favories' size='large' ><BiHeart fontSize='large'/></IconButton>
        <IconButton href='/Panier' size='large'><BiCartAlt fontSize='large'/></IconButton>
      </Stack>
    </div>
    </>
  )
}
