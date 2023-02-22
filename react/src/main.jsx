import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './contexts/ContextProvider'
import './index.css'
import router from './router';
import {ThemeProvider, createTheme} from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#111827',
    },
    secondary: {
      main: '#E5E7EB',
    },
  },
  background: {
    default: '#FFFFFF',
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    subtitle1: {
      color: '#9CA3AF',
      fontSize: '1rm',
      fontWeight: 500,
      '&:hover': {
        transition: '300ms',
        color: '#9CA3AF',
        textDecoration: 'none',
      },
    },
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '0.5rem 1rem',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          color: '#9CA3AF',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={theme} >
        <RouterProvider router={router} />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>,
)
