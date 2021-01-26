import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'throttle-debounce'
import axios from 'axios'

const UserListTypes = { REQUEST: 'UserList/REQUEST', SUCCESS: 'UserList/SUCCESS', FAIL: 'UserList/FAIL'}
const UserListRequest = action => ({ type: UserListTypes.REQUEST, payload: action.payload })
const UserListSuccess = action => ({ type: UserListTypes.SUCCESS, payload: action.payload })
const UserListFail = action => ({ type: UserListTypes.FAIL, payload: action.payload })

export default function UserListReducer(state = [], action) {
    switch(action.type) {
        case UserListTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserListTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserListTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}

export const UserList = () => {
    return (<></>)
}