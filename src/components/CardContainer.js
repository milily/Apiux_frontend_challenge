import React, {Fragment} from "react";
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
             <AddItem
                currentText={currentText}/>
            <ListItems
                items={listItems}
            />
        </Fragment>
       

    )
    
}

export default CardContainer