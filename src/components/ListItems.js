import React from 'react'

const ListItems = ({items}) => {
    const list = items.map((text)=>(
        <div>
            {text}
        </div>
    ))
    return list
}

export default ListItems