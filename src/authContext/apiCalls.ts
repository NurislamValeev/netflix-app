import axios from "axios"
import {ActionType, loginFailure, loginStart, loginSuccess} from "./AuthActions"
import {Dispatch} from "react"

export type UserType = {
  email: string
  password: string
}

export const login = async (user: UserType, dispatch: Dispatch<ActionType> | undefined) => {
  if (dispatch) {
    dispatch(loginStart())
  }

  try {
    const res = await axios.post("/auth/login", user)
    if (dispatch) {
      dispatch(loginSuccess(res.data))
    }
  } catch (err) {
    if (dispatch) {
      dispatch(loginFailure())
    }
  }
}