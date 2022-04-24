import React, {Fragment, useState} from 'react';
import { useDispatch} from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem, editItem } from "../redux/actions";
import AddItem from './AddItem';

const ListItems = ({index, value, labelId}) => {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch()
    const getCurrentText = (newText) => {
        dispatch(editItem(index, newText))
        setIsEditing(false)
    }

    return(
        <ListItem 
            sx={{ height: 'auto', paddingTop: 0.5}}
            secondaryAction={
                <Fragment>
                    <IconButton 
                        
                        edge="end" 
                        aria-label="comments" 
                        onClick={()=>setIsEditing(!isEditing)}>
                        <CreateIcon />
                    </IconButton>
                    <IconButton 
                        edge="end" 
                        aria-label="comments" 
                        onClick={()=>dispatch(removeItem(index))}>
                        <DeleteIcon />
                    </IconButton>
                </Fragment>
            }
            disablePadding
        >
            <ListItemButton 
                role={undefined}  >
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            {isEditing ? <AddItem paragraph={true} defaultValue={value} getCurrentText={getCurrentText}/> : <ListItemText paragraph={true} id={labelId} primary={value} />}
            </ListItemButton>
        </ListItem>
    )
}

export default ListItems