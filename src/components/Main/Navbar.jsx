import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { yellow } from '@mui/material/colors';


const color = yellow[500]
const colorMain = "#212121"





const NavbarComponent = () => {
  return (
    <>
   <AppBar position="sticky" style={{backgroundColor:color}}>
     <Toolbar>
     <TipsAndUpdatesIcon margin={3} style={{ color: colorMain}}  />
       <Typography variant="h4" margin={2}  color='black' align='center'>
         Iluminacion Ituzaingo
       </Typography>
      
     </Toolbar>
   </AppBar>
    </>
  )
}

export default NavbarComponent