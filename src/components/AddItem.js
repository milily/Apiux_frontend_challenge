import React, {Fragment} from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AddItem = () =>{
    return(
        <Fragment>
             <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                />
               <Button variant="contained">Contained</Button>
        </Fragment>
       
    )

}

export default AddItem