import React from 'react'
import { AppBar, Menu, MenuItem, Toolbar, Typography, Button, Box } from '@mui/material'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { yellow } from '@mui/material/colors';
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/stack'

const color = yellow[500]
const colorMain = "#212121"

const center ={
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  float: 'center'
}

const NavbarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ backgroundColor: color}} >
      <Toolbar>
      <TipsAndUpdatesIcon  style={{ color: colorMain}}/>
        <Typography variant="h4" component="div" color='black' sx={{ flexGrow: 1 }} marginLeft={2}>
          Iluminacion Ituzaingo
        </Typography>
        <Stack direction='row' spacing={2} marginRight={70}>
          <Button>
            <Typography color='black'>LAMPARAS</Typography>
          </Button>
          <Button>
            <Typography color='black'>INTERIOR</Typography>
          </Button>
          <Button>
            <Typography color='black'>EXTERIOR</Typography>
          </Button>
        </Stack>
        <Button color="inherit">
          <Typography color='black'>
            INGRESAR
          </Typography>
        </Button>
        <Button color="inherit">
          <Typography color='black'>
            REGISTRARSE
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  </Box>

  )
}

export default NavbarComponent