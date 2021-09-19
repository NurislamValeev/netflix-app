import AuthReducer from "./AuthReducer"
import {createContext, Dispatch, ReactNode, useEffect, useReducer} from "react"
import {ActionType} from "./AuthActions"

const INITIAL_STATE: InitialStateType = {
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  isFetching: false,
  error: false,
}

export type InitialStateType = {
  user: string | null
  isFetching: boolean
  error: boolean
  dispatch?: Dispatch<ActionType>
}

export const AuthContext = createContext<InitialStateType>(INITIAL_STATE)

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}