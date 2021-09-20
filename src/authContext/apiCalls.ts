import axios from "axios"
import {ActionType, loginFailure, loginStart, loginSuccess} from "./AuthActions"
import {Dispatch} from "react"

export type UserType = {
  email: string
  password: string
  accessToken?: string
  createdAt?: string
  updatedAt?: string
  isAdmin?: boolean
  profilePic?: string
  username?: string
  __v?: number
  _id?: string
}

export const login = async (user: UserType, dispatch: Dispatch<ActionType> | undefined) => {
  if (dispatch) {
    dispatch(loginStart())
  }

  try {
    const res = await axios.post<UserType>("/auth/login", user)
    if (dispatch) {
      dispatch(loginSuccess(res.data))
      console.log(res.data)
    }
  } catch (err) {
    if (dispatch) {
      dispatch(loginFailure())
    }
  }
}