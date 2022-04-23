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

const ListItems = ({items}) => {
    const dispatch = useDispatch()
    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {items.map((value, index) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
            <ListItem
                key={index}
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
            );
        })}
    </List>
    )
    
}

export default ListItems