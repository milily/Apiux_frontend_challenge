const initialState = {
    items:[]
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':{
            console.log(action)
            return {...state, items: [...state.items, action.text]}
            }
        case 'EDIT_ITEM':{
            const currentList = [...state.items]
            currentList.splice(action.index, 1, action.newText)
            console.log("list y currentList", currentList)
            return {...state, items: currentList}
        }
        case 'REMOVE_ITEM':{
            const list = state.items.filter((_,index)=> index !== action.index)
            return {...state, items: list}
        }  
        default:
            return state
    }
}

export default appReducer