import React, {Fragment, useState} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddItem = ({getCurrentText, defaultValue=""}) =>{
    const [textInput, setTextInput] = useState(defaultValue)
    console.log(defaultValue)
    return(
        <Fragment>
             <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                value={textInput}
                onChange={(event)=>setTextInput(event.target.value)}
                />
               <Button variant="contained" onClick={()=>getCurrentText(textInput)}>Agregar</Button>
        </Fragment>
       
    )

}

export default AddItem