const initialState = {
    items:[]
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':{
            console.log(action)
            return {...state, items: [...state.items, action.text]}
            }
        case 'REMOVE_ITEM':{
            return {...state, items: [...state.items.splice(action.index, 1)]}
        }   
        default:
            return state
    }
}

export default appReducer