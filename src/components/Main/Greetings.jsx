import { Typography } from "@mui/material"

import React from "react"

const useStyles = {
   fontFamily :  'Raleway, Arial',
   textPosition: 'center',
   
}

export const Greetings = () => {
    return (
       <div> 
         <Typography style={ useStyles } variant='h3'  align="center">
            TIENDA
         </Typography>
       </div>
    )
 }
 
