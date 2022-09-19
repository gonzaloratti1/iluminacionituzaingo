import React from 'react'
import { AppBar, Menu, MenuItem, Toolbar, Typography, Button, Box } from '@mui/material'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { yellow } from '@mui/material/colors';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/stack'
import Home from "../pages/Home"
import { useState } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const color = yellow[500]
const colorMain = "#212121"
const buttonBG = {
  background: " #9e9e9e"
}


const NavbarComponent = () => {

  const [ filterId, setFilterId] = useState()

  const handleClickFilter  = ( e ) => {
    setFilterId( e )
  }

  


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ backgroundColor: color}} >
      <Toolbar>
     <Link to='/'><TipsAndUpdatesIcon  style={{ color: colorMain}}/></Link>
        <Typography variant="h4" component="div" color='black' sx={{ flexGrow: 1 }} marginLeft={2}>
          Iluminacion Ituzaingo
        </Typography>

        <Stack direction='row' spacing={1} marginRight={100}>
          <Link  to="/category/10" onClick={(e => handleClickFilter( "10" ))}><Button>
            <Typography color='black'>LAMPARAS</Typography>
          </Button></Link>

          <Link to='/category/3'><Button>
            <Typography color='black'>INTERIOR</Typography>
          </Button></Link>

         <Link  to='/category/2'><Button>
            <Typography color='black'>EXTERIOR</Typography>
          </Button></Link>
        </Stack>
        <LocalMallIcon style={{ color: 'black', marginRight:'25px'}}></LocalMallIcon>
      </Toolbar>
    </AppBar>
  </Box>

  )
}

export default NavbarComponent