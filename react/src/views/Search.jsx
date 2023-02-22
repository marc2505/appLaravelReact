import React from 'react'
import { Box, Typography } from '@mui/material'
import Header from '../components/Header'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import SearchResult from '../components/SearchResult'
import BottomPage from '../components/BottomPage'


export default function Search(props) {

  const [queryParameters] = useSearchParams()

  return (
    <>
      <Box sx={{background:'white'}}>
        <Header/>
        <SearchBar/>
        <SearchResult/>
        <BottomPage />
      </Box>
    </>
  )
}