import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Badge } from '@mui/material'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { yellow } from '@mui/material/colors';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/stack'
import { useState, useContext } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CartContext } from '../CartContext/CartContext';

const color = yellow[500]
const colorMain = "#212121" 


const NavbarComponent = () => {



  const { totalProducts} = useContext(CartContext)


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ backgroundColor: color}} >
      <Toolbar>
     <Link to='/'><TipsAndUpdatesIcon  style={{ color: colorMain}}/></Link>
        <Typography variant="h4" component="div" color='black' sx={{ flexGrow: 1 }} marginLeft={2}>
          Iluminacion Ituzaingo
        </Typography>

        <Stack direction='row' spacing={1} marginRight={90}>
          <Link  to="/category/Lamparas"><Button>
            <Typography color='black'>LAMPARAS</Typography>
          </Button></Link>

          <Link to='/category/Exterior'><Button>
            <Typography color='black'>INTERIOR</Typography>
          </Button></Link>

         <Link  to='/category/Interior'><Button>
            <Typography color='black'>EXTERIOR</Typography>
          </Button></Link>
        </Stack>
        <Badge badgeContent={totalProducts()} color="primary" marginRight={40}>
        <LocalMallIcon style={{ color: 'black'}} />
        </Badge>
      </Toolbar>
    </AppBar>
  </Box>

  )
}

export default NavbarComponent