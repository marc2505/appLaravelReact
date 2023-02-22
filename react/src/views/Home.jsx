import React from 'react'
import { Box } from '@mui/material'
import HomeResearchTab from '../components/HomeResearchTab'
import Header from '../components/Header'
import SelectionTab from '../components/SelectionTab'
import SelectionEventType from '../components/SelectionEventType'
import SelectionBestPrestataire from '../components/SelectionBestPrestataire'
import FonctionnementSparkling from '../components/FonctionnementSparkling'
import BottomPage from '../components/BottomPage'


export default function Home() {
  return (
    <>
      <Box style={{background:'white'}}>
        <Header/>
        <HomeResearchTab />
        <SelectionTab />
        <SelectionEventType />
        <SelectionBestPrestataire />
        <FonctionnementSparkling />
        <BottomPage />
      </Box>
    </>
  )
}
