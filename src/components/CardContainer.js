import React, {fragment} from "react";
import AddItem from "./AddItem";

const CardContainer = () => {
    const currentText = (text) =>{
        console.log(text)
    }
    return(
        <AddItem
        currentText={currentText}/>
    )
    
}

export default CardContainer