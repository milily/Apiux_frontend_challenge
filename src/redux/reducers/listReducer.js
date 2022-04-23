const initialState = {
    items:[]
  }
  
  function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_ITEM':{
          console.log(action)
          return {...state, items: [...state.items, action.text]}
        }
     
      default:
        return state
    }
  }

  export default appReducer