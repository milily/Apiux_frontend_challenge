import React from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import SingleItem from './SingleItem'

const ListItems = ({items}) => {
    return(
        
        <List sx={{ width: '50%', bgcolor: '#e3e6e9', marginTop: 4 }}>
            {items.map((value, index) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <Card sx={{ backgroundColor: '#edf5f9', borderRadius: '14px', marginBottom: 1, overflowWrap: 'break-word' }}>
                        <SingleItem 
                            key={index} 
                            index={index} 
                            value={value}
                            labelId={labelId}
                        />
                    </Card>
                );
            })}
        </List>
    )
}

export default ListItems