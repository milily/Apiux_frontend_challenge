export const addItem = (text) => {
    return {
        type: 'ADD_ITEM',
        text: text
    }

}
export const editItem = (index, newText) => {
    return {
        type: 'EDIT_ITEM',
        index: index,
        newText: newText
    }

}
export const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index: index
    }

}