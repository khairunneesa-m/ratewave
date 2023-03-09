import React from "react"
import TextField from '@mui/material/TextField';

export default function CustomInput(props){
    const {sx,...rest}=props;
    return(
        <TextField id="outlined-basic" label="Outlined"  variant="outlined" {...rest} 
        sx={{height:'30px',borderRadius:'4px',...sx}}/>
    )
}