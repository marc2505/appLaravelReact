import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import NavBar from '../../components/NavBar'
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { Link } from '@mui/material';
import HomeResearchTab from '../../components/HomeResearchTab';
import SelectionTab from '../../components/SelectionTab';


const useStyles = makeStyles({
  container: {
    position: 'absolute',
    height: '520px',
    backgroundColor: '#E5E7EB',
    //flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '36px',
    textAlign: 'center',
    marginTop: '180px',
  },
  para: {
    justifyContent: 'center',
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '30px',
    marginLeft: '30%',
    marginRight: '30%',
  },
});


export default function Home() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <HomeResearchTab />
      <SelectionTab />
    </>
  )
}
