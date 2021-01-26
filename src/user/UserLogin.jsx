import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'throttle-debounce'
import axios from 'axios'

const UserLoginTypes = { REQUEST: 'UserLogin/REQUEST', SUCCESS: 'UserLogin/SUCCESS', FAIL: 'UserLogin/FAIL'}
const UserLoginRequest = action => ({ type: UserLoginTypes.REQUEST, payload: action.payload })
const UserLoginSuccess = action => ({ type: UserLoginTypes.SUCCESS, payload: action.payload })
const UserLoginFail = action => ({ type: UserLoginTypes.FAIL, payload: action.payload })

export default function UserLoginReducer(state = [], action) {
    switch(action.type) {
        case UserLoginTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserLoginTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserLoginTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}

export const UserLogin = () => {
    return (<></>)
}