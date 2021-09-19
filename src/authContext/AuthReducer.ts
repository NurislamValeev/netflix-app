import {InitialStateType} from "./AuthContext"
import {ActionType} from "./AuthActions"

const AuthReducer = (state: InitialStateType, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      }

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false
      }

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true
      }

    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false
      }

    default:
      return {
        ...state
      }
  }
}

export default AuthReducer