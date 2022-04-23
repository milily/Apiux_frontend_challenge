import React, {Fragment} from 'react'
import { useDispatch} from 'react-redux'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem } from "../redux/actions";

const ListItems = ({index, value, labelId}) => {
    const dispatch = useDispatch()
    return(
       
        <ListItem
            secondaryAction={
                <Fragment>
                    <IconButton edge="end" aria-label="comments">
                        <CreateIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="comments" onClick={()=>dispatch(removeItem(index))}>
                        <DeleteIcon />
                    </IconButton>
                </Fragment>
            }
            
            disablePadding
        >
            <ListItemButton role={undefined}  dense>
            <ListItemIcon>
                <Checkbox
                edge="start"
                
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value} />
            </ListItemButton>
        </ListItem>
    )
    
}

export default ListItems