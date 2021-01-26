import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'throttle-debounce'
import axios from 'axios'

const UserDetailTypes = { REQUEST: 'UserDetail/REQUEST', SUCCESS: 'UserDetail/SUCCESS', FAIL: 'UserDetail/FAIL'}
const UserDetailRequest = action => ({ type: UserDetailTypes.REQUEST, payload: action.payload })
const UserDetailSuccess = action => ({ type: UserDetailTypes.SUCCESS, payload: action.payload })
const UserDetailFail = action => ({ type: UserDetailTypes.FAIL, payload: action.payload })

export default function UserDetailReducer(state = [], action) {
    switch(action.type) {
        case UserDetailTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserDetailTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserDetailTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}

export const UserDetail = () => {
    return (<></>)
}