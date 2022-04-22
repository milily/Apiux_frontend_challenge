import React, {Fragment, useState} from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AddItem = ({currentText}) =>{
    const [textInput, setTextInput] = useState("")
    
    return(
        <Fragment>
             <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                onChange={(event)=>setTextInput(event.target.value)}
                />
               <Button variant="contained" onClick={()=>currentText(textInput)}>Contained</Button>
        </Fragment>
       
    )

}

export default AddItem