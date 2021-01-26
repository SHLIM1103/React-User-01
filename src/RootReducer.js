import { combineReducers } from 'redux'
import { UserDetailReducer, UserJoinReducer, UserListReducer, UserLoginReducer, UserUpdateReducer } from './user/index'

export const rootReducer = combineReducers({
    UserDetailReducer,
    UserJoinReducer,
    UserListReducer,
    UserLoginReducer,
    UserUpdateReducer
})