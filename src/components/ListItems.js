import React, {Fragment} from 'react'
import List from '@mui/material/List';
import SingleItem from './SingleItem'
import { removeItem } from "../redux/actions";

const ListItems = ({items}) => {
    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {items.map((value, index) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
                <SingleItem 
                    key={index} 
                    index={index} 
                    value={value}
                    labelId={labelId}
                />
            );
        })}
    </List>
    )
    
}

export default ListItems