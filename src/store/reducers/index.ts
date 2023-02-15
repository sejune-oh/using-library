import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({})

export type RootReducer = ReturnType<typeof rootReducer>
export default rootReducer