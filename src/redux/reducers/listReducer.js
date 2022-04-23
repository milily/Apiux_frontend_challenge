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
            const list = state.items.filter((_,index)=> index !== action.index)
            return {...state, items: list}
        }   
        default:
            return state
    }
}

export default appReducer