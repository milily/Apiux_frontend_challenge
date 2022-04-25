import { configureStore } from '@reduxjs/toolkit'
import ListReducer from './reducers/listReducer'

export default configureStore({
    reducer: 
        {
            list: ListReducer
        },
})