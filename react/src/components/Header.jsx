import React from 'react';
import {BiHeart} from 'react-icons/bi';
import {BiCartAlt} from 'react-icons/bi';
import { Button, IconButton, Grid, Container, Typography } from '@mui/material';
import { Link } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';


export default function Header() {

  const {token, setToken} = useStateContext();
  const isConnected = token ? true : false;
  const [mobileHeader, setMobileHeader] = useState(false);
  const match = useMediaQuery(theme => theme.breakpoints.down('md'));

  useEffect(() => {
    setMobileHeader(match);
  }, [match]); 
  
  return (
    <>
    <Grid container sx={{background:'white', boxShadow: 1}}>
      <Container>
        <Grid container height={80} alignItems="center">
          <Grid item xs={2}>
            <Link href="/" style={{fontWeight:700, fontSize:"18px", textDecoration:'none'}}>Sparkling</Link>
          </Grid>
          {!mobileHeader && (
            <Grid container direction="row" xs justifyContent="flex-start" alignItems="center">
            <Grid item xs={2}>
              <Link href="/Search" style={{textDecoration:'none'}} variant="subtitle1">Musique</Link>
            </Grid>
            <Grid item xs={2}>
              <Link href="/Search?type=Cuisine" style={{textDecoration:'none'}} variant="subtitle1">Cuisine</Link>
            </Grid>
            <Grid item xs={2}>
              <Link href="/Search?type=Anniversaire" style={{textDecoration:'none'}} variant="subtitle1">Anniversaire</Link>
            </Grid>
          </Grid>
          )}
          <Grid container item xs justifyContent="flex-end" alignItems="center">
              {!isConnected && (
                <Grid item sm={2.4} md={2.9} lg={2.4}>
                  <Link href="/Login" style={{textDecoration:'none'}} variant="subtitle1">Se connecter</Link>
                </Grid>
              )}
              {isConnected && (
                <Grid item sm={2.4} md={2.9} lg={2.4}>
                  <Link href="/Login" style={{textDecoration:'none'}} variant="subtitle1">Mon profil</Link>
                </Grid>
              )}
              <Grid item xs={1}>
                <IconButton href='/Favories'><BiHeart width={30} height={24}/></IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton href='/Panier'><BiCartAlt width={30} height={24}/></IconButton>
              </Grid>
          </Grid>
        </Grid>
      </Container>
      </Grid>
    </>
  )
}

