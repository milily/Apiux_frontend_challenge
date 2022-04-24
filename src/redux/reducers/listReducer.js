const initialState = {
    items:[]
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':{
            return {...state, items: [...state.items, action.text]}
            }
        case 'EDIT_ITEM':{
            const currentList = [...state.items]
            currentList.splice(action.index, 1, action.newText)
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