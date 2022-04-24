import React, {Fragment} from "react";
import Grid from '@mui/material/Grid';
import AddItem from "./AddItem";
import ListItems from "./ListItems";
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from "../redux/actions";

const CardContainer = () => {
    const dispatch = useDispatch()
    const listItems = useSelector((state)=>state.list.items)
    console.log(listItems)

    const currentText = (text) =>{
        dispatch(addItem(text))
    }
    return(
        <Fragment>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={10}>
                    <AddItem
                        getCurrentText={currentText}
                    />
                    <ListItems
                        items={listItems}
                    />
                </Grid>
                
            </Grid>
            
        </Fragment>
       

    )
    
}

export default CardContainer