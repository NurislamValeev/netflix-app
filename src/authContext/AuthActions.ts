import {UserType} from "./apiCalls"

export type ActionType = {
  type: string
  payload?: any
}

export const loginStart = (): ActionType => ({
  type: "LOGIN_START"
})

export const loginSuccess = (user: UserType): ActionType => ({
  type: "LOGIN_SUCCESS",
  payload: user
})

export const loginFailure = (): ActionType => ({
  type: "LOGIN_FAILURE"
})

// LOGOUT
export const logout = (): ActionType => ({
  type: "LOGOUT"
})