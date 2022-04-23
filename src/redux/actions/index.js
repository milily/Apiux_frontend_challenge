export const addItem = (text) => {
    return {
        type: 'ADD_ITEM',
        text: text
    }

}
export const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index: index
    }

}